import React, { Component } from "react";
import Utility from "../components/Utility";

class SignInForm extends Component {
  emailRef = React.createRef();
  passwordRef = React.createRef();

  signIn = async event => {
    event.preventDefault();
    const user = {
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value
    };
    await fetch(`${Utility.apiEndpoint}/sign-in`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(signedInUser => {
        console.log(signedInUser);
        // this.props.rememberUser(signedInUser.user);
        // localStorage.setItem("token", signedInUser.token);
        Utility.setToken(signedInUser.token);
        this.props.history.push("/user/" + signedInUser.user.id);
      });

    // console.log(newBoardRequest);
  };

  render() {
    return (
      <div className="uk-grid">
        <div className="uk-width-medium-1-2">
          <form className="sign-up-edit form" onSubmit={this.signIn}>
            <h1>Sign in</h1>
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
              Sign in
            </button>
          </form>
          <p>
            Don't have an account? <a href="/sign-up">Sign up</a>
          </p>
        </div>
      </div>
    );
  }
}

export default SignInForm;
