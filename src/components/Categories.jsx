// src/components/Categories.js
import { useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/feauters/categories/categoriesSlice";
import { setSelectedCategory } from "../redux/feauters/categories/filtersSlice";

function Categories() {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector((state) => state.categories);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center my-4">
        <Spinner animation="border" />
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center my-4">
        <h3>Error: {error}</h3>
      </div>
    );
  }

  // Funzione per gestire il click su una categoria
  const handleCategoryClick = (categoryId) => {
    dispatch(setSelectedCategory(categoryId));
  };

  return (
    <Container className="my-4">
      <h2 className="text-center my-4">Categorie</h2>
      <Row className="g-4">
     

        {categories && categories.length > 0 ? (
          categories.map((cat) => (
            <Col md={4} key={cat.id}>
              <Card
                className="text-white rounded-4 overflow-hidden cursor-pointer"
                onClick={() => handleCategoryClick(cat.id)}
              >
                {/* Utilizza l’immagine per la categoria se disponibile */}
                <Card.Img src={cat.cover_categories} alt={cat.category} />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-25">
                  <Card.Title className="fs-4 fw-bold">
                    {cat.category}
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <h5>No categories available.</h5>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Categories;
