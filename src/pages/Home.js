import React, { Component } from "react";
import BoardCardForm from "../components/BoardCard";
import Utility from "../components/Utility";

class Board extends Component {
  state = {
    boards: []
  };

  componentDidMount() {
    fetch(`${Utility.apiEndpoint}/boards`)
      .then(res => res.json())
      .then(boardData => {
        this.setState({ boards: boardData });
      });
  }

  render() {
    const isAuthenticated = this.props.authenticated;
    return (
      <React.Fragment>
        <p className="app-lead-content">
          This uses Lighthouse to measure web page load speed on pages from a
          variety industries and highlight the top ones.
        </p>
        <h2>Featured Leaderboards</h2>
        <ul className="featured-boards uk-grid">
          {Object.keys(this.state.boards).map(key => (
            <BoardCardForm
              key={key}
              index={key}
              details={this.state.boards[key]}
            />
          ))}
        </ul>
        {isAuthenticated ? (
          <p>
            <a href="/add/board">Add Board</a>
          </p>
        ) : (
          <p>
            <a href="/sign-in">Sign in</a>
          </p>
        )}
      </React.Fragment>
    );
  }
}

export default Board;
