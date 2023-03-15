import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
  const profile = useSelector(state => state.profile)
  return(
      <>
        <h1>Profile Component</h1>

        <h1>{profile.firstName}</h1>
        <h1>{profile.lastName}</h1>
        <h1>{profile.followingCount}</h1>
        <h1>{profile.followersCount}</h1>

        <Link to={'/tuiter/edit-profile'}>Edit Profile</Link>
      </>
  );
}

export default ProfileComponent;