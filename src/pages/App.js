
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Navbar from "../components/navbar"
import Botao from "../components/botao"
import Titulo from "../components/titulo"
import Subtitulo from "../components/subtitulo"
import Texto from "../components/texto"
import Avaliacao from "../components/avaliacao"
import '../css/login.css'
// import '../css/effects.css'
import '../css/home.css'
import '../css/carrosel.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoginContainer , { SigninContainer} from '../components/loginContainer'
import Container from '../components/container'
import { useState, useEffect } from "react";
import Home from '../pages/Home'
import Login from '../pages/Login'
import GerenciarConta from '../pages/Gerenciar'
import Avaliacoes from '../pages/Avaliacoes'
import Recomendados from '../pages/Recomendados'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';


function App(){
        const history = createBrowserHistory();

    return (
       <BrowserRouter>
            <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path="Home" element={<Home />}/>
                    <Route path="Gerenciar" element={<GerenciarConta />}/>
                    <Route path="Avaliacoes" element={<Avaliacoes />} history={history}/>
                    <Route path="Recomendados" element={<Recomendados />}/>
            </Routes>
        </BrowserRouter> 

            
        );
    
}


export default App;