import React from "react";
import PostSummaryList from "../PostSummaryList/index.js"
import NavigationSidebar from "../NavigationSidebar/index.js";

function HomeScreen() {
  return (
      <div className="row mt-2">
        <div className="col-10 col-md-10 col-lg-7 col-xl-6"
             style={{"position": "relative"}}>
          <h1>Post Summary List</h1>
        </div>
      </div>
  );
}

export default HomeScreen