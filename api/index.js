console.log("Oracle API");
const express = require("express");
const { movies } = require("./data/movies");
const { searchMovies } = require("./handlers/search");
const app = express();
console.log(movies);
// entry point
// localhost:3500/movies
app.get("/movies", (req, res, next) => {
  res.json(movies);
});

app.get("/movies/search", (req, res, next) => {
  const { search } = req.query;
  const result = searchMovies(search, movies);
  res.json(result);
});

app.listen(3500);
