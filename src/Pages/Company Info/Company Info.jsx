import React from "react";
import GitForm from "../../Components/Forms/GitForm";

// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Product from "../../Components/Product/product";
// import { getProductApi } from "../../redux/reducers/productReducer";
// import Carousel_Home from "./Carousel_Home";

export default function CompanyInfo() {
  //Lấy dữ liệu từ redux
  //   const { arrProduct } = useSelector((state) => state.productReducer);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     const action = getProductApi();
  //     dispatch(action);
  //   }, []);
  //   console.log(arrProduct);
  const { userLogin } = useSelector((state) => state.userReducer);

  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <p>{userLogin.token}</p>{" "}
    </div>
  );
}
