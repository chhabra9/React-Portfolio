import React from 'react'
import { useLocation } from 'react-router-dom';
import "./singlePost.scss"
import "../../components/data"
import { Articles } from '../data';
export default function SinglePost() {
    const location=useLocation();
    console.log(location.pathname.split("/")[2]);
    const id=location.pathname.split("/")[2]-1;
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                <img src={Articles[id].img} className='singlePostImg'/>
                <h1 className='singlePostTitle'>
                    {Articles[id].heading}
                    <div className='singlePostInfo'>
                        <div >
                            {Articles[id].articleType.map((cat)=>(
                            <span className='cat'>{cat}</span>
                            ))}
                        </div>
                        <span className='singlePostDate'>1 hour Ago</span>
                    </div>
                    <p className='singlePostDesc'>
                        {Articles[id].content}
                    </p>
                </h1>
            </div>
        </div>
    )
}
