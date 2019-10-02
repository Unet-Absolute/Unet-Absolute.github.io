import React from 'react';
import './NavBar.css';
import Home from './Home.js'
import Logo from './DistroDroneLogo.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About.js';
import Contact from './Contact.js';
import BlogPost from './BlogPost.js';
import Archive from './Archive.js'
import Data from './data.json';
function NavBar(){
    return(
        <Router basename="DDblog">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <span className="navbar-brand" ><img className="LogoClass" src={Logo} alt=""></img></span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <span className="nav-link" ><Link to="/" href="#">Home </Link></span>
        </li>
        <li className="nav-item">
        <span  className="nav-link" ><Link to="/archive" href="#">Archive</Link></span>
        </li>
        <li className="nav-item">
        <span  className="nav-link" ><Link to="/about" href="#">About</Link></span>
        </li>
        <li className="nav-item">
       <span  className="nav-link"><Link to="/contact" href="#">Contact</Link></span>
        </li>
      </ul>
      
    </div>
  </nav>
  <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/archive">
                  <Archive />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route> 
                <Route path="/post1">
                  <BlogPost props={Data.posts[0]}></BlogPost>
                </Route>
                <Route path="/">
                  <Home />
                </Route>
               
          </Switch>
          <hr></hr>
    <p> Made by Thomas Shaw 2019 ● <Link to="/about" href="#"> About </Link> ● <Link to="/contact" href="#"> Contact </Link></p>
    
  </Router>
  );
}
export default NavBar;