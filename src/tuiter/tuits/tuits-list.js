import React from "react";
import {useSelector} from "react-redux";
import SingleTuitsList from "./single-tuits-list.js"

const TuitsList = () => {
  const tuits = useSelector(state => state.tuits)
  return(
      <>
        <ul className={"list-group"}>
          {
            tuits.map(tuit => {
              return(
                  <li className={"list-group-item"}>
                    <SingleTuitsList tuit={tuit}/>
                  </li>
              );
            })
          }
        </ul>
      </>
  );
};

export default TuitsList;