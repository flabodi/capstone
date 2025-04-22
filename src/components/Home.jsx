import { Container, Card, Col, Row } from "react-bootstrap";
import TipsSection from "./TipsSection";
import ProductsList from "./ProductsList";
import ProductCarousel from "./ProductCarousel";
import Accordion from "./Accordion";
import RecipeSection from "./RecipeSection";

function Home() {
  return (
    <>
      <Container fluid>
        <div className="mt-5">
          <ProductCarousel featuredOnly={true} maxProducts={5} />
        </div>
      </Container>
      <Row className="home-row ">
        <Col md={6} className=" mt-5  pt-5">
          <h2 className="mx-5  ps-5">
            ABBIAMO PRESO LE <br /> RICETTE DEI GRANDI <br />
            CLASSICI E LE ABBIAMO <br /> VESTITE A FESTA.
          </h2>
          <p className="mx-5 ps-5  mt-4 imb-font ">
            Ricordi quando un cocktail di livello era un'impresa tra ingredienti
            rari e dosaggi perfetti? Noi abbiamo fatto il lavoro sporco (con
            guanti di velluto, s'intende). Tu devi solo goderti l'opera. Perché
            ogni drink merita di essere un'arte.
          </p>
          <a className="ms-5 text-decoration-none ps-5 " href="">
            CHI SIAMO
          </a>
        </Col>
        <Col md={6}>
          <div className="home-img"></div>
        </Col>
      </Row>
      <Accordion />
      <Container fluid className="">
        <Row>
          <Col className="p-0" md={4}>
            <img
              className="bot1-h-img"
              src="https://s3-alpha-sig.figma.com/img/ea37/f956/b7f2fbf84245872e6d05a8ad8fa1d27f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dh6G18YiVRF9j~kwBKVt88~-38lX-4P~QjGKaR8V5NFoX4QyxHynH5aU3wYGSMsj-HQdMqR7ORTLlOxyzexInNoCuqeLeVRI8zadixE3VXG-n4DPMMTGKrSGTUBQuGr2nGFvU0WTxEHDgXOHlIat4bpRKETZYDACdv~D~yvRQ85-brKWNkpUmPJ~xSmwy0piVJCQy9moOxCL3DuklTaBoaorgV2KjGMf9erwFQlg1u3Li6YlI6CqrlzJcfXoKesDGnofuBx88cD5L2CD0jlIf~Tqnhmli-zUurViTJA~WlHPCVs8XuOkXWzpke~XBQ21iIj5eQ65KhbrHxGD4Y079A__"
              alt=""
            />
          </Col>
          <Col className="p-0" md={8}>
            <img
              className="bot1-h-img"
              src="https://s3-alpha-sig.figma.com/img/a8eb/0833/5fa03554192d7bded3fb981faf3ce6d8?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Biv5f-Tco2jkR1-0S5a-rEXSh4f94w2ZXiknfuyZeZIY2aQtd90NAhMQGSTlr3iFnj16sFNe0Hab2wp~ZwS9VeCl8MXL7Jfk7KqUuN6XWEKRpH6KyogZDZWhizqKosoCCS~QZAIY0kV0ASrr29jihEkPovOi8RNMM7Ia8oWmlkrSS2xYYlKFuX9YyCpycL36S23LSU5D8PTlal4Rj7yVcbiYjCxjPw1h1HNsZq4X9VQAOGpDQ3zvPd8AoRonomNLaeZYVMUbUFSxErnABkpc2KMY80o6gVBkYGj~aJjJLHe~rqP19ruNzGjXjcnK73tkxmmw0nafkSnetauyF5CAdg__"
              alt=""
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-5">
        <TipsSection />
      </Container>
      <RecipeSection />
    </>
  );
}

export default Home;
