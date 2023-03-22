import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";
import SingleTuitsList from "./single-tuits-list.js"

const TuitsList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])

  return(
      <>
        <ul className={"list-group"}>
          {
              loading &&
              <li className="list-group-item">
                Loading...
              </li>
          }
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