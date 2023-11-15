import '../css/login.css'
import LoginContainer , { SigninContainer} from '../components/loginContainer'
import Home from './Home'
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar"
import Botao from "../components/botao"
import Titulo from "../components/titulo"



function Login(){

        return (
            <div style={{
                background: "#Aee8db",
                height: "100vh",
                fontFamily: "Roboto Slab"
                }}>

                    <Navbar/>

                    <div style={{display: "flex" , justifyContent: "center" , alignItems: "center" }}>

                    <div style={{boxShadow: "50px 30px 50px rgba(0, 0, 0, 0.215)" , height: "80vh" , overflowY: "hidden" , marginTop: "15vh" , borderRadius: "30px"}}>

                    <input type="checkbox" id='chk' style={{display: "none"}}/>

                        <div className='signup'>

                        <form >
                            <label htmlFor='chk' className='btnCadastro' style={{marginBottom: "0vh"}}>Cadastrar</label>
                            <input type='text' name="txt" placeholder='Nome completo' required />
                            <input type='email' name="email" placeholder='Email' required />
                            <input type='Password' name="pswd" placeholder='Senha' required />
                            <input type='date' name="data" placeholder='Data de nascimento' required />
                            <input type='text' name="estado" placeholder='Estado' required />
                            <input type='text' name="pais" placeholder='País' required />
                            <Botao name="Cadastrar"></Botao>
                        </form>

                        </div>

                        <div className="login">
                            <label htmlFor='chk' style={{color: "black"}}>Login</label>
                            <input type='email' name="email" placeholder='Email' required />
                            <br />
                            <input type='Password' name="pswd" placeholder='Senha' required />
                            <Botao name="Login"></Botao>
                        </div>
                     </div>
                    </div>
            </div>
        );
    
}

 
export default Login;