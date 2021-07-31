import React from 'react';

function Article({categoria ,titulo, descripcion}) {
  return (     
      <div className="articulo">
          <span className="articulo__categoria">
              {categoria}
          </span>
          <h2 className="articulo__titulo">
              {titulo}
          </h2>
          <p className="articulo__descripcion">
              {descripcion}
          </p>
      </div>
  )
}

export default Article;
