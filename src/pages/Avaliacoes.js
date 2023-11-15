import Navbar from '../components/navbar'
import Container from '../components/container'
import React, { Component } from 'react';
import Subtitulo from "../components/subtitulo"
import Texto from "../components/texto"
import Avaliacao from "../components/avaliacao"
import Titulo from "../components/titulo"
import Botao from "../components/botao"
import { useLocation } from 'react-router-dom'

class Avaliacoes extends Component{

    constructor(props) {
        super(props);
        this.state = {
          src1: "/star.png",
          src2: "/star.png",
          src3: "/star.png",
          src4: "/star.png",
          src5: "/star.png",
          checked: false,
          checked2: false,
          checked3: false,
          checked4: false,
          checked5: false
        };
      }



      changeStar1 = () => {
        this.setState({src1: "/star (1).png" })

      }

      checkStar1 = () => {
        if(this.state.checked){
            this.setState({checked: false})

        }else{
            this.setState({checked: true})
            this.setState({checked2: false})
            this.setState({checked3: false})
            this.setState({checked4: false})
            this.setState({checked5: false})

        }

      }
      changeStar2 = () => {
        this.setState({src1: "/star (1).png" , src2: "/star (1).png"})

      }


      checkStar2 = () => {
        if(this.state.checked2){
            this.setState({checked2: false})

        }else{
            this.setState({checked2: true})
            this.setState({checked: false})
            this.setState({checked3: false})
            this.setState({checked4: false})
            this.setState({checked5: false})
            
        }


      }
      changeStar3 = () => {
        this.setState({src1: "/star (1).png" , src2: "/star (1).png", src3: "/star (1).png"})

      }

      checkStar3 = () => {
        if(this.state.checked3){
            this.setState({checked3: false})

        }else{
            this.setState({checked3: true})
            this.setState({checked2: false})
            this.setState({checked: false})
            this.setState({checked4: false})
            this.setState({checked5: false})
        }


      }
      changeStar4 = () => {
        this.setState({src1: "/star (1).png" , src2: "/star (1).png", src3: "/star (1).png" , src4: "/star (1).png"})

      }

        checkStar4 = () => {
            if(this.state.checked4){
                this.setState({checked4: false})

            }else{
                this.setState({checked4: true})
                this.setState({checked2: false})
                this.setState({checked3: false})
                this.setState({checked: false})
                this.setState({checked5: false})
            }


      }
      changeStar5 = () => {
        this.setState({src1: "/star (1).png" , src2: "/star (1).png", src3: "/star (1).png" , src4: "/star (1).png" , src5: "/star (1).png"})

      }

      checkStar5 = () => {
        if(this.state.checked5){
            this.setState({checked5: false})
        }else{
            this.setState({checked5: true})
            this.setState({checked2: false})
            this.setState({checked3: false})
            this.setState({checked: false})
            this.setState({checked4: false})
        }


  }

      
      changeStarBlank = () => {
        this.setState({src1: "/star.png" , src2: "/star.png", src3: "/star.png", src4: "/star.png", src5: "/star.png"})
        if(this.state.checked){
            this.setState({src1: "/star (1).png" })
        }else if(this.state.checked2){
            this.setState({src1: "/star (1).png" , src2: "/star (1).png"})
        }else if(this.state.checked3){
            this.setState({src1: "/star (1).png" , src2: "/star (1).png", src3: "/star (1).png"})
        }else if(this.state.checked4){
            this.setState({src1: "/star (1).png" , src2: "/star (1).png", src3: "/star (1).png" , src4: "/star (1).png"})
        }else if(this.state.checked5){
            this.setState({src1: "/star (1).png" , src2: "/star (1).png", src3: "/star (1).png" , src4: "/star (1).png" , src5: "/star (1).png"})
        }
      }

      
    

      render(){
        return (
            <div className="App" style={{
                background: "#Aee8db",
                height: "270vh",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                }}>
                    <Navbar/>

                        <div style={{background: "#Caeae3" , 
                        width: "25vw" , 
                        height: "90vh" , 
                        borderRadius: "50px" , 
                        display: "flex" , 
                        justifyContent: "center" , 
                        alignItems: "center" , 
                        flexDirection: "column" , 
                        marginTop: "20vh"}}>
                            <img src={this.props.location.state.img} style={{width: "20vw"}}></img>
                            <Subtitulo name={this.props.location.state.title}></Subtitulo>
                            <Texto name={"-"}></Texto>

                        </div>

                        <form style={{
                            background: "#Caeae3" , 
                            width: "65vw"   , 
                            display: "flex" , 
                            justifyContent: "center" , 
                            alignItems: "center" , 
                            flexDirection: "column" , 
                            marginLeft: "2vw" , 
                            height: "90vh" , 
                            marginTop: "20vh"}}>

                            <Titulo name="Sua avaliação:"></Titulo>

                        <input type="checkbox" id="Estrela1" name="umaEstrela" value="Estrelas" style={{display:"none"}} onChange={this.checkStar1} checked={this.state.checked}/>
                        <input type="checkbox" id="Estrela2" name="duasEstrelas" value="Estrelas" style={{display:"none"}} onChange={this.checkStar2} checked={this.state.checked2}/>
                        <input type="checkbox" id="Estrela3" name="tresEstrelas" value="Estrelas" style={{display:"none"}} onChange={this.checkStar3} checked={this.state.checked3}/>
                        <input type="checkbox" id="Estrela4" name="quatroEstrelas" value="Estrelas" style={{display:"none"}} onChange={this.checkStar4} checked={this.state.checked4}/>
                        <input type="checkbox" id="Estrela5" name="cincoEstrelas" value="Estrelas" style={{display:"none"}} onChange={this.checkStar5} checked={this.state.checked5}/>


                            <div>

                                <label htmlFor='Estrela1' onMouseOver={this.changeStar1}  onMouseOut={this.changeStarBlank} ><img style={{width:"2vw"}} src={this.state.src1} id="umaEstrela"></img></label>
                                <label htmlFor='Estrela2' onMouseOver={this.changeStar2}  onMouseOut={this.changeStarBlank} ><img style={{width:"2vw"}} src={this.state.src2} id="duasEstrelas"></img></label>
                                <label htmlFor='Estrela3' onMouseOver={this.changeStar3}  onMouseOut={this.changeStarBlank}><img style={{width:"2vw"}} src={this.state.src3} id="tresEstrelas"></img></label>
                                <label htmlFor='Estrela4' onMouseOver={this.changeStar4}  onMouseOut={this.changeStarBlank}><img style={{width:"2vw"}} src={this.state.src4} id="quatroEstrelas"></img></label>
                                <label htmlFor='Estrela5' onMouseOver={this.changeStar5}  onMouseOut={this.changeStarBlank}><img style={{width:"2vw"}} src={this.state.src5} id="cincoEstrelas"></img></label>
                                
                            </div>
                            <textarea placeholder="Digite sua avaliação" style={{width:"50vw" , height:"40vh" , fontSize: "20px"}} maxLength={250}></textarea>

                            <div style={{marginBottom: "-10vh"}}>
                            <Botao name="Enviar"></Botao>
                            </div>
                            

                        </form>

                        <div data-aos="fade-up" style={{justifySelf: "end" , height: "10vh" , marginTop:"-70vh"}}>

                        <Titulo name="Outras avaliações:" ></Titulo>
                       

                       <Avaliacao></Avaliacao>
                       <Avaliacao></Avaliacao>
                       <Avaliacao></Avaliacao>

                       </div>
              
            </div>
        );
    }
    
}
 
export default Avaliacoes;