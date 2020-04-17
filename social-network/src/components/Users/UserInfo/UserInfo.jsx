import React from 'react';
import s from './UserInfo.module.css';
import image from '../../../ava.jpg';

const UserInfo = (props) => {
    debugger;
    return(
        <div className={s.userbox}>
            <div className={s.avafollow}>
                <img src={image} className={s.profileimage}/>
                <input type='button' className={s.follow}/>
            </div>
            <div className={s.description}>
                <div className={s.name}>{props.name}</div>
                <div className={s.status}>{props.status}</div>
                <div className={s.location}>{props.city}</div>
            </div>
        </div>
    );
}

export default UserInfo;