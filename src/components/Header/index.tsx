import { useState } from 'react';
import styles from './styles.module.scss';
import { useCycle, useViewportScroll } from 'framer-motion';
import { Hamburger } from '../Button/Hamburger';
import { Modal } from '../Modal';

const Header = () => {
    const [show, setShow] = useState(false);
    const [isOpen, toggleOpen] = useCycle(false, true);
    const { scrollYProgress } = useViewportScroll();

    const handleScroll = () => {
        if(scrollYProgress.get() > 0.1) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    (() => {
        window.onscroll = () => handleScroll();
    })()
    
    return (
        <div className={[styles.container, show && styles['container--show']].join(' ')}>
            <div className={styles.heading}>
                <h1 className={styles.heading__title}>kaiquen</h1>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav__box}>
                    <li className={styles.nav__items}><a href='#home'>Home</a></li>
                    <li className={styles.nav__items}><a href='#about'>Sobre</a></li>
                    <li className={styles.nav__items}><a href='#experience'>Experiências</a></li>
                    <li className={styles.nav__items}><a href='#project'>Projetos</a></li>
                    <li className={styles.nav__items}><a href='#contact'>Contato</a></li>
                </ul>
            </nav>

            <Hamburger toggle={isOpen} toggleOpen={() => toggleOpen()}/>
            <Modal toggle={isOpen} toggleOpen={toggleOpen}/>        
        </div>
    );
}

export { Header }