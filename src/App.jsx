import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Titulo />
      <main className="container">
        <div className="my-4">
          <div className="card">
            <div className="card-header">
              <Formulario/>
            </div>
            <div className="card-body">
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
