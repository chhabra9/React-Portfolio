import React from 'react'
import { useLocation } from 'react-router-dom'
import "./articlePage.scss"
import { Articles } from '../../components/data';
import SideBar from "../../components/sideBar/SideBar"
import SinglePost from '../../components/singlePost/SinglePost';
export default function ArticlePage() {
    const location=useLocation();
    console.log(location.pathname.split("/")[2]);
    const id=location.pathname.split("/")[2]-1;
    return (
      <div className='articlePage'>
          <SinglePost />
          <SideBar />
      </div>

    )
}
