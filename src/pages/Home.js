import Navbar from '../components/navbar'
import '../css/home.css'
import '../css/effects.css'
import Container from '../components/container'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Titulo from "../components/titulo"
import Subtitulo from "../components/subtitulo"

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className="App" style={{
                background: "#Aee8db",
                height: "100vh",
                }}>
                    <Navbar/>


                    <header style={{paddingTop: "20vh" , display: "flex" , flexDirection: "column" , alignItems: "center"}}>
                        <Titulo style={{width: "69vw" , fontSize: "50px"}} name={`Olá ${this.props.name}, seja bem vindo ao BestBrowserGames!`}></Titulo>
                        <Subtitulo style={{width: "37vw" , fontWeight: "400"}} name="Comece pesquisando abaixo seu próximo jogo a ser avaliado"></Subtitulo>
                    </header>

                    <body style={{display: "flex" , justifyContent: "center" , alignItems: "center" , marginTop: "5vh"}}>

                        <div className='box' style={{height:"5vh" , display: "flex" , flexDirection: "row-reverse" , cursor: "pointer" , padding: "10px 20px" , background: "white" , borderRadius: "30px" , alignItems: "center" , boxShadow: "0 10px 25px rgba(0, 0, 0, 0.215)"}}>

                            <input type='search' placeholder='Hora de pesquisar!' style={{ transition: "0.8s" , outline: "none" , border: "none" , background: "transparent"}}/>
                            <img src='/search.png' style={{width:"2vw"}}></img>

                        </div>


                    </body>
              
            </div>
            
        );
    }
}

Home.propTypes = {
    name: PropTypes.string

}

Home.defaultProps = {
    name: "estranho"

}
 
export default Home;
