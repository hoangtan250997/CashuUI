import React from "react";
import ReactDOM from "react-dom";
import {
  IndexRoute,
  Routes,
  Route,
  BrowserRouter as Router,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { HomeTemplate } from "./Templates/HomeTemplate";
import DashBoard from "./Pages/Dashboard/Dashboard";
import Innote from "./Pages/In Notes/In notes";
import Outnote from "./Pages/Out Notes/Out notes";
import Analytics from "./Pages/Analytics/Analytics";
import CompanyInfo from "./Pages/Company Info/Company Info";
import { Login } from "./Components/Login/Login";
import { createRoot } from "react-dom/client";
import { createBrowserHistory } from "history";
import { store } from "./redux/configStore";
import { Provider } from "react-redux";

export const history = createBrowserHistory();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route path="/" element={<DashBoard />} />

          <Route path="dashboard" element={<DashBoard />} />
          <Route path="innote" element={<Innote />} />
          <Route path="outnote" element={<Outnote />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="companyInfo" element={<CompanyInfo />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
