import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./index.js";

const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
  return(
      <>
      <ul className="list-group">
        <li className="list-group-item">
          <h3>Who to follow</h3>
        </li>

        {
          whoArray.map(who => <WhoToFollowListItem key={who._id} who={who}/>)
        }

        <li className={"list-group-item override-lgi override-lgii override-radius2"}>
          <div className={"row"} style={{color: "rgb(29,161,242)", marginLeft: "7px"}}>
            Show more
          </div>
        </li>
      </ul>
      <div className={"wd-news-top twitter-char-color-grey"}
         style={{marginLeft: "15px", color: "grey", fontSize: "smaller", marginTop: "16px"}}>
        <div>
          Terms of Service &nbsp; &nbsp; Privacy Policy &nbsp; &nbsp; Cookie Policy
        </div>
        <div>
          Accessibility &nbsp; &nbsp; Ads info &nbsp; &nbsp; More ...
        </div>
        <div>
          &copy; 2023 Twitter, Inc.
        </div>
      </div>
    </>
  );
};

export default WhoToFollowList;