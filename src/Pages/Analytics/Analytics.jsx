import React from "react";
import MonthInAnalytics from "../../Components/AnalyticsChart/MonthInAnalytics";
import YearInAnalytics from "../../Components/AnalyticsChart/YearInAnalytics";

export default function Analytics() {
  return (
    <div className="row">
      <div style={{width: 400}}> <MonthInAnalytics /></div>
      <div style={{width: 400, paddingTop: 5}}><YearInAnalytics /></div>
    </div>
    
  );
}
