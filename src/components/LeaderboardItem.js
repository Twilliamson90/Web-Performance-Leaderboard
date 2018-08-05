import React from "react";

class LeaderboardItem extends React.Component {
  render() {
    const { name, progress, score } = this.props.details;
    return (
      <li className="leaderboard-item">
        <a href="#/" className="leaderboard-item-link">
          <div className="leaderboard-item-content">
            <span className="leaderboard-item-link-position">
              {this.props.index}
            </span>
            <span className="leaderboard-item-link-name">{name}</span>
            <span className="leaderboard-item-link-score">{score}</span>
          </div>
          <div
            className="leaderboard-item-progress-bar"
            style={{ width: progress + "%", opacity: progress / 75 }}
          />
        </a>
      </li>
    );
  }
}

export default LeaderboardItem;
