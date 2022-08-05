import styles from './styles.module.scss';

import {TiSocialGithub, TiSocialInstagram, TiSocialLinkedin} from 'react-icons/ti';

export const Social = () => {
  return (
    <div className={styles.social}>
      <ul>
        <li className={styles.social__item}>
          <a href="https://github.com/kaiquen" target={'_blank'} rel="noopener noreferrer">
            <TiSocialGithub className={styles.social__icon}/>
          </a>
        </li>
        <li className={styles.social__item}>
          <a href="https://www.instagram.com/kaique.n/" target={'_blank'} rel="noopener noreferrer">
            <TiSocialInstagram className={styles.social__icon}/>
          </a>
        </li>
        <li className={styles.social__item}>
          <a href="https://www.linkedin.com/in/kaiquen/" target={'_blank'} rel="noopener noreferrer">
            <TiSocialLinkedin  className={styles.social__icon}/>
          </a>
        </li>
      </ul>
    </div>
  )
}
