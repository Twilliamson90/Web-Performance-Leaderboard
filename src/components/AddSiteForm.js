import React, { Component } from "react";
import Auth from "./Auth";
import Utility from "./Utility";

class AddSiteForm extends Component {
  nameRef = React.createRef();
  urlRef = React.createRef();

  addSite = async event => {
    event.preventDefault();
    const boardSlug = this.props.match.params.boardId;
    const newSite = {
      displayName: this.nameRef.current.value,
      url: this.urlRef.current.value
    };
    const requestUrl = `${Utility.apiEndpoint}/boards/${boardSlug}/sites`;

    await fetch(requestUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: Auth.getToken(),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newSite)
    })
      .then(res => res.json())
      .then(newSite => {
        console.log(newSite);
        this.props.history.push(`/b/${boardSlug}`);
      });

    // console.log(newBoardRequest);
  };

  render() {
    return (
      <div className="uk-grid">
        <div className="uk-width-medium-1-2">
          <h1>Add Site</h1>
          <form className="site-edit form" onSubmit={this.addSite}>
            <div>
              <label htmlFor="edit-site-name" className="form-label" />
              <input
                name="name"
                id="edit-site-name"
                className="form-input"
                ref={this.nameRef}
                type="text"
                placeholder="Display name"
                required
              />
            </div>
            <div>
              <label htmlFor="edit-site-url" className="form-label" />
              <input
                name="name"
                id="edit-site-url"
                className="form-input"
                ref={this.urlRef}
                type="url"
                placeholder="URL"
                required
              />
            </div>
            <button type="submit" className="button">
              + Add Site
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddSiteForm;
