import './styles/Perfil.css';
import React from 'react';
import avatar from './../assets/img/avatar.jpg';
import Article from '../components/Article'
import Stats from '../components/Stats'
import galeria1 from './../assets/img/galeria1.jpg';
import galeria2 from './../assets/img/galeria2.jpg';
import galeria3 from './../assets/img/galeria3.jpg';
import galeria4 from './../assets/img/galeria4.jpg';

function Perfil(props) {
    return (     
    <main className="profile">
      <section className="perfil"><img className="perfil__avatar" src={avatar} alt="avatar"/>
        <h2 className="perfil__nombre">John Wick</h2>
        <h3 className="perfil__titulo">Asesino Legendario</h3><button className="perfil__boton">Seguir</button>
        <div className="estadistica--perfil">
          <Stats valor="12k" leyenda="Seguidores"></Stats>
          <Stats valor="11.7k" leyenda="Siguiendo"></Stats>
          <Stats valor="48" leyenda="Articulos"></Stats>
        </div>
        <div className="perfil__minibio">
          <h2>Acerca de Mi</h2>
          <h3>Asesino a sueldo retirado y amante de perros</h3>
        </div>
        <div className="ubicacion--perfil"><i className="fas fa-map-marker-alt"></i>
          <h2>Estados Unidos</h2>
          <h3>227km Cerca</h3>
        </div>
        <div className="galeria">
          <h2>Mis Fotos</h2>
          <div className="galeria__foto-principal">
            <img src={galeria1} alt="Galeria 1"/></div>
          <div className="galeria__fotos-adicionales">
            <img src={galeria2} width="160" alt="Galeria 2"/>
            <img src={galeria3} alt="Galeria 3"/>
            <img src={galeria4}  alt="Galeria 4"/></div>
        </div>
      </section>
      <aside className="articulos">
        <Article categoria="Playstation" titulo="GTA VI: Filtraciones que son bastante dudosas" descripcion="Recientemente se filtró en Internet una importante cantidad de supuesta información sobre Grand Theft Auto VI (GTA VI) que nos ofrece una muy buena idea de lo que podemos esperar."></Article>
        <Article categoria="Switch" titulo="Secuela de The Legend of Zelda: Breath of the Wild anunciada en el E3 2019" descripcion="Nintendo anunció la secuela de The Legend of Zelda: Breath of the Wild en el E3 2019 y todos estamos más que emocionados con esto."></Article>
        <Article categoria="Xbox" titulo="Red Dead Online recibe actualización masiva y sale de Beta" descripcion="Rockstar lanzó el día de hoy la actualización más grande de Red Dead Online desde que el componente online de Red Dead Redemption 2 se lanzó en noviembre."></Article>
      </aside>
    </main>
  );
}



export default Perfil;