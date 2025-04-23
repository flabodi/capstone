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
    <Container fluid className="my-5 p-3 ">
      <Row className="g-4">
        {tipsStories.map((tip) => (
          <Col key={tip.id} md={6}>
            <div className="h-75  w-75">
           
                <h3>{tip.title}</h3>
                <p className="imb-font"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: expandedTips[tip.id] ? "unset" : 6,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {tip.content}
                </p>
                <Button
                  variant="link"
                  className="p-0 imb-font text-decoration-none"
                  onClick={() => toggleExpand(tip.id)}
                >
                  {expandedTips[tip.id] ? "Mostra meno" : "Leggi di più"}
                </Button>
            
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TipsSection;
