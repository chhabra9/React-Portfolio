import React from 'react'
import Post from '../post/Post'
import "./posts.scss";
import { Articles } from '../data';
export default function Posts() {
    return (
        <div className='posts'>
            {Articles.map((Article)=>(
                                <Post  id={Article.id}
                                heading={Article.heading}
                                articleType={Article.articleType} 
                                imgSrc={Article.img} 
                                content={Article.content}/>
            ))}
        </div>
    )
}
