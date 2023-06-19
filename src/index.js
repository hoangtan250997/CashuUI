import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { HomeTemplate } from "./Templates/HomeTemplate";
import DashBoard from "./Pages/Dashboard/Dashboard";
import Innote from "./Pages/In Notes/In notes";
import Outnote from "./Pages/Out Notes/Out notes";
import GeoMercator from "./Pages/Analytics/GeoMercator";
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomeTemplate />}>
        <Route path="dashboard" index element={<DashBoard />} />
        <Route path="innote" element={<Innote />}></Route>
        <Route path="outnote" element={<Outnote />}></Route>
        {/* <Route path="" element={<GeoMercator />}></Route> */}
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
