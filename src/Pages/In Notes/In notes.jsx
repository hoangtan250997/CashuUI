import React from "react";
import InNoteForm from "../../Components/Forms/InNoteForm";
import Grid from "@mui/material/Unstable_Grid2";
import "../../Components/Forms/InNoteForm.scss";
import InNoteTable from "../../Components/Tables/InNoteTable";
import InNoteTable2 from "../../Components/Tables/InNoteTable2";
import InTable from "../../Components/InNoteTable/InTable";

export default function Innote() {
  return (
    <Grid container spacing={1}>
      {/* <Grid xs={6}> */}
      <InTable />
      {/* </Grid> */}
      {/* <Grid xs={6}>
        <InNoteTable2 />
      </Grid> */}
    </Grid>
  );
}
