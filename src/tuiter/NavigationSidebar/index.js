import React from "react";
import items from "./NavigationSidebarItem.js";
import SingleIndex from "./SingleIndex.js";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
      const {pathname} = useLocation();
      const paths = pathname.split('/')
      let active = paths[2];
      if(active === '') active = 'Explore';
      return (
      <>
        <div className="list-group">
          {items.map(item => {
            return (
                <>
                  <div className="list-group">
                  <SingleIndex item={item} active={active}/>
                  </div>
                </>
            );
          })
        }
        </div>

        <div className="d-grid mt-2">
          <a className="btn btn-primary btn-block rounded-pill">Tweet</a>
        </div>
      </>
  );
}

export default NavigationSidebar;