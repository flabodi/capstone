import { Container, Card, Col, Row } from "react-bootstrap";
import Categories from "./Categories";
import ProductsList from "./ProductsList";

function Products () { 

    return (
    
    <>
 
    <Container fluid className="mx-3 mb-4 ">
        <Categories/>
       
        <h2 className="mt-5 mb-3">Prodotti</h2>
       <ProductsList/>
      </Container>
    </>
    
)
}
export default Products