import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { toggleSideBarReducer } from "./reducers/sidebar.reducer";
import { getVideoReducer } from "./reducers/getVideo.reducer";
import { searchReducer } from "./reducers/search.reducer";

const rootReducer = combineReducers({
  sidebar: toggleSideBarReducer,
  video: getVideoReducer,
  search: searchReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
