import React from 'react';
import StadisticBoxBackground from './StadisticBoxBackground'
import {Link} from 'react-router-dom';

function MediumBox({clase, imagen, categoria, titulo, contenido}) {
  return (  
        <Link to="/articulo" className={"caja--con-fondo caja--mediana " + clase}>
            <div className="caja__imagen"><img src={imagen} alt={categoria} /></div>
            <div className="caja--con-fondo__contenido">
                <span className="caja--con-fondo__categoria">{categoria}</span>
                <h2>{titulo}</h2>
            </div>
            <StadisticBoxBackground></StadisticBoxBackground>
        </Link>
  )
}

export default MediumBox;


