import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Layout from '../layout/Layout'
import Home from './../views/Home'
import Perfil from './../views/Perfil'
import Articulo from './../views/Articulo'
import Busqueda from './../views/Busqueda'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/articulo" component={Articulo} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/resultados-busqueda" component={Busqueda} />
        </Layout>
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
