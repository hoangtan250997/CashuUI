import React from "react";
import NoteOutForm from "../../Components/Forms/NoteOutForm";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Product from "../../Components/Product/product";
// import { getProductApi } from "../../redux/reducers/productReducer";
// import Carousel_Home from "./Carousel_Home";

export default function Outnote() {
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
        backgroundColor: " rgba(220, 200, 200, 0.9)",
        textAlign: "center",
      }}
    >
      <NoteOutForm />
    </div>
  );
}
