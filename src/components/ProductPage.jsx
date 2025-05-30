import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../redux/feauters/products/productsSlice";
import { Col, Container, Row, Accordion, Spinner } from "react-bootstrap";
import { addToCart } from "../redux/feauters/cart/cartSlice";
import { MotionWrapper } from "./MotionWrapper";
import icon from "../assets/Livello_1.svg";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentProduct, productStatus, productError } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  if (productStatus === "loading") {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" />
      </div>
    );
  }

  if (productStatus === "failed") {
    return (
      <div className="text-center">
        <h3>Error: {productError}</h3>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Torna indietro
        </button>
      </div>
    );
  }

  if (!currentProduct) {
    return (
      <div className="text-center">
        <h3>Prodotto non trovato</h3>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Torna indietro
        </button>
      </div>
    );
  }

  
  const getDescriptionText = () => {
    if (!currentProduct.description || !currentProduct.description.length)
      return "";

    return currentProduct.description
      .map((paragraph) =>
        paragraph.children.map((child) => child.text).join("")
      )
      .join("\n");
  };

  const handleAddToCart = () => {
    dispatch(addToCart(currentProduct));
    alert(`${currentProduct.name} aggiunto al carrello!`);
  };

  return (
    <>
      
      <MotionWrapper animation="fadeInUp" delay={0.1}>
        <Container fluid>
          <Row className="my-4">
          
            <Col
              xs={12}
              sm={12}
              md={5}
              className="ps-md-5 order-2 order-md-1"
            >
              <MotionWrapper animation="fadeInUp" delay={0.2}>
                <h1>
                  {currentProduct.name} - {currentProduct.price}$
                </h1>
                <h3>{currentProduct.info}</h3>
                <p className="imb-font">{getDescriptionText()}</p>

                <button
                  className="btn imb-font text-primary"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>

                <div className="miscelazione-container mt-4">
                  <div className="miscelazione-table">
                    <div className="miscelazione-header">
                      <h2>MISCELAZIONE ARTIGIANALE</h2>
                    </div>

                    <div className="miscelazione-content">
                      <div className="miscelazione-left">
                        <div className="temperatura-section">
                          <p className="label">Temperatura ideale:</p>
                          <p className="value">4-6°C</p>
                        </div>

                        <div className="bicchiere-section border-top border-black ">
                          <p className="label mt-3">Bicchiere:</p>
                          <p className="value">COPPA MARTINI</p>
                        </div>
                      </div>

                      <div className="miscelazione-right">
                        <p className="ingredienti">
                          Acqua purificata, rum bianco (25%) distillato da melassa
                          di canna da zucchero, succo di lime concentrato (7%),
                          zucchero di canna, aromi naturali (limone e lime, cola,
                          radice di zenzero), estratto di lime naturale, conservante
                          (sorbato di potassio), stabilizzante (gomma naturale), una
                          goccia di arroganza tropicale.
                        </p>
                      </div>
                    </div>

                    <div className="miscelazione-footer">
                      <p>
                        APERITIVO AL TRAMONTO / SUNDAY CHILL • OSTRICHE, CEVICHE,
                        POPCORN SALATI
                      </p>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            </Col>

          
            <Col
              xs={12}
              sm={12}
              md={7}
              className="text-center order-1 order-md-2"
            >
              <MotionWrapper animation="slideIn" delay={0.3}>
                <div className="image-container">
                  <img src={currentProduct.cover} alt={currentProduct.name} />
                  <img src={icon} alt="" className="icon" />
                </div>
              </MotionWrapper>
            </Col>
          </Row>
        </Container>
      </MotionWrapper>

     
      <MotionWrapper animation="fadeIn" delay={0.4}>
        <img
          className="w-100 big-img-mobile "
          src={currentProduct.gallery_product1}
          alt=""
        />
      </MotionWrapper>
    </>
  );
}

export default ProductDetail;