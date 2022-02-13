import React from "react";
import API from "../../utils/API";
import { Col, Card } from "react-bootstrap";
// import ToastsMessage from "../ToastsMessage";

function BrowseBeerCard(beer) {
  var short_desc = beer.style.description.split(".")[0] + "."; //grabs only first sentence from description

  // var current_user = "test";

  var converted_beer = {
    picture: "",
    name: beer.name,
    beerStyle: beer.style.name,
    abv: beer.abv,
    beerCategory: beer.style.category.name,
    shortDesc: short_desc,
  };

  const handlePlusButton = (event) => {
    event.preventDefault();
    console.log("test handlePlusButton");
    // API.getUser().then((res) => {
    //   console.log(res);
    //   let user = res.data[0];
    //   // console.log(user);
    //   // console.log(converted_beer);
    //   user.beerCollection.push(converted_beer);
    //   API.addBeer(user).catch((err) => console.log(err));
    // });
    //update the current user with the new beer

    const current_user = "Alice";
    API.getCurrentUserData(current_user).then((res) => {
      console.log(res.data[0]);
      var updated_user_data = res.data[0];
      updated_user_data.beerCollection.push(converted_beer);
      API.addBrowsedBeer(updated_user_data).catch((err) => console.log(err));
    });
  };

  return (
    <Col xs={6} sm={4} md={3} lg={2} xl={2} className="my-1 px-0">
      <Card className="cardHeight">
        <Card className="cardHeight cardColor">
          <Card.Title className="ml-auto">
            <h4>
              <i
                className="fas fa-plus-circle mx-1"
                onClick={handlePlusButton} //, <ToastsMessage />
              />
            </h4>
          </Card.Title>
          <Card.Img
            variant="top"
            src="./assets/pixelMug.jpg"
            className="cardImage mx-auto"
          />
          <Card.Body>
            <Card.Title className="text-center">
              {converted_beer.name}
            </Card.Title>
            <Card.Title className="subText">
              {converted_beer.beerStyle} | {converted_beer.abv}% ABV
            </Card.Title>
            <Card.Text className="subText">
              {converted_beer.beerCategory}
            </Card.Text>
            <Card.Text>Description: {converted_beer.shortDesc}</Card.Text>
          </Card.Body>
        </Card>
      </Card>
    </Col>
  );
}

export default BrowseBeerCard;
