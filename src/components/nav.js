import React from "react"
import logo from "./images/globe.png"



export default function Navbar(){
    
 return(
     <div className="navbar">    
         <div className="nav-container">            
               <img  src={logo} alt="" width="30px" />
                <h3> Meme Generator</h3> 
           </div>              
           <h4>ReactCourse -project2</h4>
    </div>
 )   
};