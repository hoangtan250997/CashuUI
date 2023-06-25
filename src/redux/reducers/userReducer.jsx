//rxslice
import { createSlice } from "@reduxjs/toolkit";
import { history } from "../../index";

import { signIn } from "../../util/config";
import {
  ACCESS_TOKEN,
  http,
  getStoreJson,
  saveStore,
  saveStoreJson,
  USER_LOGIN,
} from "../../util/config";

const initialState = {
  userLogin: getStoreJson(USER_LOGIN),
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { loginAction } = userReducer.actions;

export default userReducer.reducer;

/* async action */
export const loginApi = (userLogin) => {
  return async (dispatch) => {
    console.log("user ", userLogin);

    const result = await signIn(userLogin);

    console.log("result ", result);

    console.log("obDangNhap", result.data.username);
    //Cập nhật cho reducer
    const action = loginAction(result.data);
    dispatch(action);
    console.log("loginAction", result.data);
    //Lưu localstorage
    saveStoreJson(USER_LOGIN, result.data);
    saveStore(ACCESS_TOKEN, result.data.token);
    //Gọi axios lấy dữ liệu api từ token
    //Gọi api getprofile
    alert("Dang nhap thanh cong!");
    history.push("/dashboard");
    // window.location.href = "/dashboard";

    //HOANG
    // localStorage.setItem("USER_INFO_KEY", JSON.stringify(result.data));
    //-----
  };
};
