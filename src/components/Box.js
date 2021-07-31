import React from 'react';
import {Link} from 'react-router-dom';

function Box({imagen, categoria, titulo, contenido}) {
  return (     
    <div className="caja">
        <div className="caja__imagen">
            <img src={imagen} alt={categoria} />
        </div>
        <div className="caja__contenido">
            <span className="caja__categoria">
                {categoria}
            </span>
            <h3>
                {titulo}
            </h3>
            <p>{contenido}</p>
            <Link to="/articulo">Leer Más</Link>
        </div>
    </div>
  )
}

export default Box;

