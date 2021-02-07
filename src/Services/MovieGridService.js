import { API_URL, API_KEY } from "../Config/config";

const urls = [
  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=john%20wick`,
  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=king%20of%20the%20monster`,
  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=avatar`,
  `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=the%20revenant`,
];

export function fetchGrid() {
  return Promise.all(
    urls.map((items) => {
      return fetch(items).then((response) => response.json());
    })
  );
}
