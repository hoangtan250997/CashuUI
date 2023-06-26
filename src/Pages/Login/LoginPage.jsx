import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import InTable from "../../Components/InNoteTable/InTable";
import { Login } from "../../Components/Login/Login";
import "../../Pages/Login/LoginPage.scss";

export default function LoginPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}></Grid>
      <Grid item xs={2} id="logincol">
        <Login id="logincomp" />
      </Grid>
      <Grid item xs={5}></Grid>
    </Grid>
  );
}
