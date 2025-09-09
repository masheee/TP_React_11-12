

const Formulario = () => {
  return (
    <div className="container mt-3 d-flex justify-content-center pb-3">
      <div className="row align-items-center">
        <div className="col-auto">
          <p className="mb-0">Buscar por categoría:</p>
        </div>
        <div className="col-auto">
          <form>
            <select className="form-select">
              <option value="">Options</option>
              <option value="deportes">Deportes</option>
              <option value="politica">Política</option>
              <option value="tecnologia">Tecnología</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
