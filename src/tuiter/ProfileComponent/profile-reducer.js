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
      state.firstName = action.payload;
    },
    updateProfileLastName(state, action){
      state.lastName = action.payload;
    },
    updateProfileHandler(state, action){
      state.handle = action.payload;
    },
    updateProfileBio(state, action){
      state.bio = action.payload;
    },
    updateProfileWebsite(state, action){
      state.website = action.payload;
    },
    updateProfileLocation(state, action){
      state.location = action.payload;
    },
    updateProfileDob(state, action){
      state.dateOfBirth = action.payload;
    }
  }
});

export default profileReducer.reducer;
export const {updateProfileFirstName, updateProfileLastName, updateProfileDob,
  updateProfileHandler, updateProfileBio, updateProfileWebsite, updateProfileLocation} = profileReducer.actions;