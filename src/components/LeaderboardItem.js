import React, { Component } from "react";

class LeaderboardItem extends Component {
  render() {
    const {
      display_name,
      current_score,
      board_id,
      progress,
      url,
      id
    } = this.props.details;
    const isOwner = this.props.isOwner;
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
            {isOwner && (
              <button className="leaderboard-item-delete" onClick={() => this.props.deleteSite(id, board_id)}>x</button>
            )}
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
