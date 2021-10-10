import { combineReducers } from "redux";

import translationsReducer from "./translations";

const rootReducer = combineReducers({
  translations: translationsReducer,
});

export default rootReducer;
