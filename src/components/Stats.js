import React from 'react';

function Stats({valor,leyenda}) {
  return (     
      <div className="estadistica_elemento">
          <h3>
              {valor}
          </h3>
          <span>
              {leyenda}
          </span>
      </div>
  )
}

export default Stats;
