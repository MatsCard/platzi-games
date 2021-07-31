import React from 'react';

function StadisticBoxBackground(props) {
  return (     
      <div className="caja--con-fondo__stats">
        <ul>
            <li key="1">
                <i className="fas fa-share">
                </i>
                    <span>275</span>
            </li>
            <li key="2">
                <i className="fas fa-eye">
                </i>
                    <span>275</span>
            </li>
            <li key="3">
                <i className="fas fa-comment-alt"></i>
                <span>12</span>
            </li>
        </ul>
      </div>
  )
}

export default StadisticBoxBackground;

