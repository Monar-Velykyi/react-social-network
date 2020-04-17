import React from 'react';
import s from './Header.module.css';
import image from './image.png';

const Header = () => {
    return (
        <header className={s.header}>
            <a href="">
                <img src={image} />
            </a>
        </header>
    );
}

export default Header;