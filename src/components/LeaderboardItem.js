import React, { Component } from "react";

class LeaderboardItem extends Component {
  render() {
    const { display_name, current_score, progress, url } = this.props.details;
    let index = parseFloat(this.props.index) + 1;
    return (
      <li className="leaderboard-item">
        <div className="leaderboard-item-container">
          <div className="leaderboard-item-content">
            <span className="leaderboard-item-link-position">{index}</span>
            <span className="leaderboard-item-link-name">
              {display_name}
              <a
                href={url}
                className="leaderboard-item-link-url"
                target="_blank"
                rel="noopener"
              >
                {url}
              </a>
            </span>
            <span className="leaderboard-item-link-score">{current_score}</span>
          </div>
          <div
            className="leaderboard-item-progress-bar"
            style={{ width: progress + "%", opacity: progress / 50 }}
          />
        </div>
      </li>
    );
  }
}

export default LeaderboardItem;
