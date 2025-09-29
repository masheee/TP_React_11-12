

const Noticia = ({ noticia }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        {noticia.image_url && (
          <img
            src={noticia.image_url}
            alt={noticia.title}
            className="card-img-top"
          />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{noticia.title}</h5>
          <p className="card-text">{noticia.description}</p>
          <a
            href={noticia.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-auto"
          >
            Ver noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
