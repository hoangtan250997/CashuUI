import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { HomeTemplate } from "./Templates/HomeTemplate";
import DashBoard from "./Pages/Dashboard/Dashboard";
import Innote from "./Pages/In Notes/In notes";
import Outnote from "./Pages/Out Notes/Out notes";
import Analytics from "./Pages/Analytics/Analytics";
import CompanyInfo from "./Pages/Company Info/Company Info";
import { createRoot } from "react-dom/client";
// import Login from "./Pages/Sign in/Login";
createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<HomeTemplate />}>
        <Route path="dashboard" index element={<DashBoard />} />
        <Route path="innote" element={<Innote />} />
        <Route path="outnote" element={<Outnote />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="companyInfo" element={<CompanyInfo />} />
        {/* <Route path="login" element={<Login />} /> */}
      </Route>
    </Routes>
  </Router>
);
