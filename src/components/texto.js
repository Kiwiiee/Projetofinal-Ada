
import React, { Component } from 'react';

class Texto extends Component {
    constructor(props){
        super(props)
    }
    render() { 
    return(
            <p style={{
                fontFamily: "Roboto Slab",
                textAlign: "center",
                width: "100%" ,
                fontSize: "25px",
                fontWeight: "200",
                whiteSpace: "nowrap",
                overflow: "hidden"}}>{this.props.name}</p>

    )
    

}
}



export default Texto ;
 