import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/feauters/categories/filtersSlice";

function MyNavbar() {
  const { items } = useSelector((state) => state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.filters.searchQuery);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate("/product");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchQuery.trim() !== "") {
        navigate("/product");
      }
    }
  };

  return (
    <div className="w-100">
      <Navbar expand="md" className="w-100 rounded-0">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="text-dark">
            SPIRITI NOBILI
          </Navbar.Brand>

          <Link to="/cart" className="text-decoration-none d-flex d-md-none me-3">
            <button className="btn position-relative">
              <i className="bi bi-basket3 px-2"></i>
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            </button>
          </Link>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 d-flex align-items-center justify-content-center d-block d-lg-none"
          >
            <span>MENU</span>
            <i className="bi bi-cup-straw text-dark"></i>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="align-items-center justify-content-center text-center">
              <Nav.Link as={Link} to="/product" className="fw-semibold text-center">
                PRODOTTI
              </Nav.Link>
              <Nav.Link as={Link} to="/tips" className="fw-semibold text-center">
                EDUCAZIONE ALCOLICA
              </Nav.Link>
            </Nav>

            <form
              className="d-flex justify-content-center justify-content-md-start ms-md-4"
              onSubmit={handleSearchSubmit}
            >
              <div className="position-relative" style={{ width: "200px" }}>
                <input
                  type="text"
                  className="form-control rounded-5 ps-5 bg-transparent"
                  placeholder="CERCA PRODOTTO..."
                  value={searchQuery}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
              </div>
            </form>
          </Navbar.Collapse>

          <Link to="/cart" className="text-decoration-none d-none d-md-flex ms-auto">
            <button className="btn position-relative">
              <i className="bi bi-basket3 px-2"></i>
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            </button>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
