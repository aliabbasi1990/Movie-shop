import React, { Component } from "react";
import Table from "./table.jsx";

class MoviesTable extends Component {
  render() {
    const columns = [
      { name: "title", label: "Title" },
      { name: "genre.name", label: "Genre" },
      { name: "numberInStock", label: "Stock" },
      { name: "dailyRentalRate", label: "Rate" }
    ];

    return (
      <Table
        sort={this.props.sort}
        sortType={this.props.sortType}
        handleSort={this.props.handleSort}
        data={this.props.movies}
        columns={columns}
        handleLike={this.props.handleLike}
        handleDelete={this.props.handleDelete}
        selectedLength={this.props.selectedLength}
      />
    );
  }
}
export default MoviesTable;
