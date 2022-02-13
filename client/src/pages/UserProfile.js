import React, { useState } from "react";
import { useEffect } from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import API from "../utils/API.js";
import BeerCard from "../components/BeerCard";
import "./UserProfile.css";
import { NavigationBar } from "../components/NavigationBar";

function UserProfile() {
  const [beers, setBeers] = useState({ data: [] });

  const currentUser = "Alice";

  // For API -> Card Usage:
  useEffect(() => {
    API.getCurrentUserData(currentUser)
      // API.getUser()
      .then((res) => {
        setBeers(res.data[0].beerCollection);
        console.log("this is res: " + JSON.stringify(res.data[0]));
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("useEffect has been called");
  }, []);

  return (
    <div>
      <NavigationBar />
      <Jumbotron fluid className="jumboUserPage mb-1">
        <Container className="banner mx-0 px-0">
          <Row>
            <Col className="jumboTitle">My Beer Collection</Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container className="">
        {!beers.length ? (
          <h1 className="text-center">No Beers to Display</h1>
        ) : (
          <Row>
            {beers.slice(0, 12).map((beer, index) => {
              return BeerCard(beer);
            })}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default UserProfile;
