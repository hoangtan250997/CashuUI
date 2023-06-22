import React from "react";
import InNoteForm from "../../Components/Forms/InNoteForm";
import Grid from "@mui/material/Unstable_Grid2";
import "../../Components/Forms/InNoteForm.scss";
import InNoteTable from "../../Components/Tables/InNoteTable";
import InNoteTable2 from "../../Components/Tables/InNoteTable2";
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
    <Grid container spacing={1}>
      <Grid xs={6}>
        <InNoteForm />
      </Grid>
      <Grid xs={6}>
        <InNoteTable2 />
      </Grid>
    </Grid>
  );
}
