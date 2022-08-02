import style from './style.module.scss';

import {TiSocialGithub, TiSocialInstagram, TiSocialLinkedin} from 'react-icons/ti';

export const Social = () => {
  return (
    <div className={style.social}>
      <ul>
        <li className={style.social__item}>
          <a href="https://github.com/kaiquen">
            <TiSocialGithub className={style.social__icon}/>
          </a>
        </li>
        <li className={style.social__item}>
          <a href="https://www.instagram.com/kaique.n/">
            <TiSocialInstagram className={style.social__icon}/>
          </a>
        </li>
        <li className={style.social__item}>
          <a href="https://www.linkedin.com/in/kaiquen/">
            <TiSocialLinkedin  className={style.social__icon}/>
          </a>
        </li>
      </ul>
    </div>
  )
}
