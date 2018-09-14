import React, { Component } from "react";
import Auth from "./Auth";
import Utility from "./Utility";

class AddBoardForm extends Component {
  nameRef = React.createRef();

  createBoard = async event => {
    event.preventDefault();
    const newBoard = {
      boardName: this.nameRef.current.value
    };
    await fetch(`${Utility.apiEndpoint}/boards/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: Auth.getToken(),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBoard)
    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(newBoard => {
        this.props.history.push(`/b/${newBoard.slug}`);
      });
  };

  render() {
    return (
      <div className="uk-grid">
        <div className="uk-width-medium-1-2">
          <h1>Create Board</h1>
          <form className="board-edit form" onSubmit={this.createBoard}>
            <div>
              <label htmlFor="edit-board-name" className="form-label">
                Name
              </label>
              <input
                name="name"
                id="edit-board-name"
                className="form-input"
                ref={this.nameRef}
                type="text"
                placeholder="Board name"
                required
              />
            </div>
            <button type="submit" className="button button-primary">
              + Add Board
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddBoardForm;
