import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="md" className="mx-5 mt-3 rounded-4 color-nav">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Drinks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-3 w-100 justify-content-center">
            <Nav.Link
              as={Link}
              to="/product"
              className="fw-semibold text-center "
            >
              Prodotti
            </Nav.Link>
            <Nav.Link as={Link} to="/tips" className="fw-semibold text-center ">
              Tips
            </Nav.Link>
            <Form className="d-flex ms-auto" role="search">
              <Form.Control
                type="search"
                placeholder="Cerca..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Cerca</Button>
            </Form>
            <Link to="/cart" className="text-decoration-none">
            <button className="btn btn-secondary ms-3 ">
              <i className="bi bi-basket3 px-3"></i>
            </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
