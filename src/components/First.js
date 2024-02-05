import React from "react";

const First=(props)=>{

console.log(props);

// console.log(props)
    return(
        <div>
        <h1>friuts</h1>
       <ul>
        <li>{props.name}</li>
        <li>{props.color}</li>
        <li>{props.price}</li>
       </ul>
         </div>
            )
}


export default First;