// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { useAnimation } from "framer-motion";

const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideIn: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  }
};


export const MotionWrapper = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  useAnimate = false,
  controls,
  ...props
}) => {
  const transition = { duration: 0.6, ease: "easeOut", delay };
  const variant = variants[animation] || variants.fadeInUp;

  return (
    <motion.div
      variants={variant}
      initial={useAnimate ? "hidden" : "hidden"}
      animate={useAnimate ? controls : undefined}
      whileInView={!useAnimate ? "visible" : undefined}
      viewport={!useAnimate ? { once: false, amount: 0.3 } : undefined}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};
