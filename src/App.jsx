// App.jsx
import { useState, useEffect } from "react";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import ListaNoticias from "./components/ListaNoticias";

function App() {
  // Nuevo estado para el país, por defecto 'ar' (Argentina)
  const [pais, setPais] = useState("ar"); 
  const [categoria, setCategoria] = useState("top");
  const [noticias, setNoticias] = useState([]);

  // IMPORTANTE: REEMPLAZA ESTO CON TU CLAVE REAL DE LA API
  const API_KEY = "pub_02a40261443b4221803cee3c7f7a7e71"; 

  useEffect(() => {
    const consultarAPI = async () => {
      // 1. Mostrar un array vacío mientras se carga (opcional)
      setNoticias([]);

      try {
        // 2. Incluir tanto 'pais' como 'categoria' en la URL
        const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=${pais}&category=${categoria}&language=es`;
        
        const respuesta = await fetch(url);

        // 3. Manejo robusto de errores de la petición (ej: 401, 403, 404)
        if (!respuesta.ok) {
            console.error(`Error al consultar la API: ${respuesta.status} ${respuesta.statusText}`);
            setNoticias([]); // Asegura que el estado sea un array vacío
            return; 
        }

        const data = await respuesta.json();
        
        // 4. Establecer las noticias, verificando que 'results' exista y sea un array
        setNoticias(data.results && Array.isArray(data.results) ? data.results : []);

      } catch (error) {
        console.error("Error de red o al procesar datos:", error);
        setNoticias([]);
      }
    };

    consultarAPI();
    // 5. El efecto se ejecuta cuando cambia la categoría O el país
  }, [categoria, pais]); 

  return (
    <>
      <Titulo />
      <main className="container">
        <div className="my-4">
          <div className="card">
            <div className="card-header">
              {/* 6. Pasar setPais y el país actual al Formulario */}
              <Formulario 
                setCategoria={setCategoria} 
                setPais={setPais} 
                paisActual={pais} // Se usa para sincronizar el select del país
              />
            </div>
            <div className="card-body">
              <ListaNoticias noticias={noticias} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;