import React from "react";
import NoteInForm from "../../Components/Forms/NoteInForm";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Product from "../../Components/Product/product";
// import { getProductApi } from "../../redux/reducers/productReducer";
// import Carousel_Home from "./Carousel_Home";

export default function Innote() {
  //Lấy dữ liệu từ redux
  //   const { arrProduct } = useSelector((state) => state.productReducer);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     const action = getProductApi();
  //     dispatch(action);
  //   }, []);
  //   console.log(arrProduct);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <NoteInForm />
    </div>
  );
}
