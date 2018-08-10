import React, { Component } from "react";
import LeaderboardItem from "../components/LeaderboardItem";
import sampleItems from "../sample-items";

class Board extends Component {
  state = {
    items: {}
  };

  componentDidMount() {
    this.loadSampleItems();
  }

  loadSampleItems = () => {
    this.setState({ items: sampleItems });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Fastest Websites from US News National University Rankings</h2>
        <p className="app-lead-content">
          Ranking mobile speeds from around the world on a monthly basis. Click
          on a location for more local analysis.
        </p>
        <div className="leaderboard">
          <div className="leaderboard-table-headings">
            <span>Rank</span>
            <span>Name</span>
            <span>Score</span>
          </div>
          <ul className="leaderboard-list">
            {Object.keys(this.state.items).map(key => (
              <LeaderboardItem
                key={key}
                index={key}
                details={this.state.items[key]}
              />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
