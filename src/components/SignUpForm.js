import React, { Component } from "react";
import Utility from "./Utility";

class SignUpForm extends Component {
  displayNameRef = React.createRef();
  emailRef = React.createRef();
  passwordRef = React.createRef();

  signUp = async event => {
    event.preventDefault();
    const user = {
      display_name: this.displayNameRef.current.value,
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value
    };
    await fetch(`${Utility.apiEndpoint}/sign-up`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(newAccount => {
        console.log(newAccount);
        localStorage.setItem("token", newAccount.token);
        this.props.history.push("/user/" + newAccount.user.insertId);
      });

    // console.log(newBoardRequest);
  };

  render() {
    return (
      <div className="uk-grid">
        <div className="uk-width-medium-1-2">
          <form className="sign-up-edit form" onSubmit={this.signUp}>
            <h1>Create account</h1>
            <div>
              <label htmlFor="edit-display-name" className="form-label">
                Display Name
              </label>
              <input
                name="display-name"
                id="edit-display-name"
                className="form-input"
                ref={this.displayNameRef}
                type="text"
                placeholder=""
                required
              />
            </div>
            <div>
              <label htmlFor="edit-email" className="form-label">
                Email
              </label>
              <input
                name="email"
                id="edit-email"
                className="form-input"
                ref={this.emailRef}
                type="email"
                placeholder=""
                required
              />
            </div>
            <div>
              <label htmlFor="edit-password" className="form-label">
                Password
              </label>
              <input
                name="password"
                id="edit-password"
                className="form-input"
                ref={this.passwordRef}
                type="password"
                required
              />
            </div>
            <button type="submit" className="button button-primary">
              + Create Account
            </button>
          </form>
          <p>
            Already have an account? <a href="/sign-in">Sign in</a>
          </p>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
