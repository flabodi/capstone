import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ThankYouPage() {
  const navigate = useNavigate();
  const orderNumber = Math.floor(1000 + Math.random() * 9000); // Genera un numero ordine casuale a 4 cifre
  
  return (
    <Container className="my-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="color-card p-5">
            <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "4rem" }}></i>
            <Card.Body>
              <Card.Title as="h1" className="mb-4">GRAZIE PER IL TUO ORDINE</Card.Title>
              <div className="imb-font">
              <Card.Text className="mb-4">
                Il tuo ordine #{orderNumber} è stato confermato. Ti abbiamo inviato un'email con i dettagli dell'ordine.
              </Card.Text>
              <Card.Text className="mb-4">
                I tuoi cocktail artigianali saranno presto in viaggio. Per qualsiasi domanda, non esitare a contattarci.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/")} className="me-3">
                Torna alla home
              </Button>
              <Button variant="outline-primary" onClick={() => navigate("/product")}>
                Continua lo shopping
              </Button></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ThankYouPage;