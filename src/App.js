import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Board from "./pages/Board";
import AddBoardForm from "./components/AddBoardForm";
import AddSiteForm from "./components/AddSiteForm";
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
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
