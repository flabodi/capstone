import { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, updateQuantity, clearCart } from "../redux/feauters/cart/cartSlice";

function CartPage() {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Simula un ritardo per il checkout
    setTimeout(() => {
      navigate("/thank-you");
      dispatch(clearCart());
    }, 1000);
  };

  return (
    <Container className="my-5 imb-font">
      <h2 className="mb-4">Il tuo carrello</h2>
      
      {items.length === 0 ? (
        <div className="text-center my-5">
          <h4>Il tuo carrello è vuoto</h4>
          <Button variant="primary" className="mt-3" onClick={() => navigate("/product")}>
            Continua lo shopping
          </Button>
        </div>
      ) : (
        <Row>
          {/* CARRELLO */}
          <Col md={8}>
            <Card className="mb-4">
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Prodotto</th>
                      <th>Prezzo</th>
                      <th>Quantità</th>
                      <th>Totale</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={item.cover}
                              alt={item.name}
                              style={{ width: "50px", marginRight: "10px" }}
                            />
                            {item.name}
                          </div>
                        </td>
                        <td>${item.price}</td>
                        <td>
                          <div className="d-flex align-items-center ">
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            >
                              -
                            </Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                        </td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            
            <div className="d-flex justify-content-between mb-4">
              <Button variant="outline-secondary" onClick={() => navigate("/product")}>
                Continua lo shopping
              </Button>
              <Button variant="outline-danger" onClick={() => dispatch(clearCart())}>
                Svuota carrello
              </Button>
            </div>
          </Col>

          {/* RIEPILOGO */}
          <Col md={4}>
            <Card className="color-card">
              <Card.Body>
                <Card.Title>Riepilogo ordine</Card.Title>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotale</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Spedizione</span>
                  <span>{total > 50 ? "Gratuita" : "$5.00"}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3 fw-bold">
                  <span>Totale</span>
                  <span>${(total > 50 ? total : total + 5).toFixed(2)}</span>
                </div>
                
                {/* FORM DATI PAGAMENTO */}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nome completo</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Mario Rossi" 
                      required 
                      disabled={formSubmitted}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Indirizzo</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Via Roma 123" 
                      required 
                      disabled={formSubmitted}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Città</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Milano" 
                      required 
                      disabled={formSubmitted}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Metodo di pagamento</Form.Label>
                    <Form.Select required disabled={formSubmitted}>
                      <option>Carta di credito</option>
                      <option>PayPal</option>
                      <option>Contrassegno</option>
                    </Form.Select>
                  </Form.Group>
                  <Button 
                    variant="dark" 
                    type="submit" 
                    className="w-100" 
                    disabled={formSubmitted}
                  >
                    {formSubmitted ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Elaborazione in corso...
                      </>
                    ) : (
                      "Procedi al pagamento"
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default CartPage;