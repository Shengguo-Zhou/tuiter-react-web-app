import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
  const profile = useSelector(state => state.profile)
  return(
      <>
        <div className={"row"}>
          <div className={"col-2"}>
            <div className={"row"}>
              <i className="bi bi-arrow-left" style={{marginLeft: "25px", marginBottom: "10px"}}/>
            </div>
          </div>
          <div className={"col-10"}>
            <div className={"row fw-bold"}>
              <span>{profile.firstName}&nbsp;{profile.lastName}</span>
            </div>
            <div className={"row"}>
              <span className={"text-secondary"}>6,114 Tweets</span>
            </div>
          </div>
        </div>

        <div className={"row position-relative"} style={{marginTop: "5px"}}>
          <img src={"/images/web.png"}/>
          <img src={"/images/reactjs.jpeg"}
             className={"position-absolute top-100 translate-middle"}
             style={{height: "128px", width: "146px", borderRadius: "50%", marginLeft: "100px"}}/>
        </div>

        <div className={"row"}>
          <div className={"col-8"}/>
          <div className={"col-4"}>
            <Link to={'/tuiter/edit-profile'}
                  className={"btn btn-light rounded-pill float-end fw-bold border border-1"}
                  style={{color: "black", marginTop: "10px", marginRight: "20px"}}> Edit Profile
            </Link>

          </div>
        </div>

        <div className={"container"} style={{marginTop: "40px"}}>
          <div className={"row fw-bold fs-2"} >
            <span>{profile.firstName}&nbsp;{profile.lastName}</span>
          </div>
          <div className={"row text-secondary"}>
            <span>{profile.handle}</span>
          </div>
          <div className={"row"} style={{marginTop: "18px"}}>
            <span>{profile.bio}</span>
          </div>
          <div className={"row"} style={{marginTop: "9px"}}>
            <span>{profile.website}</span>
          </div>
          <div className={"row text-secondary"} style={{marginTop: "9px"}}>
            <div className={"col-4"}><i className="bi bi-geo-alt"/> {profile.location}</div>
            <div className={"col-4"}><i className="bi bi-balloon"/> Born {profile.dateOfBirth}</div>
            <div className={"col-4"}><i className="bi bi-calendar-event"/> Joined {profile.dateJoined}</div>
          </div>
          <div className={"row"} style={{marginTop: "9px"}}>
            <div className={"col-3"}>{profile.followingCount} &nbsp;<span className={"text-secondary"}>Following</span></div>
            <div className={"col-3"}>{profile.followersCount} &nbsp;<span className={"text-secondary"}>Followers</span></div>
          </div>
        </div>

      </>
  );
}

export default ProfileComponent;


  // "firstName": "Jose",
  //   "lastName": "Annunziato",
  //   "handle": "@jannunzi",
  //   "profilePicture": "news1.png",
  //   "bannerPicture": "polyglot.png",
  //   "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
  //   "website": "youtube.com/webdevtv",
  //   "location": "Boston, MA",
  //   "dateOfBirth": "7/7/1968",
  //   "dateJoined": "4/2009",
  //   "followingCount": 340,
  //   "followersCount": 223
