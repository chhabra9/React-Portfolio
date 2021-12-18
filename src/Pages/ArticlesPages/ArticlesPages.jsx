import React from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sideBar/SideBar'
import "./ArticlesPages.scss"
export default function ArticlesPages() {
    return (
        <div className='articlesPages'>
            <>
           <Header /> 
           <div className='home'>
               <Posts/>
               <SideBar />
           </div>
           </>
        </div>
    )
}
