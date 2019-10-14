import React from 'react';
import './BlogPost.css';
import BlogPost1 from './BlogPost1.js';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
function BlogPost(props)
{
    return(<div class="container"><div class="row"><div class="col-12">
        <img class="headerImage" src={props.props.thumbnail} alt=""></img>
        <h4>{props.props.title}</h4>
        <p>{props.props.date} - {props.props.author}</p>
        <BlogPost1 />
    </div></div></div>);
}
export default BlogPost;