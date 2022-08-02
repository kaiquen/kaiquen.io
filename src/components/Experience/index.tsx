import React from 'react';
import style from './style.module.scss';
import {MdVerified} from 'react-icons/md'
const Experience = () => {
    return (
        <div id='experience' className={style.container}>
            <div className={style.experience}>
                <h1 className={style.heading__title}>Experiências</h1>
                <div className={style.content}>
                    <a href="#"><img src="./assets/images/pjmei.webp" alt="" /></a>
                    <div className={style.bio}>
                        <h1 className={style.heading__secondary}>
                            Estágio - Desenvolvedor Back end 
                            <small>Abril 2022 - Presente</small>
                        </h1>
                        <ul className={style.info}>
                            <li className={style.item}>Desenvolvimento de API's REST</li>
                            <li className={style.item}>Tecnologias usadas: Node.js, Typescript, Postgres e Typeorm</li>
                        </ul>
                    </div>
                </div>
                <div className={style.content}>
                    <a href="#"><img src="./assets/images/ifes.png" alt="" /></a>
                    <div className={style.bio}>
                        <h1 className={style.heading__secondary}>
                            Instituto Federal do Espírito Santo
                            <small>Bacharelado em Sistemas de Informação</small>
                        </h1>
                    </div>
                </div>
            </div>

            <div className={style.skills}>
                <h1 className={style.heading__title}>Linguagens e tecnologias</h1>
                <div className={style.skills__box}>
                    <ul>
                        <li className={style.skills__item}>
                            <MdVerified className={style.skills__icon}/>
                            <p>Node.js</p>
                        </li>
                        <li className={style.skills__item}>
                            <MdVerified className={style.skills__icon}/>
                            <p>React.js</p>
                        </li>
                        <li className={style.skills__item}>
                            <MdVerified className={style.skills__icon}/>
                            <p>Postgres</p>
                        </li>
                        <li className={style.skills__item}>
                            <MdVerified className={style.skills__icon}/>
                            <p>Docker</p>
                        </li>
                        
                        <li className={style.skills__item}>
                            <MdVerified className={style.skills__icon}/>
                            <p>Flutter</p>
                        </li>
                        <li className={style.skills__item}>
                            <MdVerified className={style.skills__icon}/>
                            <p>JavaScript</p>
                        </li>
                        <li className={style.skills__item}>
                            <MdVerified className={style.skills__icon}/>
                            <p>Java</p>
                        </li>
                        <li className={style.skills__item}>
                            <MdVerified className={style.skills__icon}/>
                            <p>React Native</p>
                        </li>
                        <li className={style.skills__item}>
                            <MdVerified className={style.skills__icon}/>
                            <p>Git</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export { Experience }