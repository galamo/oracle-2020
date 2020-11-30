function deleteMovie(title, movies) {
  const lowerCaseTitle = title.toLowerCase();
  const item = movies.findIndex((movie) =>
    movie.Title.toLowerCase().includes(lowerCaseTitle)
  );
  movies.splice(item, 1);
  return result;
}

module.exports = { searchMovies };
