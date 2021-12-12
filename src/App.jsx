//jshint esversion:8
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Article from "./components/article/Article";
import "./app.scss";
import { useState } from "react";
function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
  <div className="app">
 <Topbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
 <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
 <div className="sections">
    <Intro/>
    <About />
    <Portfolio/>
    <Article />
    <Testimonials/>
    <Contact/>
 </div>
   

 
 </div>
  );
}

export default App;
