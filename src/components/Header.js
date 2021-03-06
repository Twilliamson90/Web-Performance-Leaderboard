import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Auth from "./Auth";

class Header extends Component {
  logoutClick = async () => {
    await Auth.deauthenticateUser();
    this.props.userSignOut();
    this.props.history.push("/");
  };

  render() {
    const isAuthenticated = this.props.authenticated;

    return (
      <header className="app-header">
        <div className="container">
          <div className="uk-grid">
            <div className="uk-width-1-1">
              <div className="app-header-grid">
                <a href="/" className="app-masthead">
                  <img src="/fire.svg" className="app-logo" alt="Flame" />
                  <span className="app-title">{this.props.appTitle}</span>
                </a>
                <nav className="app-nav">
                  <ul className="app-nav-list">
                    <li className="app-nav-item">
                      {isAuthenticated ? (
                        <button
                          className="app-nav-link"
                          onClick={this.logoutClick}
                        >
                          Logout
                        </button>
                      ) : (
                        <a className="app-nav-link" href="/sign-in">
                          Sign in
                        </a>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const HeaderWithRouter = withRouter(Header);

export default HeaderWithRouter;
