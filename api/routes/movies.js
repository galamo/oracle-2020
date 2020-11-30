const express = require("express");
const router = express.Router();
const { movies } = require("../data/movies");
const { searchMovies } = require("../handlers/search");
const { getValidation } = require("../schemaValidation");
const axios = require("axios");

router.get("/movies", getValidation("movies"), async (req, res) => {
  console.log("---------in movies entry------");
  const { data } = await axios.get(
    "http://www.omdbapi.com/?s=batman&plot=full&apikey=4f7462e2"
  );
  console.log("locked till axios response reolved");
  res.json(data.Search);
});

router.get("/movies/search", getValidation("moviessearch"), (req, res) => {
  console.log("---------in movies/search entry------");
  const { search } = req.query;
  const result = searchMovies(search, movies);
  res.json(result);
  console.log("---------end movies/search entry------");
});

module.exports = { router };
