import React from 'react';
import './NavBar.css';
import Home from './Home.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About.js';
import Contact from './Contact.js';
import BlogPost from './BlogPost.js';
import Archive from './Archive.js'
import Data from './data.json';
import FaceB from './FBICON.png';
import YouT from './Youtube-512.png';
import InstaG from './ig-logo-email.png';

function NavBar(){
    return(
        <Router basename="dataism">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <span className="navbar-brand" >DataDrone</span>
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
    <p> Made by Thomas Shaw 2019 ● <Link to="/about" href="#"> About </Link> ● <Link to="/contact" href="#"> Contact </Link>
    ●<a href="https://www.youtube.com/channel/UCNz6gmLSzKhTc0t0ferq7Nw"><img class="footerIcon" src={YouT} alt =""></img></a>●
    <a href="https://www.instagram.com/distrodrone/"><img class="footerIcon" src={InstaG} alt =""></img></a>●
    <a href="https://www.facebook.com/DistroDrone-107298187342910/"><img class="footerIcon" src={FaceB} alt =""></img></a></p>
    
  </Router>
  );
}
export default NavBar;