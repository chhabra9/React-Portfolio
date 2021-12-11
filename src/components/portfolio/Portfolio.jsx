import { FeaturedPlayList } from '@material-ui/icons';
import React, { useState,useEffect } from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss";
import {contentPortfolio,designPortfolio,mobilePortfolio,webPortfolio,featuredPortfolio} from "../data";
export default function Portfolio() {
    const imgAddress="https://cdn.dribbble.com/users/311085/screenshots/14017481/media/70751682c0cf2f67b0d09cdc198f134e.png?compress=1&resize=400x300";
    const [selected,setSelected]=useState("featured");
    const [data,setData]=useState([]);
    
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
    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(contentPortfolio);

        }

    }, [selected]);
   
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
              {data.map(d=>(
                <div className='item'>
                   <img src={d.img}/>
                    <h3>{d.title}</h3>
                </div>
              ))}

           </div>
          
        </div>
    )
}
