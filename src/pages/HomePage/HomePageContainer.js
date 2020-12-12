import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}
export default HomePage;
