import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./index.css";
import API from "../../utils/API";

export const NavigationBar = () => {
  const [state, setState] = useState({
    name: "",
  });
  // useEffect(() => {
  //   API.getCurrentUserData().then((user) => {
  //     console.log('user', user)
  //     setState({
  //       name: user.data.name,
  //     })
  //   })
  // }, [])
  const logOut = () => {
    API.logOut().then(() => {
      window.location.href = "/";
    });
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        className="navPaddingMobile"
        bg="light"
        expand="lg"
      >
        <Navbar.Brand href="/userprofile" className="mx-1">
          <img
            src="./assets/beerIcon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="beerIcon logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="/userprofile">The Beer Book</Navbar.Brand>
        <Nav.Link href="/userprofile" className="navIconPadding">
          <i className="fas fa-house-user mx-1"></i>
          <Navbar.Text className="navTextMobile">User Profile</Navbar.Text>
        </Nav.Link>
        <Nav.Link href="/browse" className="navIconPadding">
          <i className="fas fa-beer mx-1"></i>
          <Navbar.Text className="navTextMobile">Browse Beers</Navbar.Text>
        </Nav.Link>
        <Nav.Link href="/custom" className="navIconPadding">
          <i className="fas fa-plus-circle mx-1"></i>
          <Navbar.Text className="navTextMobile">Add Custom Beer</Navbar.Text>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="ml-auto">
          {state.name ? (
            <div>
              <h3>Welcome {state.name}</h3>
              <Nav.Link href="#" onClick={logOut}>
                Log Out
              </Nav.Link>
            </div>
          ) : (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                {/* <Nav.Link href="/signin">
                  <Navbar.Text>Sign In</Navbar.Text>
                </Nav.Link>
                <Nav.Link href="/register">
                  <Navbar.Text>Register</Navbar.Text>
                </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          )}
        </div>
      </Navbar>
    </div>
  );
};
