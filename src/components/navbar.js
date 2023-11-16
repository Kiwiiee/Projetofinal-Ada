import Nav from "./Itemnav"


function Navbar(){
    return(

        <div style={{width: "100vw" , height: "17vh" , display:"flex" , justifyContent: "center" , alignItems: "center" , backgroundImage: "linear-gradient(0deg, rgba(92,150,124,0) 0%, rgba(99,156,143,1) 87%)" , position: "fixed"}}>


            <Nav name = "Home" link = "Home" style={{marginLeft: "0"}}></Nav>
            <Nav name = "Recomendações" link = "Recomendados"></Nav>
            <Nav name = "Gerenciar Conta" link = "Gerenciar"></Nav>

           
        
        </div>


    )

}
export default Navbar ;
