import React from 'react'
import { useColorContext } from '../contexts/ColorContext';
import "./coloroption.css"

function ColorOptions() {
  const { color, setColor } = useColorContext();

  return (
    <div className='coloroption'>
        <div className='boxxxx'>
            <ul style={{display:"flex"}}>
                <li 
                title='Red'
                style={{cursor:"pointer",marginRight:"2px",width:"20px",height:"20px",backgroundColor:"red",borderRadius:"100%"}} 
                onClick={()=>setColor("red")}
                ></li>
                <li 
                title='green'
                onClick={()=>setColor("green")}
                style={{cursor:"pointer",marginRight:"2px",width:"20px",height:"20px",backgroundColor:"green",borderRadius:"100%"}}></li>
                <li 
                title='blue'
                onClick={()=>setColor("blue")}
                style={{cursor:"pointer",marginRight:"2px",width:"20px",height:"20px",backgroundColor:"blue",borderRadius:"100%"}}></li>
                <li 
                title='orange'
                onClick={()=>setColor("orange")}
                style={{cursor:"pointer",marginRight:"2px",width:"20px",height:"20px",backgroundColor:"orange",borderRadius:"100%"}}></li>
                <li 
                title='purple'
                onClick={()=>setColor("purple")}
                style={{cursor:"pointer",marginRight:"2px",width:"20px",height:"20px",backgroundColor:"purple",borderRadius:"100%"}}></li>
                

            </ul>

        </div>
    </div>
  )
}

export default ColorOptions