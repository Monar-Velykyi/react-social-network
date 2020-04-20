import React from 'react';
import UserInfo from './UserInfo/UserInfo'
import s from './UsersContainer.module.css'

const Users = (props) => {
    debugger;
    let usersArray = props.users
    .map(({id, name, status, follow, location}) => (<UserInfo 
        id={id} 
        name={name} 
        status={status}
        follow={follow}
        followAc={props.follow} 
        unfollowAc={props.unFollow}
        city={location.city} 
        country={location.country}
        />));
        
    return (
    <div className={s.users}>
        {usersArray}
    </div>
    );
}

export default Users;