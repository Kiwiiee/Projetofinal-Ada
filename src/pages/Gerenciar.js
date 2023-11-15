import Navbar from '../components/navbar'
import Container from '../components/container'
import React, { Component } from 'react';
import Botao from "../components/botao"
import Titulo from "../components/titulo"

function GerenciarConta(){

    const admin = true


    return (
        <div className="App" style={{
            background: "#Aee8db",
            height: "100vh"}}>
                <Navbar/>


                {numero == false ?

                
                <form >
                    <Titulo name="Alterar seus dados"></Titulo>
                    <input type='text' name="txt" placeholder='Nome completo' required />
                    <input type='email' name="email" placeholder='Email' required />
                    <input type='Password' name="pswd" placeholder='Senha' required />
                    <input type='date' name="data" placeholder='Data de nascimento' required />
                    <input type='text' name="estado" placeholder='Estado' required />
                    <input type='text' name="pais" placeholder='País' required />
                    <Botao name="Alterar"></Botao>
                </form>


                 :

                    <>

                           
                    <form >
                        <Titulo name="Alterar seus dados"></Titulo>
                        <input type='text' name="txt" placeholder='Nome completo' required />
                        <input type='email' name="email" placeholder='Email' required />
                        <input type='Password' name="pswd" placeholder='Senha' required />
                        <input type='date' name="data" placeholder='Data de nascimento' required />
                        <input type='text' name="estado" placeholder='Estado' required />
                        <input type='text' name="pais" placeholder='País' required />
                        <Botao name="Alterar"></Botao>
                    </form>


                    <form>
                    <Titulo name="Adicione ou altere categoria:"> </Titulo>

                        //mostrar todas categorias

                        <Botao name="+">+</Botao>
                        

                        <Botao name="Adicionar categoria"></Botao>
                    </form>


    
                    <form>
                    <Titulo name="Adicione um novo jogo:"> </Titulo>
                        <input type='text' name="txt" placeholder='Nome do jogo' required />
                        <select name="categoria" id="categoria">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <input type='text' name="urlJogo" placeholder='Url para o jogo' required />
                        <input type='text' name="urlVideo" placeholder='Url para video de demonstração' required />
                        <textarea name="txt" placeholder="Entre a descrição aqui" required style={{width: "20vw" , height: "10vh"}}/>
                        <label htmlFor='img' style={{fontSize: "20px"}}>Escolha uma imagem para ilustrar:</label>
                        <input type="file" id="img" name="img" accept="image/png, image/jpeg" />
                        <Botao name="Adicionar jogo"></Botao>
                    </form>

            
                
                    </>
                }
          
        </div>
            
        );
    
}
 
export default GerenciarConta;