import Navbar from '../components/navbar'
import '../css/home.css'
import '../css/effects.css'
import Container from '../components/container'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Titulo from "../components/titulo"
import Subtitulo from "../components/subtitulo"
import Jogo from "../components/jogo"
import {useRef} from 'react';
import { useState, useEffect } from "react";

function Home(props) {
    const [post , setPostState] = useState({data : [] })
    const [imgs , setImg] = useState([])
    const [names , setName] = useState([])
    const [id , setId] = useState([])
    const [urls , setUrl] = useState([])
    const [scores , setScore] = useState([])
    const [descriptions , setDescription] = useState([])
    const [input, setInput] = useState(props?.value ?? '')

    const inputRef = useRef(" ");


    function Search(){
        useEffect(() =>{
        setInput(inputRef.current.value)
        console.log(input)
        } , [])

    }


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
            } , [input])
    
        useEffect(() => {
    
    
        let imagens = [null]
        let nomes = [null]
        let ids = [null]
        let url = [null]
        let estrelas = [null]
        let descricao = [null]
    
        console.log(post)
    
        post.data.forEach((game) => {
          if(game.name.includes(input)){
            imagens.push(game.imageURL)
            nomes.push(game.name)
            ids.push(game._id)
            url.push(game.url)
            estrelas.push(game.score)
            descricao.push(game.description)
          }
        })
        setImg(imagens)
        setName(nomes)
        setId(ids)
        setUrl(url)
        setScore(estrelas)
        setDescription(descricao)
      
    
        } , [post])


        

        return (
            <div className="App" style={{
                background: "#Aee8db",
                height: "100vh",
                }}>
                    <Navbar/>


                    <header style={{paddingTop: "20vh" , display: "flex" , flexDirection: "column" , alignItems: "center"}}>
                        <Titulo style={{width: "69vw" , fontSize: "50px"}} name={`Olá ${props.name}, seja bem vindo ao BestBrowserGames!`}></Titulo>
                        <Subtitulo style={{width: "37vw" , fontWeight: "400"}} name="Comece pesquisando abaixo seu próximo jogo a ser avaliado"></Subtitulo>
                    </header>

                    <body style={{display: "flex" , justifyContent: "center" , alignItems: "center" , marginTop: "5vh" , flexDirection: "column"}}>

                        <div className='box' style={{height:"5vh" , display: "flex" , flexDirection: "row-reverse" , cursor: "pointer" , padding: "10px 20px" , background: "white" , borderRadius: "30px" , alignItems: "center" , boxShadow: "0 10px 25px rgba(0, 0, 0, 0.215)"}}>

                            <input type='search' placeholder='Hora de pesquisar!' style={{ transition: "0.8s" , outline: "none" , border: "none" , background: "transparent"}}  ref={inputRef}/>
                            <button onclick={Search()} style={{backgroundColor: "transparent" , border: "none"}}><img src='/search.png' style={{width:"2vw"}}></img></button>
                        </div>

                        {(typeof(input) == "undefined" || input.length > 0)&& names.length == 0 ?
                            <Subtitulo name="Nenhum jogo encontrado"></Subtitulo>
                        :
                            <Container style={{marginTop: "5vh"}} >
                                {descriptions.map((_, i) => (
                                    <Jogo titulo={names[i + 1]} description={descriptions[i + 1]} url={urls[i + 1]} img={imgs[i + 1]} score={scores[i + 1]} />
                                ))}
                            </Container>
                        }


                    </body>
              
            </div>
            
        );

}

Home.propTypes = {
    name: PropTypes.string

}

Home.defaultProps = {
    name: "estranho"

}
 
export default Home;
