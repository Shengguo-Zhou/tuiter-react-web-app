import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfileFirstName, updateProfileLastName, updateProfileHandler} from "../ProfileComponent/profile-reducer";


const EditProfileComponent = () => {
  let newProfile = useSelector(state => state.profile);
  let [firstName, setFirstName] = useState(newProfile.firstName);
  let [lastName, setLastName] = useState(newProfile.lastName);
  let [bio, setBio] = useState(newProfile.bio);
  let [website, setWebsite] = useState(newProfile.website);
  let [location, setLocation] = useState(newProfile.location);
  let [dob, setDob] = useState(newProfile.dateOfBirth);
  const dispatch = useDispatch();
  const saveProfileHandler = () => {
    let handler = "@" + firstName.toLowerCase() + lastName.toLowerCase();
    dispatch(updateProfileFirstName(firstName));
    dispatch(updateProfileLastName(lastName));
    dispatch(updateProfileHandler(handler));
    // dispatch(updateProfileBio(bio));
    // dispatch(updateProfileWebsite(website));
    // dispatch(updateProfileLocation(location));
    // dispatch(updateProfileDob(dob));
  };
  return(
      <>
        <div className={"row"}>
          <div className={"col-1"} style={{marginTop: "7px"}}>
            <Link to={'/tuiter/profile'}>
              <i className="bi bi-x-lg" style={{color: "black", marginLeft: "15px", marginTop: "10px"}}/></Link>
          </div>
          <div className={"col-8 fw-bold fs-4"}>
            <div>Edit profile</div>
          </div>
          <div className={"col-2"}>
            <Link to={'/tuiter/profile'}>
              <button className={"rounded-pill btn btn-dark float-end fw-bold"}
                      style={{marginBottom: "10px"}}
                      onClick={saveProfileHandler}>Save</button></Link>
          </div>
        </div>

        <div className={"row position-relative"}>
          <img src={"/images/web.png"}/>
          <img src={"/images/reactjs.jpeg"}
               className={"position-absolute top-100 translate-middle"}
               style={{height: "128px", width: "146px", borderRadius: "50%", marginLeft: "100px"}}/>
        </div>

        <div className={"container"} style={{marginTop: "75px"}}>
          <label htmlFor={"firstname"} style={{marginBottom: "5px"}} className={"text-secondary"}>FirstName: </label>
          <textarea value={firstName}
                    id={"firstname"}
                    placeholder="FirstName"
                    className="form-control border-1"
                    onChange={(event) => setFirstName(event.target.value)}>
          </textarea>
          <label htmlFor={"lastname"} style={{marginBottom: "5px", marginTop: "20px"}} className={"text-secondary"}>LastName: </label>
          <textarea value={lastName}
                    id={"lastname"}
                    placeholder="LastName"
                    className="form-control border-1"
                    onChange={(event) => setLastName(event.target.value)}>
          </textarea>
        </div>


      </>
  );
}

export default EditProfileComponent;