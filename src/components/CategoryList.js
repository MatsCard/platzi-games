

import React from 'react';
import {Link} from 'react-router-dom';

function CategoryList({numero, titulo}) {
  return (  
        <li key={numero}>
            <Link to="/articulo">
                <span className="sidebar--listado__numero">{numero}</span>
                <span className="sidebar--listado__titulo">{titulo}</span>
            </Link></li>
  )
}

export default CategoryList;


