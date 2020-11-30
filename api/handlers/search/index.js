function searchMovies(title, movies) {
  const lowerCaseTitle = title.toLowerCase();
  const result = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(lowerCaseTitle)
  );
  return result;
}

module.exports = { searchMovies };
