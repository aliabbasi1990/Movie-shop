import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

class TableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.data.map(item => (
          <tr>
            {this.props.columns.map(column => (
              <td>
                {column.name === "title" ? (
                  <Link to={`/movies?id=${item._id}&name=${item.title}`}>
                    {_.get(item, column.name)}
                  </Link>
                ) : (
                  _.get(item, column.name)
                )}
              </td>
            ))}
            <td>
              <i
                className={item.liked ? "fa fa-heart" : "fa fa-heart-o"}
                onClick={() => this.props.handleLike(item._id)}
              ></i>
            </td>
            <td>
              <button
                onClick={() =>
                  this.props.handleDelete(item, this.props.selectedLength)
                }
                className="btn btn-danger btn-small m-2"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
