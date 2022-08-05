import styles from './styles.module.scss';

const About = () => {
    return (
        <div id='about'className={styles.about}>
            <div className={styles.profile}>
                <h1 className="heading__primary">Sobre mim</h1>
                <p className={styles.text}>
                    Usuário de GNU/Linux, apaixonado por novas tecnologias, 
                    sistemas operacionais e linguagens de progração. Desenvolvedor dedicado, 
                    sempre em busca de conhecimento, tecnologias e ferramentas para melhor 
                    solução do problema.
                </p>
                <a href="./assets/resumo.pdf"  download className={styles.profile__btn}>Baixar resumo</a>
            </div>

            <div className={styles.gallery}>
                <div className={[styles.gallery__box, styles['gallery__box--1']].join(' ')}>
                    <img className={styles.gallery__img} src="./assets/images/img-4.jpg" alt="" loading='lazy'/>
                    <img className={styles.gallery__img} src="./assets/images/img-1.jpg" alt="" loading='lazy'/>
                </div>
                <div className={[styles.gallery__box, styles['gallery__box--2']].join(' ')}>
                    <img className={styles.gallery__img} src="./assets/images/img-2.jpg" alt="" loading='lazy'/>
                    <img className={styles.gallery__img} src="./assets/images/img-3.jpg" alt="" loading='lazy'/>               
                </div>
            </div>
        </div>
    )
}

export { About }