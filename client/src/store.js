import { createStore, combineReducers, applyMiddleware } from "redux";
import { userLoginReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const userLoginStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;

const reducers = combineReducers({
  userLogin: userLoginReducer,
});

const initialState = {
  userLogin: { userInfo: userLoginStorage },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
