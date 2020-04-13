import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';


const Myposts = (props) => {

    const postItem = props.posts
    .map(({id, post}) => (<Post id={id} message={post} />))

    let newPost = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let updateText = () => {
        let text = newPost.current.value;
        props.dispatch({type: 'NEW-POST-TEXT', newText: text});
    }

    return (
        <div>
            My post
            <div className={s}>
                Newpost
                <textarea 
                ref={newPost} 
                value={props.textValue}
                onChange={updateText}/>
                <button onClick={addPost}>Add</button>
            </div>
             {postItem}
        </div>
    );
}

export default Myposts;