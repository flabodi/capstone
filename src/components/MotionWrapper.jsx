// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const MotionWrapper = ({ children, animation = "fadeInUp", delay = 0, ...props }) => {
  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 60 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.6, ease: "easeOut", delay }
    },
    fadeIn: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.8, delay }
    },
    slideIn: {
      initial: { opacity: 0, x: -60 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.6, ease: "easeOut", delay }
    },
    slideRight: {
      initial: { opacity: 0, x: 60 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.6, ease: "easeOut", delay }
    },
    zoomIn: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.6, ease: "easeOut", delay }
    }
  };

  return (
    <motion.div {...animations[animation]} {...props}>
      {children}
    </motion.div>
  );
};