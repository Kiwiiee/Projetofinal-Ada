import Navbar from '../components/navbar'
import Container from '../components/container'
import React, { Component } from 'react';
import Titulo from "../components/titulo"
import Subtitulo from "../components/subtitulo"
import { useState, useEffect } from "react";
import '../css/carrosel.css'
import axios from "axios";
import {Link} from "react-router-dom";
import Avaliacoes from '../pages/Avaliacoes'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Icon } from '@iconify/react';

const MAX_VISIBILITY = 3;



const Card = ({src , titulo , id}) => (
  <div className='card' >
    <Routes>
      <Route path="Avaliacoes" render={(props) => <Avaliacoes {...props} img={src} title={titulo} id={id}/>} img={src} title={titulo} id={id}/>
    </Routes>
    <Link to="/Avaliacoes" ><img src={src} style={{width: "45vw" , height: "47vh" , borderRadius:"30px" , marginTop: "-3.5vh" , marginLeft: "-5vh" }} ></img></Link>
    <Subtitulo name={titulo}></Subtitulo>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);
  

  return (
    <div className='carousel' style={{marginTop: "-10vh" , marginRight: "5vw"}}>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><Icon icon="typcn:chevron-left-outline" /></button>}
      
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><Icon icon="typcn:chevron-right-outline" /></button>}
    </div>
  );
};


function Recomendados(){

  const [post , setPostState] = useState({data : [] })
  const [imgs , setImg] = useState([])
  const [names , setName] = useState([])
  const [id , setId] = useState([])

  useEffect(() =>{
    async function fetchData(){
      const res = await fetch(
        `https://api-best-browser-games.vercel.app/games`,
        {
            method: "GET",
        }
        
      )

      const response = await res.json();

      console.log(response)


      setPostState((s) => ({ ...s, data: response }));

    }

    fetchData()
  } , [])

  useEffect(() => {

    let favorita = "Arcade"

    let imagens = [null]
    let nomes = [null]
    let ids = [null]

    console.log(post)

    post.data.forEach((game) => {
      if(game.category.name == favorita){
        imagens.push(game.imageURL)
        nomes.push(game.name)
        ids.push(game._id)
      }
    })
    setImg(imagens)
    setName(nomes)
    setId(ids)
  

      } , [post])


    let numberGames = [...new Array(imgs.length > 0 ? imgs.length - 1 : imgs.length)]

    console.log()


    return (
        <div className="App" style={{
            background: "#Aee8db",
            height: "130vh",
            display: "flex" , 
            }}>
                <Navbar/>


                <div style={{display: "flex" , flexDirection: "column" , alignItems: "center" , justifyContent: "center" , height: "100vh", width: "99vw" , marginTop: "10vh"}}>

                
                    <Titulo name="Seus recomendados"></Titulo>


                    <div style={{
                        background: "#Caeae3" , 
                        width: "85vw"   , 
                        display: "flex" , 
                        justifyContent: "center" , 
                        alignItems: "center" , 
                        flexDirection: "column" , 
                        marginLeft: "2vw" , 
                        height: "80vh" , 
                        marginTop: "5vh",
                        borderRadius: "60px"
                    }}>
                            <Carousel >
                            {numberGames.map((_, i) => (
                                <Card src={imgs[i + 1]} titulo={names[i + 1]} id={id}/>
                            ))}
                            </Carousel>
                            
                    </div>

                </div>
          
        </div>
        
    );

}
 
export default Recomendados;