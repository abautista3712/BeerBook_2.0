import axios from "axios";

// export default getBeers;
export default {
  getBeers: function () {
    return axios.get(
      "https://obscure-coast-59544.herokuapp.com/http://api.brewerydb.com/v2/beers/?key=87c960285bab5e70410f78d6662f74ad"
    );
  },

  getBeersLocal: function (query) {
    return axios.get("/api/beers", { params: { q: query } });
  },

  getUser: function () {
    return axios.get("/api/user");
  },

  getCurrentUserData: function (query) {
    // console.log("test getCurrentUserData");
    return axios.get("/api/userdata", { params: { q: query } }); //please do not touch this
  },

  signup: function (userData) {
    return axios.post("/api/register", userData);
  },

  login: function (userData) {
    return axios.post("/api/login", userData);
  },

  addBeer: function (userData) {
    return axios.put(`/api/addBeer/${userData.name}`, userData);
  },

  // logOut: function () {
  //   return axios.get("/api/logout");
  // },

  addBrowsedBeer: function (userData) {
    // console.log("test addBrowsedBeer");
    // console.log(userData);
    return axios.put(`/api/add_browsed_beer/${userData.username}`, userData);
  },

  // getUser: function(){
  //   return axios.get("/api/user")
  // }
};

// export default {
//   getBeers: function(query) {
//     return axios.get("/api/beers", { params: { q: query } });
//   }
// };
