import { Component } from "react";

class Utility extends Component {
  static get apiEndpoint() {
    return "http://localhost:3001/api";
  }

  static setToken(token) {
    localStorage.setItem("token", token);
    return null;
  }

  static getToken() {
    return localStorage.getItem("token");
  }
}

export default Utility;
