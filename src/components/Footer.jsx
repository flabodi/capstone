import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="py-5 imb-font ">
      <Container>
        <Row>
          {/* Colonne: full-width su xs, 1/3 su sm+ */}
          <Col xs={12} sm={4} className="mb-4 mb-sm-0 text-center text-sm-start">
            <h5>Spiriti Nobili</h5>
            <p>
              Cocktail pronti in bottiglia o lattina, nati per portare l’arte della
              miscelazione ovunque tu sia.
            </p>
          </Col>

          <Col xs={12} sm={4} className="mb-4 mb-sm-0 text-center text-sm-start">
            <h5>Link Utili</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-dark text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#prodotti" className="text-dark text-decoration-none">
                  Prodotti
                </a>
              </li>
              <li>
                <a href="#contatti" className="text-dark text-decoration-none">
                  Contatti
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={12} sm={4} className="text-center text-sm-start">
            <h5>Contatti</h5>
            <p className="mb-1">Email: info@SpiritiNobili.com</p>
            <p className="mb-1">Telefono: +39 123 456 7890</p>
            <p className="mb-0">Instagram: @SpiritiNobili</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
