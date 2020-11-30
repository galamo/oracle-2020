console.log("Oracle API");
require("dotenv").config();
const express = require("express");
const { router: moviesRouter } = require("./routes/movies");
const cors = require("cors");
const app = express();

app.use(cors());
app.use((req, res, next) => {
  console.log(`request ip is: ${req.ip}`);
  next();
});

app.use("/", moviesRouter);

app.listen(process.env.PORT);
