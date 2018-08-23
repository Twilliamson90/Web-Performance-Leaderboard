import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Profile from "./pages/Profile";
import AddBoardForm from "./components/AddBoardForm";
import AddSiteForm from "./components/AddSiteForm";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import NotFound from "./components/NotFound";

class App extends Component {
  state = {
    boards: {}
  };

  componentDidMount() {
    fetch("http://localhost:3001/boards")
      .then(res => res.json())
      .then(boardData => {
        //console.log(boardData);
      });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header appTitle="Web Performance Index" />
          <main id="main-content" className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/add/board" exact component={AddBoardForm} />
              <Route path="/b/:boardSlug" exact component={Board} />
              <Route
                path="/b/:boardId/add/site"
                exact
                component={AddSiteForm}
              />
              <Route path="/user/:id" exact component={Profile} />
              <Route path="/sign-in" exact component={SignInForm} />
              <Route path="/sign-up" exact component={SignUpForm} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
