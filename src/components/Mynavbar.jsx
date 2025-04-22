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
      expand="md"
      className=" w-100  rounded-0"
    
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-dark"> SPIRITI NOBILI </Navbar.Brand>
        <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 d-flex align-items-center justify-content-center d-block d-lg-none"
           
          >
            <span> MENU</span>
           <i className="bi  bi-cup-straw text-dark"> </i>
           
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-3 w-100 justify-content-center align-items-center gap-3">
            <Nav.Link as={Link} to="/product" className="fw-semibold text-center ">PRODOTTI</Nav.Link>
            <Nav.Link as={Link} to="/tips" className="fw-semibold text-center ">TIPS</Nav.Link>
            <input
              type="text"
              className="form-control w-25 rounded-5 h-25"
              placeholder="CERCA PRODOTTO..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Link to="/cart" className="text-decoration-none">
              <button className="btn  position-relative">
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

  

  
  </div>
);
} 

export default MyNavbar;
