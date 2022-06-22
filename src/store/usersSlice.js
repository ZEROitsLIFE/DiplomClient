import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("http://localhost:5000/api/user/users",)
  const data = await response.json();
  console.log("FetchUsers=>", data);
  return data;
})


export const usersSlice = createSlice({
  name: "users",
  initialState: {
    isFetch: false,
     value:[]
  },
  reducers: {
    addUsers: (state, action) => {
        if (!action.payload) {
            console.log("State is peddom")
            state.isFetch = false;
          } else {
              console.log("Action",action.payload)
            state.value=action.payload
            state.isFetch = true;
          } 
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.isFetch = false;
      return state;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      console.log("Userst FETCH->", action.payload);
      if (!action.payload) {
        state.isFetch = false;
        return (state.value = state.value.initialState);
      } else {
        state = action.payload;
        state.isFetch = true;
      }
      return state;
    },
  },
});

export const {addUsers} = usersSlice.actions;

export default usersSlice.reducer;
