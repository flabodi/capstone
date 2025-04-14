import { useEffect } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { Link,  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/feauters/products/productsSlice";
import { addToCart } from "../redux/feauters/cart/cartSlice";

function ProductsList() {
  const dispatch = useDispatch();
  

  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
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

  const handleAddToCart = (e, product) => {
    e.preventDefault(); // evita che il Link venga eseguito
    e.stopPropagation(); // blocca la propagazione del click
    dispatch(addToCart(product));
    // Opzionale: mostra un messaggio di conferma
    alert(`${product.name} aggiunto al carrello!`);
  };
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Col key={product.id}>
              <Link
                to={`/prodotto/${product.id}`}
                className="text-decoration-none"
              >
                <Card className="color-card h-100">
                  <Card.Img
                    className="pb-0"
                    variant="top"
                    src={product.cover}
                  />
                  <Card.Body className="p-2 d-flex justify-content-between align-items-center">
                    <Card.Title className="m-0 text-dark">
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
