import React from 'react';
import "./menu.scss";
export default function Menu({menuOpen, setMenuOpen}) {
    console.log(menuOpen)
    return (
        <div className={'menu '+(menuOpen &&  "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#about">About</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#article">Articles</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#testimonials">Testimonials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/#contact">Contact</a>
                </li>
            </ul>
            </div>
    )
}
