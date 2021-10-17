import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutCompany from "./components/Home/AboutCompany/AboutCompany";
import Contacts from "./components/Home/Contacts/Contacts";
import Home from "./components/Home/Home/Home";
import Vehicles from "./components/Home/Vehicles/Vehicles";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./components/Shared/Login/Login";
import Navbar from "./components/Shared/Navbar/Navbar";
import NotFound from "./components/Shared/NotFound/NotFound";


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <AboutCompany></AboutCompany>
        </Route>
        <Route path="/vehicles">
          <Vehicles></Vehicles>
        </Route>
        <Route path="/contacts">
          <Contacts></Contacts>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
