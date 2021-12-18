import React from 'react'
import "./post.scss"
import { NavLink as Link } from 'react-router-dom'
export default function Post({id,heading,articleType,imgSrc,content}) {

    return (
        <div className='post'>
            <img  className="postImg" src={imgSrc}/>
            <div className='postInfo'>
                <div className='postCats'>
                    {articleType.map((cat)=>(
                    <><span className='postCat'>{cat}</span></>
                    ))}
            
                </div>
                <span className='postTitle'>
                   <Link className="link" to={`/articlePage/${id}`}>{heading}</Link> 
                </span>
                <hr />
                <span className='postDate'>1 hour ago</span>
            </div>
            <p className='postDesc'>
            {content}
            </p>
        </div>
    )
}
