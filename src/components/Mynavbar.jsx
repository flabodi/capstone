import { Container, Navbar, Nav, Form, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/feauters/categories/filtersSlice";

function MyNavbar() {
  const { items } = useSelector((state) => state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.filters.searchQuery);

  const handleInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return ( 
    <div className="w-100">
    {/* Navbar */}
    <Navbar
      expand="xxl"
      className="position-absolute top-0 start-0 w-100 z-3 rounded-0"
    
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">Drinks</Navbar.Brand>
        <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", width: "80px", height: "40px" }}
          >
            <span>menu</span>
           <i className="bi  bi-cup-straw text-white"> </i>
           
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-3 w-100 justify-content-center align-items-center gap-3">
            <Nav.Link as={Link} to="/product" className="fw-semibold text-center text-white">Prodotti</Nav.Link>
            <Nav.Link as={Link} to="/tips" className="fw-semibold text-center text-white">Tips</Nav.Link>
            <input
              type="text"
              className="form-control w-50"
              placeholder="Cerca prodotto..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Link to="/cart" className="text-decoration-none">
              <button className="btn btn-secondary position-relative">
                <i className="bi bi-basket3 px-3"></i>
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Hero Image */}
    <div className="position-relative" style={{ height: "70vh", overflow: "hidden" }}>
      <img
        src="https://i.postimg.cc/76dmWQy9/Immagine-Whats-App-2025-04-15-ore-12-20-18-37174640.jpg"
        alt="hero"
        className="w-100 h-100"
        style={{ objectFit: "cover", objectPosition: "center 25%" }}
      />
    </div>

  
  </div>
);
} 

export default MyNavbar;
