import { CardGroup, Card } from "react-bootstrap";

function Categories() {
  return (
    <>
      <h2 className="text-center my-4">Categorie</h2>
      <CardGroup className="gap-4 px-4">
        <Card className="text-white rounded-4 overflow-hidden ">
          <Card.Img
            src="https://plus.unsplash.com/premium_photo-1691939610599-a9a3dde8e810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJpbmt8ZW58MHx8MHx8fDA%3D"
            alt="Cocktail classici"
          />
          <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-25">
            <Card.Title className="fs-4 fw-bold">Cocktail Classici</Card.Title>
          </Card.ImgOverlay>
        </Card>

        <Card className="text-white rounded-4 overflow-hidden">
          <Card.Img
            src="https://plus.unsplash.com/premium_photo-1691939610599-a9a3dde8e810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJpbmt8ZW58MHx8MHx8fDA%3D"
            alt="Ready to Drink"
          />
          <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-25">
            <Card.Title className="fs-4 fw-bold">Ready to Drink</Card.Title>
          </Card.ImgOverlay>
        </Card>

        <Card className="text-white rounded-4 overflow-hidden">
          <Card.Img
            src="https://plus.unsplash.com/premium_photo-1691939610599-a9a3dde8e810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJpbmt8ZW58MHx8MHx8fDA%3D"
            alt="Analcolici"
          />
          <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-25">
            <Card.Title className="fs-4 fw-bold">Analcolici</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </CardGroup>
    </>
  );
}

export default Categories;
