import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  user_id: "",
  first_name: "",
  phone_number: "",
  about: "",
  sex: "",
};

export const userInfoSlice = createSlice({
  name: "user_info",
  initialState,
  reducers: {
    changeUserInfo: (state, action) => {
      if (!action.payload) {
        return console.log("Info not Found");
      } else {
        state.id = action.payload._id;
        state.user_id = action.payload.user_id;
        state.first_name = action.payload.first_name;
        state.phone_number = action.payload.phone_number;
      }
    },
    removeInfo: (state) => {
      state = initialState;
    },
  },
});

export const { changeUserInfo, removeInfo} = userInfoSlice.actions;

export default userInfoSlice.reducer;
