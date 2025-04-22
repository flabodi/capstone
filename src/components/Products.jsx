import { Container, Card, Col, Row } from "react-bootstrap";
import Categories from "./Categories";
import ProductsList from "./ProductsList";

function Products() {
  return (
    <>
      <Container fluid className=" px-0 ">
        <div className="w-50  ps-3">
          <h1>I NOSTRI SPIRITI NOBILI</h1>
          <p className="imb-font">
            Immagina di preparare un Martini o un Daiquiri con un rum o gin di
            qualità. Il gusto fresco del lime, l'eleganza della bevanda, la
            sensazione di "pulito" che avverti mentre sorseggi il cocktail.
            Questo è il tipo di esperienza che dovresti cercare, non quella che
            ti lascia con la bocca amara e il mal di testa il giorno dopo.
          </p>
        </div>
        <div className="products-section pt-5 ">
          <Categories />

      
          <ProductsList />
        </div>
      </Container>
    </>
  );
}
export default Products;
