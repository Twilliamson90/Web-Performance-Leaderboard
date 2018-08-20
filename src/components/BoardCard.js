import React from "react";

class BoardCard extends React.Component {
  render() {
    const { name, slug } = this.props.details;
    return (
      <li className="uk-width-medium-1-4">
        <a href={"/b/" + slug} className="board-card">
          {name}
        </a>
        <span />
      </li>
    );
  }
}

export default BoardCard;
