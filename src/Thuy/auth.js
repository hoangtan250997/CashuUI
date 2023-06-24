import { request } from "../Thuy/axios";

export const signIn = (data) => {
  console.log("requese before: ", request);
  return request({
    url: "/auth/signin",
    method: "POST",
    data,
  });
  console.log("requese after: ", request);
};
