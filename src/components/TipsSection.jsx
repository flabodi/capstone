import { Container, Row, Col, Card, Button } from "react-bootstrap";

function TipsSection() {
  return (
    <>
      <div className="tips-section pb-3 ">
        <Container >
          <h2 className="text-center mt-4">I NOSTREI CONSIGLI PER VOI</h2>
          <Card className="my-4 tips-card ">
            <Row className="g-0">
              <Col md={4}>
                <Card.Img
                  src="https://plus.unsplash.com/premium_photo-1661540515873-0d7c4e07891a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRyaW5rfGVufDB8fDB8fHww"
                  alt="Drink"
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Provaci a casa</Card.Title>
                  <Card.Text>
                    Un mix perfetto di sapori autentici e arte della
                    miscelazione. Vivi l’esperienza di un cocktail premium
                    ovunque tu sia.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Row className="g-0">
            <Col md={6}>
          <Card style={{ width: "21rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col md={6}>
          <Card style={{ width: "21rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          </Row>
          <div className="text-center">
          <Button className="btn mt-3  ">leggi di piu </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default TipsSection;
