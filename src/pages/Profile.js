import React, { Component } from "react";
import Leaderboard from "../components/Leaderboard";

class Profile extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    const userId = this.props.match.params.id;
    fetch(`http://localhost:3001/user/${userId}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(userData => {
        this.setState({ user: userData.user });
        console.log(userData);
      });
  }

  render() {
    return (
      <React.Fragment>
        <p>id: {this.state.user.id}</p>
        <p>display name: {this.state.user.display_name}</p>
        <p>email: {this.state.user.email}</p>
      </React.Fragment>
    );
  }
}

export default Profile;
