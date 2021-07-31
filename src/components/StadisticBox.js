import React from 'react';
import './styles/StadisticBoxBackground.css'


function StadisticBox({imagen, category, title, summary}) {
  return (     
	  <div className="caja">
		  <div className="caja__imagen">
			  <img src={imagen} alt={category} />
		  </div>
		  <div className="caja__contenido">
			  <span className="caja__categoria">
				  {category}
			  </span>
			  <h3>
				  {title}
			  </h3>
			  <p>
				  {summary}
			  </p>
		  </div>

		  <div className="estadistica--articulos">
			  <ul>
				  <li>
					  <i className="fas fa-share">
					  </i>
						  <span>275</span>
				  </li>
				  <li>
					  <i className="fas fa-eye">
					  </i>
						  <span>275</span>
				  </li>
				  <li>
					  <i className="fas fa-comment-alt"></i>
					  <span>12</span>
				  </li>
			  </ul>
		  </div>
	  </div>
  )
}

export default StadisticBox;
