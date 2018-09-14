import React, { Component } from "react";
import Auth from "../components/Auth";
import Leaderboard from "../components/Leaderboard";
import Utility from "../components/Utility";

class Board extends Component {
  state = {
    meta: {},
    sites: [],
    isOwner: false
  };

  componentDidMount() {
    const boardSlug = this.props.match.params.boardSlug;
    fetch(`${Utility.apiEndpoint}/boards/slug/${boardSlug}`, {
      headers: {
        Authorization: Auth.getToken()
      }
    })
      .then(res => res.json())
      .then(siteData => {
        let sites = this.calculateSiteProgress(siteData.sites);
        this.setState({ meta: siteData.meta });
        this.setState({ sites: sites });
        this.setState({ isOwner: siteData.isOwner });
      });
  }

  calculateSiteProgress(sites) {
    let scores = [];
    sites.forEach(currentSite => scores.push(currentSite.current_score));
    const scoreMin = Math.min(...scores);
    const scoreMax = Math.max(...scores);

    return sites.map(site => {
      let newSite = Object.assign({}, site);
      newSite.progress =
        ((site.current_score - scoreMax) * 100) / (scoreMin - scoreMax);
      return newSite;
    });
  }

  deleteSite = (siteId, boardId) => {
    const sites = this.state.sites;
    const deletedSite = sites.find(s => s.id === siteId);
    sites.splice(sites.indexOf(deletedSite), 1);
    this.setState({ sites });

    fetch(`${Utility.apiEndpoint}/boards/${boardId}/sites/${siteId}`, {
      method: 'DELETE',
      headers: {
        Authorization: Auth.getToken()
      }
    })
      .then(res => res.json())
      .then(r => {
        if(r.success) {

        }
      });

  }

  updateScores() {
    console.log(this.state.meta);

    fetch(`${Utility.apiEndpoint}/boards/${this.state.meta.id}/update`, {
      headers: {
        Authorization: Auth.getToken()
      }
    })
      .then(res => res.json())
      .then(r => {
        console.log(r);
      });
  }

  render() {
    return (
      <React.Fragment>
        <h2>{this.state.meta.name}</h2>
        <p className="app-lead-content">
          Ranking mobile speeds from around the world on a monthly basis. Click
          on a location for more local analysis.
        </p>
        {Auth.isUserAuthenticated() && (
            <button className="leaderboard-update-button button" onClick={() => this.updateScores()}>Update scores</button>
        )}
        <Leaderboard
          sites={this.state.sites}
          slug={this.props.match.params.boardSlug}
          isOwner={this.state.isOwner}
          deleteSite={this.deleteSite}
        />
      </React.Fragment>
    );
  }
}

export default Board;
