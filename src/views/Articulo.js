import './styles/Articulo.css';
import React from 'react';
import xbox from './../assets/img/xbox.jpg';
import fortnite from './../assets/img/fortnite.jpg';
import cuphead from './../assets/img/cuphead.jpg';
import intro from './../assets/img/intro.jpg';
import avatar from './../assets/img/avatar.jpg';
import Box from '../components/Box'

function Articulo(props) {
    
  return (     
    <div>
        <section className="intro">
            <div className="intro__imagen"><img src={intro} alt="intro"/></div>
            <div className="intro__contenido"><span className="intro__categoria">Noticias</span>
            <h1 className="intro__titulo">Cyberpunk 2077 tiene tres prólogos distintos</h1>
            </div>
            <div className="intro__autor"><img src={avatar} alt="avatar"/><span className="intro__autor-titulo">Autor</span><span className="intro__autor-nombre">John Wick</span></div>
        </section>
        <article className="articulo--principal">
            <p className="articulo--principal__intro">En Cyberpunk 2077 los jugadores podrán seleccionar entre tres historias de origen diferentes, cada una presentando una ubicación de partida distinta para su personaje.</p>
            <p>Conversando con VG247, el diseñador Pawel Sasko explicó un sistema que CD Projekt RED llama "Lifepaths" (caminos de vida), que en la práctica suena muy similar a las historias sobre el origen del personaje de Dragon Age: Origins.</p>
            <p>Uno de estos caminos de vida comienza en los Badlands, las áridas tierras que rodean Night City (suponemos que es el Nomad). CD Projekt RED no ha ofrecido descripción de las otras áreas, pero parece sensato suponer que los personajes de Corpo podrían comenzar en un distrito más corporativo de Night City, mientras que Street Kids podrían provenir de áreas de barrios marginales.</p>
            <h3>Noticias, fecha de lanzamiento y plataformas de Cyberpunk 2077</h3>
            <p>En otras noticias, recientemente descubrimos que CD Projekt RED tiene planes de desarrollar tres juegos Cyberpunk, y que Cyberpunk 2077 contará con tramas románticas similares a las que vimos en The Witcher 3. Si el romance no es su estilo, no se preocupen, podrán ser tan malvados como deseen gracias a que Cyberpunk 2077 no tendrá un sistema de moralidad.</p>
            <p>Cyberpunk 2077 se pondrá disponible el 16 de abril de 2020 y se lanzará en versiones para PC, PlayStation 4 y Xbox One.</p>
            <h2>No te Pierdas...</h2>
        </article>
        <section className="contenedor--cajas">
            <Box imagen={xbox} categoria="Xbox" titulo="Fortnite une fuerzas con Stranger Things" contenido="A una semana terminado el E3, Microsoft anunció la 1era rotación de juegos para Xbox."></Box>
            <Box imagen={fortnite} categoria="Fortnite" titulo="Conoce las actualizaciones de Game Pass" contenido="Portales hacia el Upside Down han aparecido dentro de Fortnite, y aunque no funcionan igual."></Box>
            <Box imagen={cuphead} categoria="Cuphead" titulo="Cuphead se atrasa hasta el año 2020" contenido="Los miembros de Studio MDHR revelan la razón detrás del atraso de la fecha de lanzamiento."></Box>
        </section>
    </div>
  );
}



export default Articulo;