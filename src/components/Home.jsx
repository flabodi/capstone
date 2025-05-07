import { Container, Card, Col, Row } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MotionWrapper } from "./MotionWrapper";
import TipsSection from "./TipsSection";
import ProductsList from "./ProductsList";
import ProductCarousel from "./ProductCarousel";
import Accordion from "./Accordion";
import RecipeSection from "./RecipeSection";

function Home() {
  return (
    <>
      <Container fluid>
        <MotionWrapper className="mt-5" animation="fadeIn"  >
          <ProductCarousel featuredOnly={true} maxProducts={5} />
        </MotionWrapper>
      </Container>
      <Row className="home-row">
        <Col md={6} className="mt-5 pt-5">
          <MotionWrapper className="mx-5 ps-5" animation="fadeInUp" delay={0.4}>
            <h2>
              ABBIAMO PRESO LE <br /> RICETTE DEI GRANDI <br />
              CLASSICI E LE ABBIAMO <br /> VESTITE A FESTA.
            </h2>
          </MotionWrapper>
          
          <MotionWrapper className="mx-5 ps-5 mt-4" animation="fadeInUp" delay={0.2}>
            <p className="imb-font">
              Ricordi quando un cocktail di livello era un'impresa tra ingredienti
              rari e dosaggi perfetti? Noi abbiamo fatto il lavoro sporco (con
              guanti di velluto, s'intende). Tu devi solo goderti l'opera. Perché
              ogni drink merita di essere un'arte.
            </p>
          </MotionWrapper>
          
          <MotionWrapper className="ms-5 mb-sm-4 ps-5" animation="fadeInUp" delay={0.3}>
           
          </MotionWrapper>
        </Col>
        <Col xs={12} md={6} className="p-0  order-md-2"  >
          <MotionWrapper className="home-img " animation="fadeIn" delay={0.2}>
           
          </MotionWrapper>
        </Col>
      </Row>
      
      <MotionWrapper animation="fadeInUp">
        <Accordion />
      </MotionWrapper>
      
      <Container fluid>
        <Row>
          <Col className="p-0" md={4}>
            <MotionWrapper animation="slideIn">
              <img
                className="bot1-h-img"
                src="https://i.postimg.cc/Hskftn4J/gin.png"
                alt=""
              />
            </MotionWrapper>
          </Col>
          <Col className="p-0" md={8}>
            <MotionWrapper animation="slideRight" delay={0.2}>
              <img
                className="bot1-h-img"
                src="https://i.postimg.cc/9Q4KvkkC/lifestyle.png"
                alt=""
              />
            </MotionWrapper>
          </Col>
        </Row>
      </Container>
      
      <Container fluid className="my-5">
        <MotionWrapper animation="fadeInUp">
          
              <TipsSection />
            
        </MotionWrapper>
      </Container>
      
      <MotionWrapper animation="zoomIn">
        <RecipeSection />
      </MotionWrapper>
    </>
  );
}

export default Home;