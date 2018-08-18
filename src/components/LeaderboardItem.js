import React from "react";

class LeaderboardItem extends React.Component {
  render() {
    const { display_name, current_score, progress, url } = this.props.details;
    let index = parseFloat(this.props.index) + 1;
    console.log(progress);
    return (
      <li className="leaderboard-item">
        <a
          href={url}
          className="leaderboard-item-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="leaderboard-item-content">
            <span className="leaderboard-item-link-position">{index}</span>
            <span className="leaderboard-item-link-name">{display_name}</span>
            <span className="leaderboard-item-link-score">{current_score}</span>
          </div>
          <div
            className="leaderboard-item-progress-bar"
            style={{ width: progress + "%", opacity: progress / 50 }}
          />
        </a>
      </li>
    );
  }
}

export default LeaderboardItem;
