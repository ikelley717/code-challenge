import tmdb from "./tmdb";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/result", (req, res) => {
  let query = req.query.search;

  request(
    "https://api.themoviedb.org/3/search/movie?api_key={API_KEY}d&query=" +
      query,
    (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        let data = JSON.parse(body);
        res.render("result", { data: data, querySearch: query });
      }
    }
  );
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
