import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/feauters/products/productsSlice";

export default function RecipeSection() {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status === "loading") return <p>Caricamento…</p>;
  if (status === "failed") return <p>Errore: {error}</p>;

  // **Prendo solo i primi 2 prodotti** indipendentemente da quanti ne ritorna l'API
  const primiDue = products.slice(0, 2);

  return (
    <Container fluid className="py-5   recipe-section">
      <div className="w-md-50 mb-3 recipe-title text-sm-center">
        <h1>
          NOBILI RICETTE <br /> IN PILLOLE
        </h1>
        <h2 >  </h2>
        <h3>
          (SE VUOI MISCELARE A CASA, MA <br /> PROVA ANCHE LA NOSTRA PERCHè è{" "}
          <br /> BUONISSSIMO E NON HAI SBATTI)
        </h3>
      </div>
      <Row>
        {primiDue.map((p) => {
          // split degli ingredienti
          const ingredients = p.ingedients.split(",").map((i) => i.trim());

          return (
            <Col xs={12} md={6} key={p.id} className="mb-4 imb-font">
              <h4 className="mt-sm-5 title-recipe text-sm-center">{p.name}</h4>
              {p.story && (
                <div className="space-recipe">
                  <p>{p.story}</p>
                </div>
              )}
              <h6>INGREDIENTI:</h6>
              <ul className="recipe-list">
                {ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
              {p.gallery_product1 && (
                <img
                  src={p.gallery_product1}
                  alt={`${p.name} gallery`}
                  className="img-fluid mt-2 h-50 w-100 recipe-image  mb-5"
                />
              )}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
