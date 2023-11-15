
import React, { Component } from 'react';

class Titulo extends Component {
    constructor(props){
        super(props)
    }
    render() { 
    return(
            <h1 style={{
                fontFamily: "Roboto Slab",
                textAlign: "center",
                width: "100%" ,
                fontSize: "60px",
                whiteSpace: "nowrap",
                overflow: "hidden"}}>{this.props.name}</h1>

    )
    

}
}



export default Titulo ;
 