import {Link} from "react-router-dom";
import React, { Component } from 'react';

class Nav extends Component {
    constructor(props){
        super(props)
    }
    render() { 
    return(
        <div style={{marginLeft:"5vw", width:"20vw" , height: "5vh" }}>
            <Link to={`/${this.props.link}`} style={{textDecoration: "none" , color: "black" , fontFamily: "Roboto Slab"}}>
                {this.props.name}
            </Link>
        </div>
    )
    

}
}



export default Nav ;
 