
import { useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/feauters/products/productsSlice";
import { addToCart } from "../redux/feauters/cart/cartSlice";

function ProductsList({ featuredOnly = false }) {
  const dispatch = useDispatch();

  const { products, status, error } = useSelector((state) => state.products);
  
  const { searchQuery, selectedCategory } = useSelector(
    (state) => state.filters
  );

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

 
  let filteredProducts = products;


  if (featuredOnly) {
    filteredProducts = filteredProducts.filter(
      (product) => product.feautured === true
    );
  }


  if (searchQuery && searchQuery.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  else if (!featuredOnly && selectedCategory !== null) {
    filteredProducts = filteredProducts.filter((product) => {
     
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
    <div className="container-fluid px-4 py-5" >
      <Row xs={2} sm={3} md={4} className="g-4">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col key={product.id} className="mb-5">
              <div className="product-item text-center">
                <Link
                  to={`/prodotto/${product.id}`}
                  className="text-decoration-none"
                >
                  <div className="product-image mb-3" style={{ height: "220px" }}>
                    <img
                      src={product.cover}
                      alt={product.name}
                      className="img-fluid"
                      style={{ 
                        maxHeight: "100%", 
                        width: "auto", 
                        maxWidth: "100%",
                        margin: "0 auto",
                        display: "block"
                      }}
                    />
                  </div>
                  <h6 className="product-name text-uppercase fw-bold mb-1" style={{ color: "#A8774A" }}>
                    {product.name}

                  </h6>
                  <p className="product-details small mb-2" style={{ color: "#A8A8A8" }}>
                  {product.info}
                  </p>
                  <div className="d-grid">
                    <button
                      className="btn"
                      onClick={(e) => handleAddToCart(e, product)}
                      style={{ 
                        backgroundColor: "transparent", 
                        color: "#D8A55A", 
                        border: "1px solid #D8A55A",
                        fontSize: "0.8rem",
                        padding: "2px 15px",
                        borderRadius: "0"
                      }}
                    >
                      €{product.price}
                    </button>
                  </div>
                </Link>
              </div>
            </Col>
          ))
        ) : (
          <div className="text-center col-12">
            <h5 style={{ color: "#D8A55A" }}>No products available.</h5>
          </div>
        )}
      </Row>
    </div>
  );
}

export default ProductsList;