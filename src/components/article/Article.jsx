import React from 'react'
import "./article.scss";
import { Articles } from '../data';
import {ArrowForwardIosIcon} from "@material-ui/icons";
import { NavLink as Link } from 'react-router-dom';
import Post from '../post/Post';

export default function Article() {
    return (
        <div className='article' id='article'>
            <h1>Articles</h1>
            <div className='container'>
                <div className='LapView'>
                {Articles.map((Article,index)=>(

             (index<3)&&(
                <Post  id={Article.id}
                heading={Article.heading}
                articleType={Article.articleType} 
                imgSrc={Article.img} 
                content={Article.content}/>

            )))}
            </div>
            <div className='MobView'>
                {Articles.map((Article,index)=>(

             (index<3)&&(
                <div className='card'>
                    <h2><Link className="link" to={`/articlePage/${Article.id}`}>{Article.heading}</Link></h2>
                    <div className='articleType'>
                    {Article.articleType.map((cat)=>(
                    <><a className='postCat'>{cat}</a></>
                    ))}
                    </div>
                    <p className='content'>{Article.content.slice(0,70)}.....</p>

                </div>

            )))}
            </div>
         <button> <Link to="/articles" className="link"><p>See More</p></Link></button>
            </div>
        </div>
    )
}
