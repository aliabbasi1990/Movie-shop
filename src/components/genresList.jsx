import React, { Component } from "react";

class Genres extends Component {
  render() {
    return (
      <div className="list-group">
        <button
          type="button"
          className={
            this.props.genre === "All Genres"
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => this.props.filterGenre("All Genres")}
        >
          All Genres
        </button>
        {this.props.genres.map(genre => (
          <button
            key={genre}
            type="button"
            className={
              this.props.genre === genre
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            onClick={() => this.props.filterGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    );
  }
}

export default Genres;
