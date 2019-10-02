import React from 'react';
import './FeaturedPost.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function BlogPost(props)
{
    return(<div class="col-12">
        <Link to={props.props.link}><img class="headerImage" src={props.props.thumbnail} alt=""></img></Link>
        <h4>{props.props.title}- {props.props.date} - {props.props.author}</h4>
        <p>{props.props.shortdesc}</p>
    </div>);
}
export default BlogPost;