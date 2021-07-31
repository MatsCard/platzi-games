import React from 'react';
import './styles/Footer.css'
import logoFooter from './../assets/img/logo--footer.svg'
import {Link} from 'react-router-dom';

function Footer(props) {
  const navFooter = ['Playstation', 'Xbox', 'Nintendo', 'PC', 'Mobile']
  const navFooterItems = navFooter.map((item, key) => <li key={key}><Link to="/">{item}</Link></li>);

  const icons = ['fab fa-instagram','fab fa-pinterest','fab fa-twitter', 'fab fa-facebook-f']
  const navIcons = icons.map((item, key) => <li key={key}><Link to="/"><i className={item}></i></Link></li>);

  return (     
        <footer className="footer--principal">
          <div className="logo logo--footer">
            <img src={logoFooter} alt="Logo Footer" />
          </div>
          <nav className="nav--footer">
            <ul>
              {navFooterItems}

            </ul>
          </nav>
          <div className="nav--social">
            <ul>
              <li>Siguenos</li>

              {navIcons}
            </ul>
          </div>
        </footer>
  );
}

export default Footer;
