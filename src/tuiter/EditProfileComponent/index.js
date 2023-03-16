import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfileFirstName} from "../ProfileComponent/profile-reducer";


const EditProfileComponent = () => {
  let newProfile = useSelector(state => state.profile);
  let [firstName, setFirstName] = useState(newProfile.firstName);
  const dispatch = useDispatch();
  const saveProfileHandler = () => {
    dispatch(updateProfileFirstName(firstName));
  };
  return(
      <>
        <div className={"row"}>
          <div className={"col-1"}>
            <Link to={'/tuiter/profile'}>
              <i className="bi bi-x-lg"/></Link>
          </div>
          <div className={"col-8"}>
            <div>Edit profile</div>
          </div>
          <div className={"col-2"}>
            <Link to={'/tuiter/profile'}>
              <button className={"rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"}
                      onClick={saveProfileHandler}>Save</button></Link>
          </div>
        </div>

        <div className={"row"}><img src={"/images/starship.png"}/></div>
        <div className={"row"}>
          <img src={"/images/react.png"}
               style={{height: "128px", width: "148px", borderRadius: "50%"}}/></div>

        <textarea value={firstName}
                  placeholder="Name"
                  className="form-control border-0"
                  onChange={(event) => setFirstName(event.target.value)}>
        </textarea>

      </>
  );
}

export default EditProfileComponent;