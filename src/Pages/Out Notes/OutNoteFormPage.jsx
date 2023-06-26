import React from "react";
import OutNoteForm from "../../Components/Forms/OutNoteForm";
import Grid from "@mui/material/Unstable_Grid2";
import "../../Components/Forms/InNoteForm.scss";
import InNoteTable from "../../Components/Tables/InNoteTable";
import InNoteTable2 from "../../Components/Tables/InNoteTable2";
import HeaderOutNote from "../../Components/Header/HeaderOutnote";

export default function OutnoteFormPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <HeaderOutNote />
      <div style={{ flex: 1, marginTop: 10 }}>
        <OutNoteForm />
      </div>
    </div>
  );
}
