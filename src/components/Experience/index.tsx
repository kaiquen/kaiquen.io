import styles from "./styles.module.scss";
import {MdVerified} from "react-icons/md"
import { motion } from "framer-motion";


// 1440 - 1620 - 1800 - 2128
const Experience = () => {
    const width = window.screen.width;
    let skillBox = 0;

   
    (() =>  {
        console.log(width);
        width < 400 
        ? skillBox = 1540
        : width < 900 
        ? skillBox = 1600 
        : width < 1200 
        ? skillBox = 1860 
        : width < 1500 
        ? skillBox = 2090
        : width < 1700 
        ? skillBox = 2135
        : width < 1800 
        ? skillBox = 2170
        : skillBox = 2570
        console.log(skillBox)
        console.log(width - skillBox)
    })();

  

    return (
        <div id="experience" className={styles.experience}>
            <div className={styles.container}>
                <h1 className="heading__primary">Experiências</h1>
                <div className={styles.company}>
                    <a href="https://www.pjmei.app/"><img src="./assets/images/pjmei.webp" alt="" /></a>
                    <div className={styles.company__bio}>
                        <h1 className="heading__secondary">
                            Estágio - Desenvolvedor Back end 
                            <small>Abril 2022 - Presente</small>
                        </h1>
                        <ul className={styles.company__info}>
                            <li className={styles.company__item}>Desenvolvimento de API's REST</li>
                            <li className={styles.company__item}>Tecnologias usadas: Node.js, Typescript, Postgres e Typeorm</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.company}>
                    <a href="https://www.ifes.edu.br/"><img src="./assets/images/ifes.png" alt="" /></a>
                    <div className={styles.bio}>
                        <h1 className="heading__secondary">
                            Instituto Federal do Espírito Santo
                            <small>Bacharelado em Sistemas de Informação</small>
                        </h1>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <h1 className="heading__primary">Linguagens e tecnologias</h1>
                <div className={styles.skills}>
                    <motion.ul 
                        className={styles.skills__box}
                        animate={{x: (width - skillBox)}}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 1,
                            ease: "linear"                      
                        }}>
                        
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
                    </motion.ul>
                </div>
            </div>
        </div> 
    );
}

export { Experience }