import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchTipsStories } from "../redux/feauters/tipsStories/tipsStoriesSlice";

function TipsSection() {
  const dispatch = useDispatch();
  // Estrai dallo store Redux i dati relativi alle tips
  const { tipsStories, status, error } = useSelector(
    (state) => state.tipsStories
  );
  const [expandedTips, setExpandedTips] = useState({});

  useEffect(() => {
    // Se lo stato è "idle", esegui il thunk per recuperare i tips
    if (status === "idle") {
      dispatch(fetchTipsStories());
    }
  }, [dispatch, status]);

  // Se i dati sono in caricamento, mostra uno spinner
  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" />
      </div>
    );
  }

  // Se c'è un errore, visualizzalo
  if (status === "failed") {
    return (
      <div className="text-center">
        <h3>Error: {error}</h3>
      </div>
    );
  }

  const toggleExpand = (id) => {
    setExpandedTips((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Container className="my-5">
      <Row className="g-4">
        {tipsStories.map((tip) => (
          <Col key={tip.id} md={6}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{tip.title}</Card.Title>
                <Card.Text
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: expandedTips[tip.id] ? "unset" : 6,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {tip.content}
                </Card.Text>
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => toggleExpand(tip.id)}
                >
                  {expandedTips[tip.id] ? "Mostra meno" : "Leggi di più"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TipsSection;
