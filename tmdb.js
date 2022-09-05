const APIKEY = "c99411f6fb59ba21ae22c7314136f6cb";

const baseURL = "https://api.themoviedb.org/3/";
let configData = null;
let baseImageURL = null;

const getConfig = (input) => {
  const url = "".concat(baseURL, "configuarion?api_key=", APIKEY);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      baseImageURL = data.images.secure_base_url;
      configData = data.images;
      runSearch(input);
    })
    .catch((e) => {
      alert(e);
    });
};

const runSearch = (input) => {
  const url = "".concat(
    baseURL,
    "search/movie?api_key=",
    APIKEY,
    "&query=",
    input
  );
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data;
    });
};

export default tmdb;
