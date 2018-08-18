import React, { Component } from "react";
import BoardCard from "../components/BoardCard";

class Board extends Component {
  state = {
    boards: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/boards")
      .then(res => res.json())
      .then(boardData => {
        this.setState({ boards: boardData });
      });
  }

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
