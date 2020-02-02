import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          There are {this.props.moviesCount} movies in the database.
        </span>
      </nav>
    );
  }
}

export default Navbar;
