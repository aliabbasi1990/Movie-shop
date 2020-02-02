import React, { Component } from "react";
import TableHeader from "./tableHeader.jsx";
import TableBody from "./tableBody.jsx";

class Table extends Component {
  render() {
    const {
      sort,
      sorts,
      sortType,
      data,
      handleSort,
      columns,
      handleLike,
      handleDelete,
      selectedLength
    } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={columns}
          sort={sort}
          sortType={sortType}
          handleSort={handleSort}
        />
        <TableBody
          data={data}
          columns={columns}
          handleLike={handleLike}
          handleDelete={handleDelete}
          selectedLength={selectedLength}
        />
      </table>
    );
  }
}

export default Table;
