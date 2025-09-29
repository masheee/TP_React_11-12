
import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {
  return (
    <div className="row">
      {noticias.length === 0 ? (
        <p>No hay noticias disponibles.</p>
      ) : (
        noticias.map((noticia, index) => (
          <Noticia key={index} noticia={noticia} />
        ))
      )}
    </div>
  );
};

export default ListaNoticias;
