import React from "react";

class BoardCard extends React.Component {
  render() {
    const { name } = this.props.details;
    return (
      <li className="uk-width-medium-1-4">
        <a
          href="/board/US-News-National-University-XPS9kFda"
          className="board-card"
        >
          {name}
        </a>
        <span />
      </li>
    );
  }
}

export default BoardCard;
