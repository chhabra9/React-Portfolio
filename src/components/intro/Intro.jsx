import React, { useEffect,useRef } from 'react';
import "./intro.scss";
import { init } from "ityped";
export default function Intro() {

    const textRef=useRef();
    useEffect(()=>{
            init(textRef.current,{
                showCursor:true,
                backDelay: 1500,
                backSpeed:60,
                strings:["Developer","Designer","Student"]
            });
    },[]);
    return (
        <div className='intro' id='intro'>
          <div className='left'>
             <div class="imgContainer">
                 <img src="assets\personal1.png"/>
             </div> 
         </div>  
          <div className='right'>
            <div className='wrapper'>
                <h2>Hi There ,I'm</h2>
                <h1>Achint Singh</h1>
                <h3>Freelance <span ref={textRef}> </span></h3>
            </div>
            <a href="#about">
                <img src="assets/arrow.png"  alt="" />
            </a>
        </div> 
        </div>
    )
}
