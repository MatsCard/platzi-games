import React from 'react';
import StadisticBoxBackground from './StadisticBoxBackground'
import {Link} from 'react-router-dom';

function BigBox({imagen, categoria, titulo, contenido}) {
  return (  
        <Link to="/articulo" className="caja--con-fondo caja--grande">
            <div className="caja__imagen"><img src={imagen} alt={categoria} /></div>
            <div className="caja--con-fondo__contenido"><span className="caja--con-fondo__categoria">{categoria}</span>
                <h2>{titulo}</h2>
                <p>{contenido}</p>
            </div>
            <StadisticBoxBackground></StadisticBoxBackground>
        </Link>
  )
}

export default BigBox;


