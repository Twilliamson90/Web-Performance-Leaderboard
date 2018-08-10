import React, { Component } from "react";
import BoardCard from "../components/BoardCard";
import sampleBoards from "../sample-boards";

class Board extends Component {
  state = {
    boards: {}
  };

  componentDidMount() {
    this.loadSampleItems();
  }

  loadSampleItems = () => {
    this.setState({ boards: sampleBoards });
  };

  render() {
    return (
      <React.Fragment>
        <p className="app-lead-content">
          This uses Lighthouse to measure web page load speed on pages from a
          variety industries and highlight the top ones.
        </p>
        <h2>Featured Leaderboards</h2>
        <ul className="featured-boards uk-grid">
          {Object.keys(this.state.boards).map(key => (
            <BoardCard key={key} index={key} details={this.state.boards[key]} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Board;
