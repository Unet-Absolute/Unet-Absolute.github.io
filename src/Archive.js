import React from 'react';
import BlogThumb from './BlogThumb'
import Data from './data.json';
import FeaturedPost from './FeaturedPost.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Archive()
{
    var list = Data.posts.map((item,key)=>
    {
        return <BlogThumb props={item}></BlogThumb>
    });
    return(
        <div class="container">
        <h2>Archived Posts</h2>
        <div class="row">
        {list}
        </div></div>
    );
}
export default Archive;