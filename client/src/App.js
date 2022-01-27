import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { NavigationBar } from "./components/NavigationBar";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import UserProfile from "./pages/UserProfile";
import BrowseBeers from "./pages/BrowseBeers";
import CustomBeer from "./pages/CustomBeer";
import PrivateRoute from "./utils/auth/PrivateRoute";
import AuthContext from "./utils/auth/AuthContext";
// import API from "../src/utils/API";
import "./app.css";

function App() {
  // const SignIn = (props) => {
  //   const [state, setState] = useState({
  //     username: "",
  //     password: "",
  //   });
  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setState({
  //       ...state,
  //       [name]: value,
  //     });
  //   };
  //   const handleSubmit = (event) => {
  //     console.log("state.username", state.username);
  //     console.log("state.password", state.password);
  //     const userData = {
  //       username: state.username,
  //       password: state.password,
  //     };
  //     API.login(userData)
  //       .then((results) => {
  //         console.log("log in success!");
  //         console.log(results);
  //         // props.history.push("/userprofile");
  //         // window.location.href = "/userprofile";
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  // const [isAuthenticated, setIsAuthenticated] = useState();

  // useEffect(() => {
  //   checkAuth();
  // }, []);

  // const checkAuth = () => setIsAuthenticated(true);

  return (
    <div className="wrapper">
      {/* <AuthContext.Provider value={{ isAuthenticated: true }}> */}
      {/* <NavigationBar /> */}
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route
            exact
            path="/signin"
            render={(props) => <SignIn {...props} />}
          />
          <Route exact path="/" component={BrowseBeers} />
          <Route exact path="/browse" component={BrowseBeers} />
          <Route exact path="/custom" component={CustomBeer} />
          <Route exact path="/userprofile" component={UserProfile} />
        </Switch>
      </Router>
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default App;
