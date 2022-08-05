import { motion } from "framer-motion";
import { Navigation } from "../Navigation";
import styles from "./styles.module.scss";

type IProps = {
  toggleOpen():void;
  toggle: boolean;
}

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 99% 25px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),

  closed: {
    clipPath: "circle(30px at 99% 25px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}

const Modal = ({toggle, toggleOpen}:IProps) => {

  return (
    <motion.div
      initial={false}
      style={toggle ? {display:"flex"}:{display:"none"}}
      className={styles.container}
      animate={toggle ? "open":"closed"}
    > 
      <motion.div className={styles.modal} variants={variants}/>
      
      <Navigation toggle={toggle} toggleOpen={toggleOpen}/>
    </motion.div>
  );
}

export { Modal }