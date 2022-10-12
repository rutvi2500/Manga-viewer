import { combineReducers } from "redux";

import bookListReducer from "./bookListReducer";

const rootReducer = combineReducers({
  bookListReducer: bookListReducer,
});

export default rootReducer;
