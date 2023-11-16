import Subtitulo from "../components/subtitulo"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";


function Avaliacao(){
    useEffect(() => {
        AOS.init();
      }, [])

      return(

        <div style={{background: "#Caeae3" , width: "65vw"   , display: "flex" , justifyContent: "center" , alignItems: "flex-start" , marginTop: "3vh" , marginLeft: "27vw" , flexDirection: "column" , borderRadius: "60px" , height: "30vh"}}  data-aos="fade-up" >
        <div style={{marginLeft: "6vw"}}> 
            <Subtitulo name="Pessoa escreveu..."></Subtitulo>
            <img style={{width:"1vw"}} src='/star.png'></img>
            <img style={{width:"1vw"}} src='/star.png'></img>
            <img style={{width:"1vw"}} src='/star.png'></img>
            <img style={{width:"1vw"}} src='/star.png'></img>
            <img style={{width:"1vw"}} src='/star.png'></img>
        </div>

        <div style={{marginLeft: "6vw" , width:"50vw" , overflowWrap: "break-word"}}>
            <p style={{fontFamily: "Roboto Slab"}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>

        </div>

      )

}

export default Avaliacao