import React, { Component } from "react";

class AddBoardForm extends Component {
  nameRef = React.createRef();

  createBoard = async event => {
    event.preventDefault();
    const newBoard = {
      boardName: this.nameRef.current.value
    };
    await fetch("http://localhost:3001/boards/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBoard)
    })
      .then(res => res.json())
      .then(newBoard => {
        this.props.history.push(`/b/${newBoard.slug}`);
      });

    // console.log(newBoardRequest);
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
              />
            </div>
            <button type="submit" className="button">
              + Add Board
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddBoardForm;
