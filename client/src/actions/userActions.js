import axios from "../axiosConfig";
import {
  SET_TOAST_STATE,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/constants";

export const registerSchool = (body) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      const { data } = await axios.post("/signup", body);
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({
        type: SET_TOAST_STATE,
        payload: {
          showToast: true,
          message: data.message,
          toastType: "success",
        },
      });
      resolve(data);
    } catch (error) {
      dispatch({ type: USER_REGISTER_FAIL });
      reject(error?.response?.data?.message || error.message);
    }
  });
};

export const loginUser = (body) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const { data } = await axios.post("/login", body);
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({
        type: SET_TOAST_STATE,
        payload: {
          showToast: true,
          message: data.message,
          toastType: "success",
        },
      });
      resolve(data);
    } catch (error) {
      dispatch({ type: USER_REGISTER_FAIL });
      reject(error?.response?.data?.message || error.message);
    }
  });
};
