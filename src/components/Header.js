import React, { Component } from "react";

class Header extends Component {
  render() {
    let userId = 0;

    if (this.props.user) {
      console.log("GOOGOGSDOOD");
      userId = this.props.user.id;
    }

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
                      <a className="app-nav-link" href="/sign-in">
                        Sign in {userId}
                      </a>
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

export default Header;
