import React from 'react'
import "./header.scss"
export default function Header() {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Articles</span>
            </div>
            <img className='headerImg'
                src='assets/bulb1.jpg'
            />
        </div>
    )
}
