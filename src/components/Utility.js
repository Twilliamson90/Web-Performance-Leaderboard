import { Component } from "react";

class Utility extends Component {
  static get apiEndpoint() {
    return "http://localhost:3001/api";
  }
}

export default Utility;
