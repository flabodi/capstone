import { Container, Card, Col, Row } from "react-bootstrap";
import TipsSection from "./TipsSection";
import ProductsList from "./ProductsList";

function Home() {
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <img
          className="mt-4 h-img  "
          src="https://plus.unsplash.com/premium_photo-1682633117352-66a94311be10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </Container>
      <div>
        <h2 className="text-center mt-3 mx-2  ">
          Perché ogni drink merita di essere un'arte. Vivi l'esperienza di un
          sorso unico.
        </h2>
      </div>
      <Container fluid className="mx-3 ">
        <h2 className="mt-5 mb-3">Prodotti in evidenza</h2>
        <ProductsList />
      </Container>
      <Container fluid className="my-5">
        <TipsSection />
      </Container>
    </>
  );
}

export default Home;
