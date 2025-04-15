// src/components/ProductsList.jsx
import { useEffect } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/feauters/products/productsSlice";
import { addToCart } from "../redux/feauters/cart/cartSlice";

function ProductsList({ featuredOnly = false }) {
  const dispatch = useDispatch();

  const { products, status, error } = useSelector((state) => state.products);
  // Recupera i filtri dallo slice: searchQuery e selectedCategory
  const { searchQuery, selectedCategory } = useSelector((state) => state.filters);

  useEffect(() => {
    if (status === "idle") {
      // Assicurati che la chiamata API usi il parametro populate se serve per ottenere la relazione
      dispatch(getProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" />
      </div>
    );
  }
  if (status === "failed") {
    return (
      <div className="text-center">
        <h3>Error: {error}</h3>
      </div>
    );
  }

  // Partiamo dall'array completo dei prodotti
  let filteredProducts = products;

  // Se siamo in modalità featuredOnly, filtra per i prodotti in evidenza
  if (featuredOnly) {
    filteredProducts = filteredProducts.filter(
      (product) => product.feautured === true
    );
  }

  // Se c'è un testo di ricerca, filtriamo per nome (ignorando gli altri filtri)
  if (searchQuery && searchQuery.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  // Se non c'è una ricerca e non siamo in modalità featuredOnly, applichiamo il filtro per categoria
  else if (!featuredOnly && selectedCategory !== null) {
    filteredProducts = filteredProducts.filter((product) => {
      // Controlla che la relazione 'product' sia popolata
      if (!product.product) return false;
      return product.product.id === selectedCategory;
    });
  }

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    alert(`${product.name} aggiunto al carrello!`);
  };

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col key={product.id}>
              <Link to={`/prodotto/${product.id}`} className="text-decoration-none">
                <Card className="color-card h-100">
                  <Card.Img variant="top" src={product.cover} alt={product.name} className="w-50" />
                  <Card.Body className="p-2 d-flex justify-content-between align-items-center">
                    <Card.Title className="m-0 ">
                      {product.name} {product.price}$
                    </Card.Title>
                    <button
                      className="btn btn-secondary me-3"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      <i className="bi bi-basket3 px-3"></i>
                    </button>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <div className="text-center col-12">
            <h5>No products available.</h5>
          </div>
        )}
      </Row>
    </>
  );
}

export default ProductsList;
