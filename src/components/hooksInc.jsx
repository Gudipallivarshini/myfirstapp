import React, { useState } from 'react'

export default function HooksInc() {
    const [count,incCount]=useState(0)
    const inc=()=>{
        incCount(count+1)
    }    
    const dec=()=>{
        if(count<0){
           incCount(count-1)
        }
    }    
    
    

     return (
        <div>
            <button onClick={()=>inc()}>Inc</button>
            <h1 >{count}</h1>
            <button onClick={()=>dec()}>Dec</button>
        </div>
        )
    
}