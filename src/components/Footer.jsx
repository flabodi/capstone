import { Container, Row, Col } from "react-bootstrap";
function Footer () { 
return (
<>
<footer className=" py-5  ">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Spiriti Nobili</h5>
            <p>
              Cocktail pronti in bottiglia o lattina, nati per portare l’arte della miscelazione ovunque tu sia.
            </p>
          </Col>
          <Col md={4}>
            <h5>Link Utili</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="#prodotti" className="text-dark text-decoration-none">Prodotti</a></li>
              <li><a href="#contatti" className="text-dark text-decoration-none">Contatti</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contatti</h5>
            <p>Email: info@SpiritiNobili.com</p>
            <p>Telefono: +39 123 456 7890</p>
            <p>Instagram: @SpiritiNobili</p>
          </Col>
        </Row>
      </Container>
    </footer>

</>

);

}
export default Footer