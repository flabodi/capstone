import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { MotionWrapper } from "./MotionWrapper";
import TipsSection from "./TipsSection";

function TipsPage() {
  
  const controls = useAnimation();

  useEffect(() => {
    
    controls.start("visible");
  }, [controls]);

  return (
    <>
      <div className="tips-style">

        <MotionWrapper
          animation="fadeInUp"
          delay={0.1}
          useAnimate
          controls={controls}
          className="ms-3 pt-5 text-center"
        >
          <h1>EDUCAZIONE ALCOLICA</h1>
          <hr className="mx-5"></hr>
        </MotionWrapper>

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
