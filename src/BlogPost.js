import React from 'react';
import './BlogPost.css';
function BlogPost(props)
{
    return(<div class="container"><div class="row"><div class="col-12">
        <img class="headerImage" src={props.props.thumbnail} alt=""></img>
        <h4>{props.props.title}</h4>
        <p>{props.props.date} - {props.props.author}</p>
        <p>{props.props.content}</p>
    </div></div></div>);
}
export default BlogPost;