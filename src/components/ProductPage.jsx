import { Col, Container, Row, Accordion } from "react-bootstrap";

function ProductPage() {
  return (
    <>
      <Container fluid>
        <Row className="my-4">
          <Col md={7}>
            <img
              className="w-50 "
              src="https://plus.unsplash.com/premium_photo-1682633117352-66a94311be10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <img
              className="w-50"
              src="https://plus.unsplash.com/premium_photo-1682633117352-66a94311be10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <img
              className="w-50"
              src="https://plus.unsplash.com/premium_photo-1682633117352-66a94311be10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <img
              className="w-50"
              src="https://plus.unsplash.com/premium_photo-1682633117352-66a94311be10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </Col>
          <Col md={5}>
            <h1>Daiquiri</h1>
            <ul>
              <li>Price: $5</li>
              <li>Category: Cocktail</li>

              <li>Glass: Cocktail glass</li>
              <li>Grado alcolico: 26</li>
            </ul>

            <button className="btn btn-primary">Add to Cart</button>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <Accordion defaultActiveKey="0" className="my-4 accordion-custom">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Ingredients</Accordion.Header>
                <Accordion.Body>lime, rum, zucchero</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Descrizione</Accordion.Header>
                <Accordion.Body>
                  Il Daiquiri è un drink caraibico dalle note acide con un
                  appunto speciale sul dolce dato dal rum e dallo zucchero
                  all'interno. Una delle cose divertenti di questo drink è
                  cambiare le tipologie di rum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Fallo a casa</Accordion.Header>
                <Accordion.Body>
                  I nostri drink arrivano pronti da essere bevuti. Il consiglio
                  è quello di non usare ghiaccio e di berlo molto freddo;
                  mettilo in congelatore, non ghiaccerà.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={6}>
            <h4>pallet aromatico </h4>
            <div className="text-center">
              <img
                className="w-25  "
                src="https://plus.unsplash.com/premium_vector-1731582097922-7de0df6c07ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGdyYWZpY298ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <ul>
              <li>Spedizione gratuita per ordini superiori a 50€</li>

              <li>Drink artigianali pronti da gustare, ovunque tu sia</li>
              <li>
                Miscelati con ingredienti premium da bartender professionisti
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ProductPage;
