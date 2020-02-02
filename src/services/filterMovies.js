var _ = require("lodash");
export function filterMovies(movies, genre, sort, sortType, currentPage, moviesPerPage) {
  var selected;
  var startPoint = (currentPage - 1) * moviesPerPage;
  var endPoint = currentPage * moviesPerPage;
  if (genre === "All Genres") {
    selected = _.orderBy(movies, sort, sortType);
  } else {
    selected = movies.filter(movie => movie.genre.name === genre);
    selected = _.orderBy(selected, [sort], [sortType]);
  }
  var moviesLength = selected.length;
  var pageCount = Math.ceil(selected.length / moviesPerPage);
  selected = _.slice(selected, startPoint, endPoint);
  var selectedLength = selected.length;

  return { selected, moviesLength, pageCount, selectedLength };
}
