import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
  const profile = useSelector(state => state.profile)
  return(
      <>
        <div className={"row"}>
          <span>{profile.firstName} &nbsp; {profile.lastName}</span>
        </div>

        <div className={"row position-relative"}>
          <img src={"/images/web.png"}/>
          <img src={"/images/reactjs.jpeg"}
             className={"position-absolute top-100 translate-middle"}
             style={{height: "128px", width: "146px", borderRadius: "50%", marginLeft: "100px"}}/>
        </div>

        <div className={"row"}>
          <div className={"col-10"}/>
          <div className={"col-2"}>
            <button className={"btn btn-light rounded-pill float-end"}
                    style={{color: "black"}}>
              <Link to={'/tuiter/edit-profile'}>Edit Profile</Link>
            </button>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-3"}>{profile.followingCount} &nbsp; Following</div>
          <div className={"col-3"}>{profile.followersCount} &nbsp; Followers</div>
        </div>

      </>
  );
}

export default ProfileComponent;