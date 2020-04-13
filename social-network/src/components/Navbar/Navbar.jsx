import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/main">Main</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs">Messages</NavLink>
                </div>
                <div className={s.item}>
                    <a>Music</a>
                </div>
                <div className={s.item}>
                    <a>Contacts</a>
                </div>
                <div className={s.item}>
                    <a>Settings</a>
                </div>
        </nav>
    );
}

export default Navbar;