import { CINE_URL } from "../Config/config";

export const fetchSearchData = (value) => {
  // value = value.split(" ").join("%20");
  const url = `${CINE_URL}movies/search${value}`;
  return fetch(url).then((response) => response.json());
};
