import {  useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../redux/feauters/products/productsSlice";
import { Col, Container, Row, Accordion, Spinner } from "react-bootstrap";

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
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Torna indietro</button>
      </div>
    );
  }

  if (!currentProduct) {
    return (
      <div className="text-center">
        <h3>Prodotto non trovato</h3>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Torna indietro</button>
      </div>
    );
  }

  // Funzione per estrarre il testo dalla descrizione strutturata
  const getDescriptionText = () => {
    if (!currentProduct.description || !currentProduct.description.length) return "";
    
    return currentProduct.description.map(paragraph => 
      paragraph.children.map(child => child.text).join("")
    ).join("\n");
  };

  return (
    <>
      <Container fluid>
        <Row className="my-4">
          <Col md={7}>
            {/* Mostra l'immagine principale 4 volte come nel tuo layout */}
            <img
              className="w-50"
              src={currentProduct.cover}
              alt={currentProduct.name}
            />
            <img
              className="w-50"
              src={currentProduct.cover}
              alt={currentProduct.name}
            />
            <img
              className="w-50"
              src={currentProduct.cover}
              alt={currentProduct.name}
            />
            <img
              className="w-50"
              src={currentProduct.cover}
              alt={currentProduct.name}
            />
          </Col>
          <Col md={5}>
            <h1>{currentProduct.name}</h1>
            <ul>
              <li>Price: ${currentProduct.price}</li>
              <li>Category: Cocktail</li>
              <li>Glass: Cocktail glass</li>
              {/* Se hai altri dati per questi campi, puoi aggiungerli qui */}
            </ul>

            <button className="btn btn-primary" onClick={() => navigate("/cart")}>
              Add to Cart
            </button>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <Accordion defaultActiveKey="0" className="my-4 accordion-custom">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Ingredients</Accordion.Header>
                <Accordion.Body>{currentProduct.ingedients}</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Descrizione</Accordion.Header>
                <Accordion.Body>
                  {getDescriptionText()}
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Fallo a casa</Accordion.Header>
                <Accordion.Body>
                  {currentProduct.tips || "I nostri drink arrivano pronti da essere bevuti. Il consiglio è quello di non usare ghiaccio e di berlo molto freddo; mettilo in congelatore, non ghiaccerà."}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={6}>
            <h4>Pallet aromatico</h4>
            <div className="text-center">
              <img
                className="w-25"
                src="https://plus.unsplash.com/premium_vector-1731582097922-7de0df6c07ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGdyYWZpY298ZW58MHx8MHx8fDA%3D"
                alt="Pallet aromatico"
              />
            </div>
            <ul>
              <li>Spedizione gratuita per ordini superiori a 50€</li>
              <li>Drink artigianali pronti da gustare, ovunque tu sia</li>
              <li>Miscelati con ingredienti premium da bartender professionisti</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetail;