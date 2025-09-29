// Formulario.jsx
// Definiciones fuera del componente para que no se recalcule el array en cada renderizado

// Array de países disponibles
const PAISES = [
    { value: 'ar', label: 'Argentina' },
    { value: 'us', label: 'Estados Unidos' },
    { value: 'mx', label: 'México' },
    { value: 'es', label: 'España' },
    { value: 'br', label: 'Brasil' },
    { value: 'co', label: 'Colombia' },
];

// Array de categorías disponibles
const CATEGORIAS = [
    { value: "top", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
    { value: "politics", label: "Política" },
    { value: "environment", label: "Medio Ambiente" },
];


// Recibimos setCategoria, setPais y el valor actual del país (paisActual)
const Formulario = ({ setCategoria, setPais, paisActual }) => {

  // Manejador para la Categoría
  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
  };
  
  // Manejador para el País
  const handlePaisChange = (e) => {
    setPais(e.target.value);
  };

  return (
    <div className="container mt-3 d-flex justify-content-center pb-3">
      
      <div className="row align-items-center g-3">
        
       
        <div className="col-auto">
          <p className="mb-0">Seleccionar País:</p>
        </div>
        <div className="col-auto">
          <select 
            className="form-select" 
            onChange={handlePaisChange}
            // Controlamos el valor con el estado de App.jsx para que el select inicie en 'ar'
            value={paisActual} 
          >
          
            {PAISES.map(opcion => (
                <option key={opcion.value} value={opcion.value}>
                    {opcion.label}
                </option>
            ))}
          </select>
        </div>
        
        <div className="col-auto">
          <p className="mb-0">Buscar por Categoría:</p>
        </div>
        <div className="col-auto">
          <select 
            className="form-select" 
            onChange={handleCategoriaChange}
            defaultValue="top" // Mantenemos "top" como default inicial
          >
            {CATEGORIAS.map(opcion => (
                <option key={opcion.value} value={opcion.value}>
                    {opcion.label}
                </option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
};

export default Formulario;