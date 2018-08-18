import React, { Component } from "react";
import LeaderboardItem from "../components/LeaderboardItem";

class Board extends Component {
  state = {
    meta: {},
    sites: []
  };

  componentDidMount() {
    const boardSlug = this.props.match.params.boardId;
    fetch("http://localhost:3001/boards/slug/" + boardSlug)
      .then(res => res.json())
      .then(siteData => {
        let sites = this.calculateProgress(siteData.sites);
        this.setState({ meta: siteData.meta });
        this.setState({ sites: sites });
      });
  }

  calculateProgress(sites) {
    let scores = [];

    sites.forEach(currentSite => {
      scores.push(currentSite.current_score);
    });

    const scoreMin = Math.min(...scores);
    const scoreMax = Math.max(...scores);

    let sitesWithProgress = sites.map(site => {
      let newSite = Object.assign({}, site);
      newSite.progress =
        ((site.current_score - scoreMax) * 100) / (scoreMin - scoreMax);
      console.log(newSite);
      return newSite;
    });

    console.log(sitesWithProgress);

    // for (let i = 0; i < sites.length; i++) {
    //   scores.push(sites[i].current_score);
    // }
    // console.log(scores);
    return sitesWithProgress;
  }

  render() {
    return (
      <React.Fragment>
        <h2>{this.state.meta.name}</h2>
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
            {Object.keys(this.state.sites).map(key => (
              <LeaderboardItem
                key={key}
                index={key}
                details={this.state.sites[key]}
              />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
