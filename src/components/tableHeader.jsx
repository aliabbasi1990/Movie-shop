import React, { Component } from "react";
class TableHeader extends Component {
  raiseSort(sort) {
    let sortType;
    if (sort === this.props.sort) {
      sortType = this.props.sortType === "asc" ? "desc" : "asc";
    } else if (this.props.sort !== sort) {
      sortType = "asc";
    }
    this.props.handleSort(sort, sortType);
  }
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(sort => {
            return (
              <th key={sort.name} onClick={() => this.raiseSort(sort.name)}>
                {sort.label}
                {this.props.sort === sort.name && (
                  <i
                    className={
                      this.props.sortType === "asc"
                        ? "fa fa-chevron-down"
                        : "fa fa-chevron-up"
                    }
                  ></i>
                )}
              </th>
            );
          })}
          <th></th>
          <th></th>
        </tr>
      </thead>
    );
  }
}
export default TableHeader;
