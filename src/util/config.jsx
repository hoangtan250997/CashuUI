import axios from "axios";
import { history } from "../index";
import { isExpired, decodeToken } from "react-jwt";
import { request } from "../Thuy/axios";

export const ACCESS_TOKEN = "accessToken";
export const USER_LOGIN = "userLogin";

export const { saveStore, saveStoreJson, getStore, getStoreJson, removeStore } =
  {
    saveStore: (name, stringValue) => {
      console.log("1");
      console.log(name, stringValue);
      localStorage.setItem(name, stringValue);
      return stringValue;
    },
    saveStoreJson: (name, value) => {
      console.log("2 ");
      console.log(name, value);

      let sValue = JSON.stringify(value);
      localStorage.setItem(name, sValue);
      return value;
    },
    getStore: (name) => {
      console.log("3 name: ", name);

      if (localStorage.getItem(name)) {
        console.log("3 name: ", localStorage.getItem(name));
        return localStorage.getItem(name);
      }
      return null;
    },
    getStoreJson: (name) => {
      console.log("4 name ", name);

      if (localStorage.getItem(name)) {
        console.log(JSON.parse(localStorage.getItem(name)));
        return JSON.parse(localStorage.getItem(name));
      }
      return null;
    },
    removeStore: (name) => {
      console.log("5", name);

      if (localStorage.getItem(name)) {
        console.log("6", name);

        localStorage.removeItem(name);
      }
    },
  };

//Cấu hình cho tất các request api

const http = axios.create({
  baseURL: "https://localhost:8080/",
  timeout: 3000,
});

axios.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${getStore(ACCESS_TOKEN)}`,
    };
    return config;
  },
  (error) => {
    console.log("Bi loi roi");
    return Promise.reject(error);
  }
);
// http.interceptors.request.use((config) => {
//   console.log("config config");

//   let userInfo = localStorage.getItem(USER_LOGIN);

//   if (userInfo) {
//     userInfo = JSON.parse(userInfo);

//     config.headers.Authorization = `Bearer ${userInfo.token}`;

//     config.headers["Roles"] = userInfo.roles;
//   }
//   return config;
// });

export const signIn = (data) => {
  console.log("SignIn config");

  return request({
    url: "/auth/signin",
    method: "POST",
    data,
  });
};
//Cấu hình cho tất cả các response api
http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    //Bắt lỗi 400 hoặc 404
    if (err.response?.status === 400 || err.response?.status === 404) {
      //Lỗi do tham số => backend trả về 400 hoặc 404 mình sẽ xử lý
      alert("tham số không hợp lệ !");
      //chuyển hướng về home
      history.push("/");
    }
    if (err.response?.status === 401 || err.response.status === 403) {
      const isMyTokenExpired = isExpired(getStore(ACCESS_TOKEN));
      if (isMyTokenExpired) {
        alert("Hết phiên đăng nhập yêu cầu đăng nhập lại !");
        removeStore(ACCESS_TOKEN);
        removeStore(USER_LOGIN);
        //Chuyển hướng trang dạng f5
        window.location.href = "/login";
      }
      history.push("/login");
    }
    return Promise.reject(err);
  }
);

/* Các status code thường gặp
    200: Request gửi đi và nhận về kết quả thành
    201: request gửi đi thành công và đã được khởi tạo 
    400: bad request => request gửi đi thành công tuy nhiên không tìm thấy dữ liệu từ tham số gửi đi
    404: Not found (Không tìm thấy api đó), hoặc tương tự 400
    401: Unauthorize token không hợp lệ không có quyền truy cập vào api đó
    403: Forbinden token hợp lệ tuy nhiên chưa đủ quyền để truy cập vào api đó
    500: Error server (Lỗi xảy ra trên server có khả năng là frontend gửi dữ liệu chưa hợp lệ dẫn đến backend xử lý bị lỗi). Backend code lỗi trên server ! => Test bằng post man hoặc swagger nếu api không lỗi => front code sai, ngược lại tail fail trên post man và swagger thì báo backend fix.

*/
