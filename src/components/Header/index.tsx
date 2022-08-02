import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import {motion} from 'framer-motion';

const Header = () => {
    const [show,setShow] = useState(false)

    function handleScroll() {
        if(document.documentElement.scrollTop > 200) {
            setShow(true);
        } else {
            setShow(false)
        }
    }

    function componentDidMount() {
        window.onscroll = () => handleScroll();
    }
    
    componentDidMount();
 
    return (
        <div  className={[style.header, show && style['header--show']].join(' ')}>
            <div className={style.heading}>
                <h1 className={style.heading__title}>kaiquen</h1>
            </div>
            <nav className={style.nav}>
                <ul className={style.nav__box}>
                    <li className={style.nav__items}><a href='#home'>Home</a></li>
                    <li className={style.nav__items}><a href='#about'>Sobre</a></li>
                    <li className={style.nav__items}><a href='#experience'>Experiências</a></li>
                    <li className={style.nav__items}><a href='#project'>Projetos</a></li>
                    <li className={style.nav__items}><a href='#contact'>Contato</a></li>
                </ul>
            </nav>
            <div className={style.menu}>
                <div className={style.menu__row}></div>
                <div className={style.menu__row}></div>
                <div className={style.menu__row}></div>
            </div>
        </div>
    );
}

export { Header }