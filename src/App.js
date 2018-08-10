import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Board from "./pages/Board";
import sampleBoards from "./sample-boards";

class App extends Component {
  state = {
    boards: {}
  };

  componentDidMount() {
    this.loadSampleBoards();
  }

  loadSampleBoards = () => {
    this.setState({ boards: sampleBoards });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Header appTitle="Web Performance Index" />
          <main id="main-content" className="container">
            <Route path="/" exact component={Home} />
            <Route path="/board/:boardId" component={Board} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
