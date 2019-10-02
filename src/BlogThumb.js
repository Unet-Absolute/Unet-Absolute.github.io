import React from 'react';
import './BlogThumb.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function BlogThumb(props)
{
    return(<div class="col-4">
        <Link to={props.props.link}><img class="thumbNail" src={props.props.thumbnail} alt=""></img></Link>
        <h4>{props.props.title}</h4>
        <p>{props.props.date} - {props.props.shortdesc}</p>
    </div>);
}
export default BlogThumb;