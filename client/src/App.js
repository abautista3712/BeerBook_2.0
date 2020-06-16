import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import UserProfile from "./pages/UserProfile";
import BrowseBeers from "./pages/BrowseBeers";
import CustomBeer from "./pages/CustomBeer";
import "./app.css";
// import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div className="wrapper">
      <NavigationBar />
      {/* <Jumbotron /> */}
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={SignIn} />
          <Route exact path="/browse" component={BrowseBeers} />
          {/* <Route exact path="/addabeer" component={AddABeer} /> */}
          {/* Home route temporarily will route to UserProfile until Auth is set up */}
          <Route exact path="/userprofile" component={UserProfile}> 
          {/* <div class="lds-circle"><div></div></div> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
