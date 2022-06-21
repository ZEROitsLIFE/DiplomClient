import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const chekUser = createAsyncThunk("type/chekUser", async () => {
  const response = await fetch("https://relax-pluss-server.herokuapp.com/api/user/refresh");
  localStorage.setItem("token", response.data.accessToken);
  // console.log(response)
  const data = await response.json();
  return data;
});
const initialState = {
  id: "",
  email: "",
  role: "",
  isActivated: false,
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser: (state, action) => {
      if (!action.payload) {
        return initialState;
      } else {
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.role = action.payload.role;
        state.isActivated = action.payload.isActivated;
      }
    },
    changeLogin: (state, action) => {
      if (!action.payload) {
        return initialState
      } else {
        state.isLogin = action.payload;
      }
    },
    removeUser: (state) => {
      state = initialState;
    },
    //to fhuther
    // changeEmail: (state, action) => {
    //   state.email = action.payload.email;
    //   state.role = action.payload.role;
    //   state.isActived = action.payload.isActived;
    // },
  },
  extraReducers: {
    [chekUser.pending]: (state, action) => {},
    [chekUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state = action.payload.user;
    },
    [chekUser.rejected]: (state, action) => {},
  },
});

export const { changeUser, removeUser, changeLogin } = userSlice.actions;

export default userSlice.reducer;
