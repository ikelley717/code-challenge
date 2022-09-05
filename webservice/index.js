const express = require("express");
const path = require("path");
const request = require("request");

const cors = require("cors");

const app = express();

app.use(cors());

const APIKEY = "c99411f6fb59ba21ae22c7314136f6cb";

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/api/test", (req, res) => {
  res.send("");
  console.log(req.query.input);
});

app.get("/result", (req, res) => {
  let query = req.query.input;

  request(
    `https://api.themoviedb.org/3/search/movie?api_key=c99411f6fb59ba21ae22c7314136f6cb&query=${query}`,
    (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        let data = JSON.parse(body);
        res.send(data);
      }
    }
  );
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Started server on port ${port}...`));
