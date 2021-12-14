import React from 'react'
import "./article.scss";
import { Articles } from '../data';
import {ArrowForwardIosIcon} from "@material-ui/icons";
import { NavLink as Link } from 'react-router-dom';

export default function Article() {
    return (
        <div className='article' id='article'>
            <h1>Articles</h1>
            <div className='container'>
                {Articles.map((Article,index)=>(
                    
            (index<3)&&(<div className='card'>
                <div>
                  
            <h2>{Article.heading}</h2>
            <h4 className='articleType'>{Article.articleType.map((type,index)=>(
                (index===Article.articleType.length-1)?(<a href='#intro'>{type} </a>):(<a href='#intro'>{type}|</a>)
            ))}</h4>
            </div>
                    <img  src={Article.img}/>
            
                    <p className='content'>
                        {console.log(Article.id)}
                    {Article.content.slice(0,100)}<Link to={`/articlePage/${Article.id}`}> Read more ...</Link>
                    </p>
        

            </div>
            )))}
           <button>&#62;</button> 
            </div>
        </div>
    )
}
