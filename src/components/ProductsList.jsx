import { Card, Col, Row } from "react-bootstrap";
import { Link , useNavigate } from "react-router-dom";
function ProductsList() {
    const navigate = useNavigate();
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col>
        <Link to="/prodotto" className="text-decoration-none">
      <Card className="color-card h-100">
        <Card.Img
          className=" pb-0"
          variant="top"
          src="https://plus.unsplash.com/premium_photo-1682633117352-66a94311be10?w=600&auto=format&fit=crop&q=60"
        />
        <Card.Body className="p-2 d-flex justify-content-between align-items-center">
          <Card.Title className="m-0 text-dark">Daiquiri 5$</Card.Title>
          <button
            className="btn btn-secondary me-3 "
            onClick={(e) => {
              e.preventDefault(); // evita che il Link venga eseguito
              e.stopPropagation(); // blocca la propagazione del click
              navigate("/cart");
            }}
          >
            <i className="bi bi-basket3 px-3"></i>
          </button>
        </Card.Body>
      </Card>
    </Link>
        </Col>
        <Col>
          <Card className="color-card">
            <Card.Img
              className="p-4"
              variant="top"
              src="https://plus.unsplash.com/premium_photo-1682633117352-66a94311be10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbnxlbnwwfHwwfHx8MA%3D%3D"
            />
            <Card.Body className="p-0">
              <Card.Title>Daiquiri 5$ </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="color-card">
            <Card.Img
              className="p-4"
              variant="top"
              src="https://plus.unsplash.com/premium_photo-1682633117352-66a94311be10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbnxlbnwwfHwwfHx8MA%3D%3D"
            />
            <Card.Body className="p-0">
              <Card.Title>Daiquiri 5$ </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="color-card">
            <Card.Img
              className="p-4"
              variant="top"
              src="https://plus.unsplash.com/premium_photo-1682633117352-66a94311be10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbnxlbnwwfHwwfHx8MA%3D%3D"
            />
            <Card.Body className="p-0">
              <Card.Title>Daiquiri 5$ </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default ProductsList;
