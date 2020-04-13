import React from 'react';
import classes from './Main.module.css';
import Myposts from './Myposts/Myposts';


const Main = (props) => {
    debugger;
    return (
        <main className={classes.main}>
            <div className={classes.div}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScB-ZHjmtbjRnY9aTiy6ZQRc2e2Wq3JHThzQCIk9R7D18-7YE_" alt="" />
            </div>
            <div>
                ava + desription
            </div>
            <Myposts 
            textValue={props.postsData.textValue}
            posts={props.postsData.posts}
            dispatch={props.dispatch}/>
        </main>
    );
}

export default Main;