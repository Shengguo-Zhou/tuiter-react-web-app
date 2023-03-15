import {createSlice} from "@reduxjs/toolkit";

let profile = {
  "firstName": "Jose",
  "lastName": "Annunziato",
  "handle": "@jannunzi",
  "profilePicture": "news1.png",
  "bannerPicture": "polyglot.png",
  "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
  "website": "youtube.com/webdevtv",
  "location": "Boston, MA",
  "dateOfBirth": "7/7/1968",
  "dateJoined": "4/2009",
  "followingCount": 340,
  "followersCount": 223
}

const profileReducer = createSlice({
  name: 'profile',
  initialState: profile,
  reducers: {
    updateProfileFirstName(state, action){
      // state.firstName = action.payload.firstName;
      // state.lastName = action.payload.lastName;
      // state.handle = "@" + action.payload.firstName + action.payload.lastName;
      // state.bio = action.payload.bio;
      // state.website = action.payload.website;
      // state.location = action.payload.location;
      // state.dateOfBirth = action.payload.dateOfBirth;
      state.firstName = action.payload;
    },
  }
});

export default profileReducer.reducer;
export const {updateProfileFirstName} = profileReducer.actions;