import './styles/Home.css';
import React from 'react';
import {Link} from 'react-router-dom';
import ff from './../assets/img/ff.jpg';
import xbox from './../assets/img/xbox.jpg';
import fortnite from './../assets/img/fortnite.jpg';
import zelda from './../assets/img/zelda.jpg';
import cyberpunk from './../assets/img/cyberpunk-2077.jpg';
import rdr2 from './../assets/img/rdr2.jpg';
import SmallBox from '../components/SmallBox';
import BigBox from '../components/BigBox';
import MediumBox from '../components/MediumBox';
import CategoryList from '../components/CategoryList'

function Home(props) {

  return (     
    <main className="contenedor--home">
      
          
      <BigBox imagen={cyberpunk} categoria="Destacadas" titulo="Cyberpunk 2077 tiene tres prólogos distintos" contenido="En Cyberpunk 2077 los jugadores podrán seleccionar entre tres historias de origen diferentes, cada una presentando una ubicación de partida distinta para su personaje."></BigBox>
      <SmallBox clase="caja-rdr2" imagen={rdr2} categoria="PS4" titulo="Red Dead Redemption 2 llegará a PC" contenido=""></SmallBox>

      <div className="banner--homepage">
        <h3>Apex Legends Temporada 2: un nuevo trailer muestra cambios al mapa.</h3>
        <p>Dos nuevos trailers de Apex Legends muestran lo que nos espera en la Temporada 2 del battle royale de Respawn.</p><Link className="button" to="/articulo">Leer mas</Link>
      </div>
      <SmallBox clase="caja-ff" imagen={ff} categoria="PS4" titulo="Final Fantasy XIV recibirá una serie live-action en televisión" contenido=""></SmallBox>
      <SmallBox clase="caja-xbox" imagen={xbox} categoria="XBOX" titulo="Conoce las actualizaciones de XBOX Game Pass" contenido=""></SmallBox>
      <SmallBox clase="caja-fortnite" imagen={fortnite} categoria="FORTNITE" titulo="Fortnite une fuerzas con Stranger Things" contenido=""></SmallBox>
      <MediumBox clase="caja-zelda" imagen={zelda} categoria="Switch" titulo="Secuela de The Legend of Zelda: Breath of the Wild anunciada en el E3 2019" contenido=""></MediumBox>

      <div className="sidebar--listado">
        <h3>Noticias Destacadas</h3>
        <ul>
          <CategoryList key="213" numero="1" titulo="GTA VI: Filtraciones que son bastante dudosas"></CategoryList>
          <CategoryList key="234" numero="2" titulo="Secuela de The Legend of Zelda: Breath of the Wild anunciada en el E3 2019"></CategoryList>
          <CategoryList key="23423" numero="3" titulo="Red Dead Online recibe actualización masiva y sale de Beta"></CategoryList>
        </ul>
      </div>
    </main>
  );
}



export default Home;