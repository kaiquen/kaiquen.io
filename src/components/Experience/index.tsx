import styles from './styles.module.scss';
import {MdVerified} from 'react-icons/md'

const Experience = () => {
    return (
        <div id="experience" className={styles.experience}>
            <div className={styles.company}>
                <h1 className="heading__primary">Experiências</h1>
                <div className={styles.content}>
                    <a href="https://www.pjmei.app/"><img src="./assets/images/pjmei.webp" alt="" /></a>
                    <div className={styles.bio}>
                        <h1 className="heading__secondary">
                            Estágio - Desenvolvedor Back end 
                            <small>Abril 2022 - Presente</small>
                            content   </h1>
                        <ul className={styles.info}>
                            <li className={styles.item}>Desenvolvimento de API's REST</li>
                            <li className={styles.item}>Tecnologias usadas: Node.js, Typescript, Postgres e Typeorm</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.content}>
                    <a href="https://www.ifes.edu.br/"><img src="./assets/images/ifes.png" alt="" /></a>
                    <div className={styles.bio}>
                        <h1 className="heading__secondary">
                            Instituto Federal do Espírito Santo
                            <small>Bacharelado em Sistemas de Informação</small>
                        </h1>
                    </div>
                </div>
            </div>
            <div className={styles.skills}>
                <h1 className="heading__primary">Linguagens e tecnologias</h1>
                <div className={styles.skills__box}>
                    <ul>
                        <li className={styles.skills__item}>
                            <MdVerified className={styles.skills__icon}/>
                            <p>Node.js</p>
                        </li>
                        <li className={styles.skills__item}>
                            <MdVerified className={styles.skills__icon}/>
                            <p>React.js</p>
                        </li>
                        <li className={styles.skills__item}>
                            <MdVerified className={styles.skills__icon}/>
                            <p>Postgres</p>
                        </li>
                        <li className={styles.skills__item}>
                            <MdVerified className={styles.skills__icon}/>
                            <p>Docker</p>
                        </li>
                        
                        <li className={styles.skills__item}>
                            <MdVerified className={styles.skills__icon}/>
                            <p>Flutter</p>
                        </li>
                        <li className={styles.skills__item}>
                            <MdVerified className={styles.skills__icon}/>
                            <p>JavaScript</p>
                        </li>
                        <li className={styles.skills__item}>
                            <MdVerified className={styles.skills__icon}/>
                            <p>Java</p>
                        </li>
                        <li className={styles.skills__item}>
                            <MdVerified className={styles.skills__icon}/>
                            <p>React Native</p>
                        </li>
                        <li className={styles.skills__item}>
                            <MdVerified className={styles.skills__icon}/>
                            <p>Git</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    );
}

export { Experience }