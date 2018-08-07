import React from "react";

const Header = props => (
  <header className="app-header">
    <div className="container">
      <div className="uk-grid">
        <div className="uk-width-1-1">
          <a href="/" className="app-masthead">
            <img src="/fire.svg" className="app-logo" />
            <span className="app-title">{props.appTitle}</span>
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
