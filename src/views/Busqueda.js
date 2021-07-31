import './styles/Busqueda.css';
import React from 'react';
import StadisticBox from './../components/StadisticBox'
import finalFantasy from './../assets/img/final-fantasy.jpg';
import crash from './../assets/img/crash.jpg';
import apex from './../assets/img/apex.jpg';

function Busqueda(props) {
    return (     
    <div>

        <div className="buscador">
            <form>
                <input className="buscador__input" type="text" placeholder="Playstation" />
            </form>
        </div>
        <header className="encabezado--con-filtros">
            <h2>20 Resultados para "Playstation"</h2>
            <div className="filtros"><span>Filtrar Por</span><i className="fa fa-th-large"></i><i className="fa fa-bars"></i></div>
        </header>
        <section className="contenido">
            <StadisticBox imagen={apex} category="Video" title="Apex Legends Temporada 2: un nuevo trailer muestra cambios al mapa" summary="Apex Legends Temporada 2: un nuevo trailer muestra cambios al mapa"></StadisticBox>
            <StadisticBox imagen={crash} category="Video" title="Ya salio la reseña de Crash Team Racing Nitro Fueled" summary="Veinte años después del lanzamiento del original, Crash Team Racing ha recibido un remake total que logra mantener todos los aspectos originales."></StadisticBox>
            <StadisticBox imagen={finalFantasy} category="Video" title="Final Fantasy XIV recibirá una serie live-action en televisión " summary="Final Fantasy XIV Online recibirá una adaptación aTV de parte de Square Enix con Sony Pictures Television y Hivemind."></StadisticBox>
        </section>
    </div>
  );
}



export default Busqueda;