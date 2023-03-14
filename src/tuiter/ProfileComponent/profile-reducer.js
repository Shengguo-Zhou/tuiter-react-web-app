import profile from "./profile.json"
import {createSlice} from "@reduxjs/toolkit";

const profileReducer = createSlice({
  name: 'profile',
  initialState: profile,
  reducers: {}
});

export default profileReducer.reducer;