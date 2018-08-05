import React from "react";

const Header = props => (
  <header className="app-header">
    <div className="container">
      <div className="uk-grid">
        <div className="uk-width-1-1">
          <h1 className="app-title">{props.appTitle}</h1>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
