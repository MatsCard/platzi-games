import React from 'react';
import logoHeader from '../assets/img/logo--header.svg'
import {Link} from 'react-router-dom';
import './styles/Header.css'

function Header(props) {
    const consoles = ['Playstation', 'Xbox', 'Nintendo', 'PC', 'Mobile']
    const items = consoles.map((item, key) => <li key={key}><Link to="#">{item}</Link></li>);

    return (     
        <header className="header--principal">
            <Link to="/platzi-games" className="logo logo--header">
                <img src={logoHeader} alt="logo" />
            </Link>
            <nav className="nav--header">
                <ul>
                    {items}
                    <li key="enough"><Link to="/perfil">Perfil</Link></li>
                </ul>
            </nav>
            <Link to="/resultados-busqueda" className="header__busqueda">
                <i className="fas fa-search"></i>
                <span>Search</span>
            </Link>
        </header>
    );
}

export default Header;

