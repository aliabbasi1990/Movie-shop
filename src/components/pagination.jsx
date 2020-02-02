import React, { Component } from "react";

class Pagination extends Component {
  createPage = props => {
    let pages = [];
    for (let i = 1; i <= this.props.pageCount; i++) {
      pages.push(
        <li
          key={i}
          onClick={() => this.props.handlePage(i, this.props.pageCount)}
          className={
            this.props.currentPage === i ? "active page-item" : "page-item"
          }
          aria-current="page"
        >
          <span className="page-link">{i}</span>
        </li>
      );
    }
    return pages;
  };
  render() {
    return (
      <nav aria-label="...">
        <ul className="pagination">
          <li
            onClick={() =>
              this.props.handlePage(
                this.props.currentPage - 1,
                this.props.pageCount
              )
            }
            className={
              this.props.currentPage === 1 ? "page-item disabled" : "page-item"
            }
          >
            <span className="page-link">Previous</span>
          </li>
          {this.createPage()}
          <li
            onClick={() =>
              this.props.handlePage(
                this.props.currentPage + 1,
                this.props.pageCount
              )
            }
            className={
              this.props.pageCount === this.props.currentPage
                ? "page-item disabled"
                : "page-item"
            }
          >
            <span className="page-link" href="#">
              Next
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
