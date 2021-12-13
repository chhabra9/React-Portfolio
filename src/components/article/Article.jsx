import React from 'react'
import "./article.scss";
import { Articles } from '../data';
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
                    {Article.content.slice(0,100)}<a href='#intro'> Read more ...</a>
                    </p>
        

            </div>
            )))}
            
            </div>
        </div>
    )
}
