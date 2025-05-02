import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { MotionWrapper } from "./MotionWrapper";
import TipsSection from "./TipsSection";

function TipsPage() {
  // Controller per animazioni
  const controls = useAnimation();

  useEffect(() => {
    // Avvia le animazioni non appena il componente monta
    controls.start("visible");
  }, [controls]);

  return (
    <>
      <div className="tips-style">
        {/* Titolo con fadeInUp all'avvio */}
        <MotionWrapper
          animation="fadeInUp"
          delay={0.1}
          useAnimate
          controls={controls}
          className="ms-3 pt-5 text-center"
        >
          <h1>TIPS</h1>
        </MotionWrapper>

        {/* Sezione Tips con fadeIn all'avvio */}
        <MotionWrapper
          animation="fadeIn"
          delay={0.2}
          useAnimate
          controls={controls}
          className="mt-4"
        >
          <TipsSection />
        </MotionWrapper>
      </div>
    </>
  );
}

export default TipsPage;
