import {Link} from "react-router-dom";
import React from "react";
import "./index.css"
const SingleIndex = ({
      item = {
        "class": 'bi bi-hash',
        "name": 'Explore',
        "href": '/tuiter/explore'
      },
      active = 'explore'
}) => {
    return(
      <>
        <div>
        <a className={`list-group-item override-lgi list-group-item-action
        ${active.toUpperCase() === item.name.toUpperCase() ? "active" : ""}`}>
              <Link to={`${item.href}`} className={"link-decoration"} style={{ color: '#FFF'}}>
                <div className="row">
                  <div className="col-2">
                    <i className={`${item.class}`}
                       style={{ color: `${active.toUpperCase() === item.name.toUpperCase() ? 'white' : 'black'}` }}/>
                  </div>
                  <div className="col-8">
                    <span className="d-none d-xl-block d-xxl-block fw-light"
                    style={{ color: `${active.toUpperCase() === item.name.toUpperCase() ? 'white' : 'black'}`}}>{item.name}</span>
                  </div>
                </div>
              </Link>
        </a>
        </div>
      </>
  );
}

export default SingleIndex;