import React from 'react';
import s from './UserInfo.module.css';
import image from '../../../ava.jpg';

const UserInfo = (props) => {
    debugger;
    return(
        <div className={s.userbox}>
            <div className={s.avafollow}>
                <img src={image} className={s.profileimage}/>
                {props.follow
                ? <button className={s.follow} onClick={() => props.unfollowAc(props.id)}>FOLLOW</button>    
                : <button className={s.follow} onClick={() => props.followAc(props.id)}>UNFOLLOW</button>}
                  
            </div>
            <div className={s.description}>
                <div className={s.name}>{props.name}</div>
                <div className={s.status}>{props.status}</div>
                <div className={s.location}>{props.city}, {props.country}</div>
            </div>
        </div>
    );
}

export default UserInfo;