import React from "react";
import InNoteForm from "../../Components/Forms/InNoteForm";
import Grid from "@mui/material/Unstable_Grid2";
import "../../Components/Forms/InNoteForm.scss";
import InNoteTable from "../../Components/Tables/InNoteTable";
import InNoteTable2 from "../../Components/Tables/InNoteTable2";
import InTable from "../../Components/InNoteTable/InTable";
import HeaderDashboard from "../../Components/Header/HeaderHome";
export default function Innote() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <HeaderDashboard />
      <div style={{ flex: 1, marginTop: 10 }}>
        <InTable />
      </div>
    </div>
  );
}
