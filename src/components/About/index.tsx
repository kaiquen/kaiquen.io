import React from 'react';
import style from './style.module.scss';

const About = () => {
    return (
        <div id='about'className={style.about}>
            <div className={style.profile}>
                <h1 className={style.heading__primary}>Sobre mim</h1>
                <p className={style.text}>
                    Usuário de GNU/Linux, apaixonado por novas tecnologias, 
                    sistemas operacionais e linguagens de progração. Desenvolvedor dedicado, 
                    sempre em busca de conhecimento, tecnologias e ferramentas para melhor 
                    solução do problema.
                </p>
                <button className={style.profile__btn}>Baixar resumo</button>
            </div>

            <div className={style.gallery}>
                <div className={[style.gallery__box, style['gallery__box--1']].join(' ')}>
                    <img className={style.gallery__img} src="/assets/images/img-4.jpg" alt="" loading='lazy'/>
                    <img className={style.gallery__img} src="/assets/images/img-1.jpg" alt="" loading='lazy'/>
                </div>
                <div className={[style.gallery__box, style['gallery__box--2']].join(' ')}>
                    <img className={style.gallery__img} src="/assets/images/img-2.jpg" alt="" loading='lazy'/>
                    <img className={style.gallery__img} src="/assets/images/img-3.jpg" alt="" loading='lazy'/>               
                </div>
            </div>
        </div>
    )
}

export { About }