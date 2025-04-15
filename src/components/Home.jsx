import { Container, Card, Col, Row } from "react-bootstrap";
import TipsSection from "./TipsSection";
import ProductsList from "./ProductsList";

function Home() {
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center p-0 align-items-center"
      >
        
      </Container>
      <div>
        <h2 className="text-center mt-3 mx-2  ">
        PERCHÈ OGNI DRINK MERITA DI ESSERE UN'ARTE.  <br/> VIVI L'ESPERIENZA DI UN SORSO UNICO.
        </h2>
      </div>
      <Container fluid className="mx-3 ">
        <h2 className="mt-5 mb-3">Prodotti in evidenza</h2>
        <ProductsList featuredOnly={true}/>
      </Container>
      <Container fluid className="my-5">
        <TipsSection />
      </Container>
    </>
  );
}

export default Home;
