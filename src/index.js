import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.css'
import './utils/reboot.css'
import './utils/globals.css'
import './utils/banners.css'
import './utils/breakpoints.css';
import './utils/cajas.css'
import './utils/filters.css'
import './utils/gallery.css'
import './utils/intro.css'
import './utils/locations.css'
import './utils/sidebars.css'
import './utils/stadistics.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
