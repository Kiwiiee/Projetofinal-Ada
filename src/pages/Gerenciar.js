import Navbar from '../components/navbar'
import Container from '../components/container'
import React, { Component } from 'react';
import Botao from "../components/botao"
import Titulo from "../components/titulo"
import Formulario from "../components/formulario"

function GerenciarConta(){

    const admin = true


    return (
        <div className="App" style={{
            background: "#Aee8db",
            height: "100vh"}}>
                <Navbar/>

                <Container>

                {admin == false ?
                

                
                <Formulario style={{marginTop: "3vh" , borderRadius: "60px"}}>
                    <Titulo name="Alterar seus dados"></Titulo>
                    <input type='text' name="txt" placeholder='Nome completo' required />
                    <input type='email' name="email" placeholder='Email' required />
                    <input type='Password' name="pswd" placeholder='Senha' required />
                    <input type='date' name="data" placeholder='Data de nascimento' required />
                    <input type='text' name="estado" placeholder='Estado' required />
                    <input type='text' name="pais" placeholder='País' required />
                    <Botao name="Alterar"></Botao>
                </Formulario>


                 :

                    <div style={{marginTop: "20vh"}}>

                    <Titulo name="Área Admin" ></Titulo>

                           
                    <Formulario style={{marginTop: "3vh" , borderRadius: "60px"}}>
                        <Titulo name="Alterar seus dados"></Titulo>
                        <input type='text' name="txt" placeholder='Nome completo' required />
                        <input type='email' name="email" placeholder='Email' required />
                        <input type='Password' name="pswd" placeholder='Senha' required />
                        <input type='date' name="data" placeholder='Data de nascimento' required />
                        <input type='text' name="estado" placeholder='Estado' required />
                        <input type='text' name="pais" placeholder='País' required />
                        <Botao name="Alterar"></Botao>
                    </Formulario>


                    <Formulario style={{marginTop: "3vh" , borderRadius: "60px"}}>
                    <Titulo name="Adicione ou altere categoria:"> </Titulo>

                        //mostrar todas categorias

                        <Botao name="+">+</Botao>
                        

                        <Botao name="Adicionar categoria"></Botao>
                    </Formulario>


    
                    <Formulario style={{marginTop: "3vh" , borderRadius: "60px"}}>
                    <Titulo name="Adicione um novo jogo:"> </Titulo>
                        <input type='text' name="txt" placeholder='Nome do jogo' required />
                        <br />
                        <select name="categoria" id="categoria" style={{width:"20vw" , height: "5vh" , borderWidth: "2px"}}>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <br />
                        <input type='text' name="urlJogo" placeholder='Url para o jogo' required />
                        <br />
                        <input type='text' name="urlVideo" placeholder='Url para video de demonstração' required />
                        <br />
                        <textarea name="txt" placeholder="Entre a descrição aqui" required style={{width: "20vw" , height: "10vh" , borderWidth: "2px"}}/>
                        <br />
                        <label htmlFor='img' style={{fontSize: "20px"}}>Escolha uma imagem para ilustrar:</label>
                        <br />
                        <input type="file" id="img" name="img" accept="image/png, image/jpeg" />
                        <Botao name="Adicionar jogo"></Botao>
                    </Formulario>

            
                
                    </div>
                }
          </Container>
        </div>
            
        );
    
}
 
export default GerenciarConta;