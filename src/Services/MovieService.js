import { CINE_URL } from "../Config/config";

const urls = [
  // `https://cineflixmovieapp.herokuapp.com/api/movies/all?page=1&limit=20`,
  `https://cors-anywhere.herokuapp.com/${CINE_URL}movies/all`,
  // `${CINE_URL}movies/all?page=2&limit=20`,
  // `${CINE_URL}movies/all?page=3&limit=20`,
];

export const fetchData = () => {
  return Promise.all(
    urls.map((items) => {
      return fetch(items).then((response) => response.json());
    })
  );
};
