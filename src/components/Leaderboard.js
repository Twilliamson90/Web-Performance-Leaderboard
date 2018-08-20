import React, { Component } from "react";
import LeaderboardItem from "../components/LeaderboardItem";

class Leaderboard extends Component {
  render() {
    console.log(this);
    return (
      <div className="leaderboard">
        <div className="leaderboard-table-headings">
          <span>Rank</span>
          <span>Name</span>
          <span>Score</span>
        </div>
        <ul className="leaderboard-list">
          {Object.keys(this.props.sites).map(key => (
            <LeaderboardItem
              key={key}
              index={key}
              details={this.props.sites[key]}
            />
          ))}
          <li className="leaderboard-item">
            <a
              href={this.props.slug + "/add/site"}
              className="leaderboard-item-link leaderboard-item-link-add"
            >
              <div className="leaderboard-item-content">
                <span className="text-center">+ Add site</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Leaderboard;