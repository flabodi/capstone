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
        <MotionWrapper className="mt-5" animation="fadeIn" >
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
            <a className="text-decoration-none" href="">
              CHI SIAMO
            </a>
          </MotionWrapper>
        </Col>
        <Col xs={12} md={6} className="p-0  order-md-2"  >
          <MotionWrapper className="home-img " animation="fadeIn" delay={0.2}>
            {/* La div dell'immagine è ora all'interno di MotionWrapper */}
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
                src="https://s3-alpha-sig.figma.com/img/ea37/f956/b7f2fbf84245872e6d05a8ad8fa1d27f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dh6G18YiVRF9j~kwBKVt88~-38lX-4P~QjGKaR8V5NFoX4QyxHynH5aU3wYGSMsj-HQdMqR7ORTLlOxyzexInNoCuqeLeVRI8zadixE3VXG-n4DPMMTGKrSGTUBQuGr2nGFvU0WTxEHDgXOHlIat4bpRKETZYDACdv~D~yvRQ85-brKWNkpUmPJ~xSmwy0piVJCQy9moOxCL3DuklTaBoaorgV2KjGMf9erwFQlg1u3Li6YlI6CqrlzJcfXoKesDGnofuBx88cD5L2CD0jlIf~Tqnhmli-zUurViTJA~WlHPCVs8XuOkXWzpke~XBQ21iIj5eQ65KhbrHxGD4Y079A__"
                alt=""
              />
            </MotionWrapper>
          </Col>
          <Col className="p-0" md={8}>
            <MotionWrapper animation="slideRight" delay={0.2}>
              <img
                className="bot1-h-img"
                src="https://s3-alpha-sig.figma.com/img/a8eb/0833/5fa03554192d7bded3fb981faf3ce6d8?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Biv5f-Tco2jkR1-0S5a-rEXSh4f94w2ZXiknfuyZeZIY2aQtd90NAhMQGSTlr3iFnj16sFNe0Hab2wp~ZwS9VeCl8MXL7Jfk7KqUuN6XWEKRpH6KyogZDZWhizqKosoCCS~QZAIY0kV0ASrr29jihEkPovOi8RNMM7Ia8oWmlkrSS2xYYlKFuX9YyCpycL36S23LSU5D8PTlal4Rj7yVcbiYjCxjPw1h1HNsZq4X9VQAOGpDQ3zvPd8AoRonomNLaeZYVMUbUFSxErnABkpc2KMY80o6gVBkYGj~aJjJLHe~rqP19ruNzGjXjcnK73tkxmmw0nafkSnetauyF5CAdg__"
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