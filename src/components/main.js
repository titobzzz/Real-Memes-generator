import React from "react" 

import memesData from "./data1.js"
import Sec from "./components/sec";
const memes = memesData.map(items=>{
    return(
      <Sec 
         {...items}
      />
    )
})

 export default function Main (){
     return(
         <div className="Output">
            {memes}
         </div>
     )
 }
