import { combineReducers } from "redux";
import movieReducer from "./Movie/movie-reducer";
import userReducer from "./User/user-reducer";
import searchReducer from "./Search/search-reducer";
import collectionReducer from "./Collection/collection-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import movieDetailReducer from "./MovieDetail/movieDetail-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["list", "search"],
};

const rootReducer = combineReducers({
  movie: movieReducer,
  user: userReducer,
  search: searchReducer,
  collection: collectionReducer,
  movieDetailReducer,
});

export default persistReducer(persistConfig, rootReducer);
