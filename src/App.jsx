import React ,{Fragment,useState}from 'react';

import{
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
    NavLink
  }from "react-router-dom";
  import ArticlePage from './Pages/ArticlePage/ArticlePage';
  import LandingPage from "./Pages/LandingPage/LandingPage";
  import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Article from "./components/article/Article";
  
export default function App() {
    const [menuOpen,setMenuOpen]=useState(false);
    return (
        <div>
             <Topbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
 <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
 
        <Router>
        <Topbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
 <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Routes> 
                <Route exact path="/" element={<LandingPage />} />
                <Route  path={`/articlePage/:id`} element={<ArticlePage />} />
            </Routes>
        </Router>
        </div>
    )
}
