import { createSelector } from "reselect";

const selectSearch = (state) => state.search;

export const selectSearchItems = createSelector(
  [selectSearch],
  (search) => search.searchItems
);

export const selectSearchedMovieByTitle = (id) =>
  createSelector([selectSearchItems], (searchItems) =>
    searchItems.filter((items) => (items.title ? items._id === id : null))
  );
