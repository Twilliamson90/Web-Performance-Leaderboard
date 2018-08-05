import React, { Component } from "react";
import Header from "./Header";
import BoardCard from "./BoardCard";
import sampleBoards from "../sample-boards";

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
      <div className="app">
        <Header appTitle="Web Performance Index" />
        <main id="main-content" className="container">
          <p className="app-lead-content">
            This uses WebPageTest.org to measure web page load speed on pages
            from a variety industries and highlight the top ones.
          </p>
          <h2>Featured Leaderboards</h2>
          <ul className="featured-boards uk-grid">
            {Object.keys(this.state.boards).map(key => (
              <BoardCard
                key={key}
                index={key}
                details={this.state.boards[key]}
              />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
