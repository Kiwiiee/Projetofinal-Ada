
import React, { Component } from 'react';

class Botao extends Component {
    constructor(props){
        super(props)
    }
    render() { 
    return(
            <button style={{
                fontFamily: "Roboto Slab",
                color: "white",
                margin: "60px",
                fontSize: "20px",
                cursor: "pointer",
                transition: ".2s ease-in",
                background: "#639c8f",
                height: "5vh",
                width: "10vw",
                borderRadius: "10px",
                border: "none",
                marginBottom: "14vh"}}>{this.props.name}</button>

    )
    

}
}



export default Botao ;
 