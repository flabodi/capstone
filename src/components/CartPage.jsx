import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function CartPage() {
  return (
    <Container className="my-5">
      <Row>
        {/* FORM DATI PAGAMENTO */}
        <Col md={6}>
          <h3>Dati per la spedizione</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nome completo</Form.Label>
              <Form.Control type="text" placeholder="Mario Rossi" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Indirizzo</Form.Label>
              <Form.Control type="text" placeholder="Via Roma 123" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Città</Form.Label>
              <Form.Control type="text" placeholder="Milano" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Metodo di pagamento</Form.Label>
              <Form.Select>
                <option>Carta di credito</option>
                <option>PayPal</option>
                <option>Contrassegno</option>
              </Form.Select>
            </Form.Group>
            <Button variant="dark" type="submit">
              Procedi al pagamento
            </Button>
          </Form>
        </Col>

        {/* CARRELLO - VUOTO PER ORA */}
        <Col md={6}>
          <h3>Il tuo carrello</h3>
          {/* Qui in seguito mostreremo i prodotti */}
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;
