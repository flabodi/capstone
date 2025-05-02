import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchTipsStories } from "../redux/feauters/tipsStories/tipsStoriesSlice";
import { useLocation, useNavigate } from "react-router-dom";

function TipsSection() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { tipsStories, status, error } = useSelector(
    (state) => state.tipsStories
  );

  // prendi l'id del tip da espandere (se arrivi da Home)
  const initExpandId = location.state?.expandTipId;
  const [expandedTips, setExpandedTips] = useState(
    initExpandId ? { [initExpandId]: true } : {}
  );

  useEffect(() => {
    if (status === "idle") dispatch(fetchTipsStories());
  }, [dispatch, status]);

  // quando arrivi su /tips con uno expandTipId, scrolla lì
  useEffect(() => {
    if (initExpandId) {
      const el = document.getElementById(`tip-${initExpandId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [initExpandId]);

  if (status === "loading")
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" />
      </div>
    );
  if (status === "failed")
    return (
      <div className="text-center">
        <h3>Error: {error}</h3>
      </div>
    );

  const isHome =
    location.pathname === "/" || location.pathname === "/home";
  const tipsToShow = isHome ? tipsStories.slice(0, 2) : tipsStories;
  const colsPerRow = isHome ? { xs: 1, md: 2 } : { xs: 1, md: 1 };

  const toggleExpand = (id) =>
    setExpandedTips((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <Container fluid className=" pb-3">
      <Row {...colsPerRow} className="g-4">
        {tipsToShow.map((tip) => {
          const isExpanded = !!expandedTips[tip.id];
          return (
            <Col key={tip.id}>
              {/* assegna l'id qui */}
              <div id={`tip-${tip.id}`} className="h-100 p-3 border rounded">
                <h3>{tip.title}</h3>
                <p
                  className="imb-font"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: isExpanded ? "unset" : 6,
                    WebkitBoxOrient: "vertical",
                    overflow: isExpanded ? "visible" : "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {tip.content}
                </p>
                <Button
                  variant="link"
                  className="p-0 imb-font text-decoration-none"
                  onClick={() => {
                    if (isHome) {
                      navigate("/tips", {
                        state: { expandTipId: tip.id },
                      });
                    } else {
                      toggleExpand(tip.id);
                    }
                  }}
                >
                  {isHome
                    ? "Leggi di più"
                    : isExpanded
                    ? "Mostra meno"
                    : "Leggi di più"}
                </Button>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default TipsSection;
