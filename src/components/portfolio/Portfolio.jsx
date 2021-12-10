import { FeaturedPlayList } from '@material-ui/icons';
import React, { useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss"
export default function Portfolio() {
    const imgAddress="https://cdn.dribbble.com/users/311085/screenshots/14017481/media/70751682c0cf2f67b0d09cdc198f134e.png?compress=1&resize=400x300";
    const [selected,setSelected]=useState("featured");
    
    const list=[
    {
        id:"featured",
        title:"Featured",
    },  
     {
        id:"web",
        title:"Web App",
    },
    {
        id:"mobile",
        title:"Mobile App",
    },
    {
        id:"design",
        title:"Design",
    },
    {
        id:"content",
        title:"Content",
    }
    ];
   
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
           <ul>
            {list.map(item=>(
                <PortfolioList  
                title={item.title} 
                active={selected===item.id}
                 setSelected={setSelected}
                 id={item.id}
                 />
            ))}
           </ul>
           <div className='container'>
               <div className='item'>
                   <img src={imgAddress}/>
                   <h3>Banking App</h3>
               </div>
               <div className='item'>
                   <img src={imgAddress}/>
                   <h3>Banking App</h3>
               </div>
               <div className='item'>
                   <img src={imgAddress}/>
                   <h3>Banking App</h3>
               </div>
               <div className='item'>
                   <img src={imgAddress}/>
                   <h3>Banking App</h3>
               </div>
               <div className='item'>
                   <img src={imgAddress}/>
                   <h3>Banking App</h3>
               </div>
           </div>
          
        </div>
    )
}
