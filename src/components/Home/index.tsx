import { useEffect, useRef } from 'react';
import style from './style.module.scss';
import { BsChevronCompactDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Home = () => {
    const el = useRef<any>(null);
    
    function handleArrow () {
        window.location.href='#about'
    }
    
    useEffect(() => {
        const options = {
            strings: ['Front-end.', 'Back-end.', 'Fullstack.'],
            typeSpeed: 100,
            backSpeed: 100,
            startDelay: 10,
            backDelay: 1200,
            loop:true
        };
        new Typed(el.current, options);
    },[]);

    return (
        <div id="home" className={style.home}>
            <span className={style.span}>Olá, o meu nome é </span>
            <h1 className={style.heading__primary}>Kaique Nascente Januário</h1>
            <h2 className={style.heading__secondary}>Desenvolvedor <span ref={el}/></h2>
            <motion.div 
                animate={{ y: 20 }}
                transition={{
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 0,
                }}
                className={style.arrow}
            >
                <BsChevronCompactDown className={style.arrow__icon} onClick={handleArrow}/>
            </motion.div>
        </div>
    )
}

export { Home }