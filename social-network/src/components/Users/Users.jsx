import React from 'react';
import UserInfo from './UserInfo/UserInfo'
import s from './Users.module.css'

const Users = (props) => {
    let usersArray = props.usersData.users
    .map(({id, name, status, follow}, location) => (<UserInfo 
        id={id} 
        name={name} 
        status={status}
        follow={follow} 
        city={location[id]} 
        country={location[id]}/>));

    return (
    <div className={s.users}>
        {usersArray}
    </div>
    );
}

export default Users;