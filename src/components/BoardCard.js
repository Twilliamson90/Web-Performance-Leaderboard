import React from "react";

class BoardCard extends React.Component {
  render() {
    console.log(this.props);
    const { name, slug } = this.props.details;
    return (
      <li className="uk-width-medium-1-4">
        <a href={"/board/" + slug} className="board-card">
          {name}
        </a>
        <span />
      </li>
    );
  }
}

export default BoardCard;
