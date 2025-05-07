import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useAnimation } from "framer-motion";
import { MotionWrapper } from "./MotionWrapper";
import Categories from "./Categories";
import ProductsList from "./ProductsList";

function Products() {

  const controls = useAnimation();

  useEffect(() => {

    controls.start("visible");
  }, [controls]);

  return (
    <>
      <Container fluid className="px-0">
  
        <MotionWrapper
          animation="fadeInUp"
          delay={0.1}
          useAnimate
          controls={controls}
          className="w-md-50 ps-3 text-sm-center mx-sm-5"
        >
          <h1>I NOSTRI SPIRITI NOBILI</h1>
        </MotionWrapper>

        <MotionWrapper
          animation="fadeIn"
          delay={0.2}
          useAnimate
          controls={controls}
          className="w-md-50 ps-3 text-sm-center mx-sm-5 mb-4"
        >
          <p className="imb-font">
            Immagina di preparare un Martini o un Daiquiri con un rum o gin di
            qualità. Il gusto fresco del lime, l'eleganza della bevanda, la
            sensazione di "pulito" che avverti mentre sorseggi il cocktail.
            Questo è il tipo di esperienza che dovresti cercare, non quella che
            ti lascia con la bocca amara e il mal di testa il giorno dopo.
          </p>
        </MotionWrapper>

      
        <div className="products-section pt-5">
          <MotionWrapper
            animation="slideIn"
            delay={0.3}
            useAnimate
            controls={controls}
          >
            <Categories />
          </MotionWrapper>

         
          <MotionWrapper
            animation="fadeInUp"
            delay={0.4}
            useAnimate
            controls={controls}
          >
            <ProductsList />
          </MotionWrapper>
        </div>
      </Container>
    </>
  );
}

export default Products;
