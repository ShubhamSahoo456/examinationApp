import { createStore, combineReducers, applyMiddleware } from "redux";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import toastReducer from "./reducers/toastReducer";

const userLoginStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;

const reducers = combineReducers({
  userLogin: userLoginReducer,
  toast: toastReducer,
  userRegister: userRegisterReducer,
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
