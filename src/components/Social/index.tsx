import style from './style.module.scss';

import {TiSocialGithub, TiSocialInstagram, TiSocialLinkedin} from 'react-icons/ti';

export const Social = () => {
  return (
    <div className={style.social}>
      <ul>
        <li className={style.social__item}>
          <a href="#">
            <TiSocialGithub className={style.social__icon}/>
          </a>
        </li>
        <li className={style.social__item}>
          <a href="#">
            <TiSocialInstagram className={style.social__icon}/>
          </a>
        </li>
        <li className={style.social__item}>
          <a href="#">
            <TiSocialLinkedin  className={style.social__icon}/>
          </a>
        </li>
      </ul>
    </div>
  )
}
