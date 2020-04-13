import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    return (
        <div key={props.id}>
            {props.message}
        </div>
    );
}

export default Post;