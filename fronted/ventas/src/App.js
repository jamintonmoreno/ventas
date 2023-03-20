
import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


//Components
import Home from './pages/Home';
import Clientes from './pages/Clientes';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/clientes' Component={Clientes} />
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
