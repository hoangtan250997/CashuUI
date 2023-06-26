import React from "react";
// import InNoteForm from "../../Components/Forms/InNoteForm";
import OutNoteForm from "../../Components/Forms/OutNoteForm";
import Grid from "@mui/material/Unstable_Grid2";
import "../../Components/Forms/InNoteForm.scss";

export default function Innote() {
  return (
    <Grid container spacing={1}>
      <OutNoteForm />
    </Grid>
  );
}
