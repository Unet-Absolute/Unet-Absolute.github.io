import React from 'react';
import BlogThumb from './BlogThumb'
import Data from './data.json';
import FeaturedPost from './FeaturedPost.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Home()
{
    var list = Data.posts.map((item,key)=>
    {
        if(key <6)
        {
        return <BlogThumb props={item}></BlogThumb>
        }
        else
        return "";
    });
    return(
        <div class="container">
        <h2>Featured Post</h2>
        <div class ="row">
            <FeaturedPost props={Data.posts[0]}></FeaturedPost>
        </div>
        <hr></hr>
        <h2>Recent Posts</h2>
        <div class="row">
        {list}
        </div></div>
    );
}
export default Home;