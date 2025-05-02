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
    const query = e.target.value;
    dispatch(setSearchQuery(query));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    // Se c'è un termine di ricerca, navigare alla pagina prodotti
    if (searchQuery.trim() !== "") {
      // Navigare alla pagina prodotti senza resettare la query
      navigate("/product");
      // Non svuotare il campo di ricerca per mantenere il filtro attivo
    }
  };

  // Questa funzione gestisce anche la ricerca immediata quando l'utente preme invio
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (searchQuery.trim() !== "") {
        // Navigare alla pagina prodotti senza resettare la query
        navigate("/product");
        // Non svuotare il campo di ricerca per mantenere il filtro attivo
      }
    }
  };

  return (
    <div className="w-100">
      {/* Navbar */}
      <Navbar expand="md" className="w-100 rounded-0">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-dark">
            SPIRITI NOBILI
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 d-flex align-items-center justify-content-center d-block d-lg-none"
          >
            <span>MENU</span>
            <i className="bi bi-cup-straw text-dark"> </i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-3 w-100 justify-content-center align-items-center gap-3">
              <Nav.Link
                as={Link}
                to="/product"
                className="fw-semibold text-center"
              >
                PRODOTTI
              </Nav.Link>
              <Nav.Link as={Link} to="/tips" className="fw-semibold text-center">
                TIPS
              </Nav.Link>
              <form 
                className="position-relative w-25" 
                onSubmit={handleSearchSubmit}
              >
                <input
                  type="text"
                  className="form-control rounded-5 ps-5 h-25"
                  placeholder="CERCA PRODOTTO..."
                  value={searchQuery}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
              </form>
              <Link to="/cart" className="text-decoration-none">
                <button className="btn position-relative">
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