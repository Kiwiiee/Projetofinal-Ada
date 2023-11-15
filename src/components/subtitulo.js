
import React, { Component } from 'react';

class Subtitulo extends Component {
    constructor(props){
        super(props)
    }
    render() { 
    return(
            <h2 style={{
                fontFamily: "Roboto Slab",
                textAlign: "center",
                width: "100%" ,
                fontSize: "40px",
                fontWeight: "400",
                whiteSpace: "nowrap",
                overflow: "hidden"}}>{this.props.name}</h2>

    )
    

}
}



export default Subtitulo ;
 