import React from "react";
import {Link} from "react-router-dom";

const EditProfileComponent = () => {
  return(
      <>
        <h1>Edit Profile Component</h1>
        <Link to={'/tuiter/profile'}>Back</Link>
      </>
  );
}

export default EditProfileComponent;