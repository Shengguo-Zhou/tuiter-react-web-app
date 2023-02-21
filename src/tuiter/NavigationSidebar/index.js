import React from "react";
import items from "./NavigationSidebarItem.js"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavigationSidebar = (
    { active = 'Explore'}) => {
      return (
      <>
        <div className="list-group">
          <ul>
          {
          items.map(item => {
            return (<>
              <a className={`list-group-item override-lgi list-group-item-action
              ${active === item.name ? "active" : ""}`}
              href={`${item.href}`}>
                <div className="row">
                  <div className="col-2">
                    <i className="bi bi-house"/>
                  </div>
                  <div className="col-8">
                    <span className="d-none d-xl-block d-xxl-block fw-light">{item.name}</span>
                  </div>
                </div>
              </a>
          </>);
          })
        }
          </ul>
        </div>

        <div className="d-grid mt-2">
          <a href="../NavigationSidebar/tweet.html"
             className="btn btn-primary btn-block rounded-pill">
            Tweet</a>
        </div>

      </>
  );
}

export default NavigationSidebar;