import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import API from "../utils/API.js";
import "./BrowseBeers.css";

function BrowseBeers() {
  // useEffect(() => {
  //   API.getBeers().then((res) => {
  //     console.log(res);
  //   });
  //   console.log("useEffect has been called");
  // }, []);

  return (
    <Container>
      <h1>Browse Beer</h1>
      <Row>
        <Col>
          <div className="beerContainer">
            {[1, 2, 3, 4, 5].map((Beer) => {
              return (
                <Card>
                  {/* Information below will be populated dynamically once we get the API working */}
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Name of Beer</Card.Title>
                    <Card.Text>
                      <ul>
                        <li>Beer Stlye</li>
                        <li>ABV</li>
                        <li>Excerpt of Description</li>
                        <li>Category</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BrowseBeers;
