import React, { Component } from "react";
import queryString from "query-string";
class MovieDetail extends Component {
  render() {
    const handleBack = () => {
      this.props.history.push("/movies");
    };
    const { name, id } = queryString.parse(this.props.location.search);
    return (
      <React.Fragment>
        <h1>{`${name}  ${id}`}</h1>
        <button className="btn btn-primary btn-md" onClick={handleBack}>
          Back to movies
        </button>
      </React.Fragment>
    );
  }
}

export default MovieDetail;
