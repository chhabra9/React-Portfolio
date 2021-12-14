import React from 'react'
import { useLocation } from 'react-router-dom'
import "./articlePage.scss"
import { Articles } from '../../components/data';

export default function ArticlePage() {
    const location=useLocation();
    console.log(location.pathname.split("/")[2]);
    const id=location.pathname.split("/")[2]-1;
    return (
            <div className='singlePostWrapper'>
            <img src={Articles[id].img} className='singlePostImg' />
                <h1 className='singlePostTitle'>{Articles[id].heading}</h1>
          <div className='articleType'>
                   <div>{Articles[id].articleType.map((type,index)=>(
                (index===Articles[id].articleType.length-1)?(<a href='#intro'>{type} </a>):(<a href='#intro'>{type}|</a>)
            ))} </div>
                    <div><a>1 hour ago</a></div>
             </div>
             <p className='discription'>
           {Articles[id].content}
             </p>
            </div>
    )
}
