import Subtitulo from "../components/subtitulo"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";

function Jogo(props){
    useEffect(() => {
        AOS.init();
      }, [])

      return(

        <div style={{background: "#Caeae3" , width: "65vw"   , display: "flex" , justifyContent: "center" , alignItems: "flex-start" , marginTop: "3vh" , flexDirection: "column" , borderRadius: "60px" , height: "30vh" , marginTop: "5vh"}}  data-aos="fade-up" >
        <div style={{marginLeft: "6vw"}}> 
            <img style={{width:"1vw"}} src={props.img}></img>
        </div>
        <div style={{marginLeft: "6vw"}}> 
            <h2>{props.titulo}</h2>
            {props.score == 0 ?
                <>
                    <img style={{width:"1vw"}} src='/star.png'></img>
                    <img style={{width:"1vw"}} src='/star.png'></img>
                    <img style={{width:"1vw"}} src='/star.png'></img>
                    <img style={{width:"1vw"}} src='/star.png'></img>
                    <img style={{width:"1vw"}} src='/star.png'></img>
                </>
            : props.score == 1 ?
            <>
                <img style={{width:"1vw"}} src='/star (1).png'></img>
                <img style={{width:"1vw"}} src='/star.png'></img>
                <img style={{width:"1vw"}} src='/star.png'></img>
                <img style={{width:"1vw"}} src='/star.png'></img>
                <img style={{width:"1vw"}} src='/star.png'></img>
            </>
            : props.score == 2 ?
            <>
                <img style={{width:"1vw"}} src='/star (1).png'></img>
                <img style={{width:"1vw"}} src='/star (1).png'></img>
                <img style={{width:"1vw"}} src='/star.png'></img>
                <img style={{width:"1vw"}} src='/star.png'></img>
                <img style={{width:"1vw"}} src='/star.png'></img>
            </>
            : props.score == 3 ?
            <>
                <img style={{width:"1vw"}} src='/star (1).png'></img>
                <img style={{width:"1vw"}} src='/star (1).png'></img>
                <img style={{width:"1vw"}} src='/star (1).png'></img>
                <img style={{width:"1vw"}} src='/star.png'></img>
                <img style={{width:"1vw"}} src='/star.png'></img>
            </>
            : props.score == 4 ?
            <>
                <img style={{width:"1vw"}} src='/star (1).png'></img>
                <img style={{width:"1vw"}} src='/star (1).png'></img>
                <img style={{width:"1vw"}} src='/star (1).png'></img>
                <img style={{width:"1vw"}} src='/star (1).png'></img>
                <img style={{width:"1vw"}} src='/star.png'></img>
            </>
            : 
            <>
                <img style={{width:"1vw"}} src='/star (1).png'></img>
                <img style={{width:"1vw"}} src='/star (1).png'></img>
                <img style={{width:"1vw"}} src='/star (1).png'></img>
                <img style={{width:"1vw"}} src='/star (1).png'></img>
                <img style={{width:"1vw"}} src='/star (1).png'></img>

            </>

            }
        </div>

        <div style={{marginLeft: "6vw" , width:"50vw" , overflowWrap: "break-word"}}>
            <p style={{fontFamily: "Roboto Slab"}}>{props.description}</p>
            <p >Jogue agora: {props.url}</p>
        </div>

        </div>

      )

}

export default Jogo