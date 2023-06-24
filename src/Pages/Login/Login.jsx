import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginApi } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { removeStore } from "../../util/config";
export const Login = () => {
  const dispatch = useDispatch();

  const remove = () => {
    // const rmAsync = removeStore("userLogin");
    // dispatch(rmAsync);
    localStorage.removeItem("userLogin");
  };
  const form = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required("Username cannot be blank!"),
      password: yup.string().required("Password cannot be blank!"),
    }),
    onSubmit: (values) => {
      const actionAsync = loginApi(values);
      dispatch(actionAsync);
    },
  });

  return (
    <>
      {" "}
      <form
        className="formLogin "
        onSubmit={form.handleSubmit}
        style={{ backgroundColor: "rgb(220, 200, 200)", padding: "20px" }}
      >
        <h3 className="login">Login</h3>

        <div className="form-group emailLogin">
          <p>Username</p>
          <input
            placeholder="Username"
            className="form-control"
            name="username"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.email && (
            <p className="text-danger">{form.errors.email}</p>
          )}
        </div>
        <div className="form-group passwordLogin">
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            className="form-control"
            name="password"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.errors.password && (
            <p className="text-danger">{form.errors.password}</p>
          )}
        </div>
        <div className="form-group submitLogin">
          <button className="btn btn-success mt-2 btnLogin" type="submit">
            LOGIN
          </button>
          <button className="btn btn-success mt-2 btnLogin" onClick={remove}>
            REMOVE
          </button>
        </div>
      </form>
    </>
  );
};
