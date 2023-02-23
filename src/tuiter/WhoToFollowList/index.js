import React from "react";

const WhoToFollowListItem = (
    {
      who = {
        userName: 'NASA',
        handle: 'NASA',
        avatarIcon: '../images/nyt.png' }
    }
    ) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`}/>
          </div>
          <div className={"col-8"}>
            <span className="fw-bold">{who.userName} &nbsp;</span>
            <i className="bi bi-check-circle-fill text-primary"/>
            <div>@{who.handle}</div>
          </div>
          <div className="col-2">
            <button className="btn btn-primary rounded-pill float-end">Follow</button>
          </div>
        </div>
      </li>
  );
};
export default WhoToFollowListItem;