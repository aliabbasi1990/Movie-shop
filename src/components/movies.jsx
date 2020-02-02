import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService.js";
import { filterMovies } from "../services/filterMovies.js";
import Navbar from "./navbar.jsx";
import MoviesTable from "./moviesTable.jsx";
import Genres from "./genresList.jsx";
import Pagination from "./pagination.jsx";
var _ = require("lodash");

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      genres: [],
      genre: "All Genres",
      sorts: [],
      sort: "title",
      sortType: "asc",
      currentPage: 1,
      moviesPerPage: 5
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    const genres = _.uniqBy(getMovies(), function(movie) {
      return movie.genre.name;
    }).map(movie => movie.genre.name);

    this.setState({ genres });
  }

  handleDelete(deleted, moviesLength) {
    const movies = this.state.movies.filter(movie => movie !== deleted);
    if (moviesLength <= 1) {
      var currentPage =
        this.state.currentPage === 1
          ? this.state.currentPage
          : this.state.currentPage - 1;
    } else {
      currentPage = this.state.currentPage;
    }
    this.setState({ movies, currentPage });
  }

  handleLike(movieId) {
    let movies = this.state.movies;
    movies = movies.filter(movie => {
      if (movie._id === movieId) {
        movie.liked = !movie.liked;
      }
      return movie;
    });
    this.setState({ movies });
  }

  handleGenre(genre) {
    this.setState({
      genre,
      currentPage: 1
    });
  }

  handlePage(currentPage, pageCount) {
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > pageCount) {
      currentPage = pageCount;
    }
    this.setState({ currentPage });
  }

  handleSort(sort, sortType) {
    this.setState({ sort, sortType, currentPage: 1 });
  }

  render() {
    const {
      movies,
      genre,
      genres,
      sort,
      sortType,
      currentPage,
      moviesPerPage
    } = this.state;
    const displayMovies = filterMovies(
      movies,
      genre,
      sort,
      sortType,
      currentPage,
      moviesPerPage
    );
    return (
      <React.Fragment>
        <Navbar moviesCount={displayMovies.moviesLength} />
        <main className="container mt-5">
          <div className="row">
            <div className="col-4">
              <Genres
                genres={genres}
                genre={genre}
                filterGenre={this.handleGenre}
              />
            </div>
            <div className="col-8">
              {displayMovies.moviesLength !== 0 ? (
                <MoviesTable
                  movies={displayMovies.selected}
                  selectedLength={displayMovies.selectedLength}
                  sort={sort}
                  currentPage={currentPage}
                  sortType={sortType}
                  handleLike={this.handleLike}
                  handleDelete={this.handleDelete}
                  handleSort={this.handleSort}
                />
              ) : (
                <h3>
                  There are no
                  {genre === "All Genres" ? " movies" : ` ${genre} movies`} in
                  the database
                </h3>
              )}
            </div>
          </div>

          {movies.length > moviesPerPage && (
            <Pagination
              currentPage={currentPage}
              pageCount={displayMovies.pageCount}
              handlePage={this.handlePage}
            />
          )}
        </main>
      </React.Fragment>
    );
  }
}

export default Movies;
