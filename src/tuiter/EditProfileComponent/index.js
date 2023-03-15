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
        <h1>Edit Profile Component</h1>
        <Link to={'/tuiter/profile'}>Back</Link>

        <textarea value={firstName}
                  placeholder="Name"
                  className="form-control border-0"
                  onChange={(event) => setFirstName(event.target.value)}>
        </textarea>

        <Link to={'/tuiter/profile'}>
        <button className={"rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"}
                onClick={saveProfileHandler}>Save</button>
        </Link>

      </>
  );
}

export default EditProfileComponent;