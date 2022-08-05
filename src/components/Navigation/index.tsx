import { motion } from "framer-motion";
import styles from "./styles.module.scss";


type IProps = {
  toggleOpen():void;
  toggle: boolean;
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variantsTwo = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


const Navigation = ({toggle, toggleOpen}:IProps) => {
  return (
    <motion.ul 
      className={styles.container}
      variants={variants}>
      <motion.li
        variants={variantsTwo}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
      >
        <a href='#home'>Home</a>
      </motion.li>
      <motion.li
        variants={variantsTwo}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
      >
        <a href='#about'>Sobre</a>
      </motion.li>
      <motion.li
        variants={variantsTwo}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
      >
        <a href='#experience'>Experiências</a>
      </motion.li>
      <motion.li
        variants={variantsTwo}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
      >
        <a href='#project'>Projetos</a>
      </motion.li>
      <motion.li
        variants={variantsTwo}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
      >
        <a href='#contact'>Contato</a>
      </motion.li>
    </motion.ul>
  );
}

export { Navigation }