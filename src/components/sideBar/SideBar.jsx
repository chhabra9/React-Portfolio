import React from 'react'
import "./sideBar.scss"
export default function SideBar() {
    return (
        <div className='sideBar'>
          {/* <div className='sideBarItem'>
              <span className='sideBarTitle'>
                 ABOUT ME 
              </span>
              <img src='assets/personal2.jpg' />
              <p>Duis qui in dolore commodo est Lorem veniam non do qui do sint proident.
                 Cillum pariatur veniam culpa ad commodo ut commodo esse. 
                </p>
          </div> */}
          <div className='sideBarItem'>
              <span className='sideBarTitle'>CATEGORIES</span>
            <ul className='sideBarList'>
                <li className='sideBarListItem'>Technology</li>
                <li className='sideBarListItem'>Econmic</li>
                <li className='sideBarListItem'>Movie</li>
                <li className='sideBarListItem'>Cryptocurrency</li>
            </ul>
          </div>
          <div className='sideBarItem'>
              <span className='sideBarTitle'>FOLLOW ME</span>
          <div className='sideBarSocial'>
              <i className="sideBarIcon fab fa-facebook"></i>
              <i className="sideBarIcon fab fa-instagram"></i>
              <i className="sideBarIcon fab fa-linkedin-in"></i>
              <i className="sideBarIcon fab fa-twitter"></i>
              </div>
          </div>
        </div>
    )
}
