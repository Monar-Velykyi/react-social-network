import React from 'react';
import s from './Person.module.css';
import {NavLink} from 'react-router-dom';

const Person = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <NavLink to={path}>
        <div className={s.person}>
            {props.name}
            <div className={s.person_message}>
                Idi nahui blyat
            </div>
        </div>
        </NavLink>
    );
}

export default Person;