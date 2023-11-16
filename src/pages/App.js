
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from '../pages/Home'
import Login from '../pages/Login'
import GerenciarConta from '../pages/Gerenciar'
import Avaliacoes from '../pages/Avaliacoes'
import Recomendados from '../pages/Recomendados'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';



function App(){



    return (
       <Router>
            <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path="Home" element={<Home />}/>
                    <Route path="Gerenciar" element={<GerenciarConta />}/>
                    <Route path="Avaliacoes" element={<Avaliacoes />}/>
                    <Route path="Recomendados" element={<Recomendados />}/>
            </Routes>
        </Router> 

            
        );
    
}


export default App;