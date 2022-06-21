import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchType = createAsyncThunk("type/fetchType", async () => {
  const response = await fetch("https://relax-pluss-server.herokuapp.com/api/type/findAll");
  const data = await response.json();
  console.log("Type FETCH", data);
  return data;
});

export const typeSlice = createSlice({
  name: "type",
  initialState: { isFetch: false, value: [{ _id: "", name: "" }] },
  reducers: {
    addType(state, action) {
      console.log("ACTION", action.payload);
      if(action.payload === null){
        console.log("AcTiOnS=", action.payload)
      }else{
        state.value.push(action.payload);

      }
    },

    changeTypeName: (state, action) => {
      state.value.map((data) => {
        if (data._id === action.payload._id) {
          data.name = action.payload.name;
        }
      });
    },
  },
  extraReducers: {
    [fetchType.pending]: (state, action) => {
      state.isFetch = false;
      return state;
    },
    [fetchType.fulfilled]: (state, action) => {
      if (!action.payload) {
        console.log("----");
        return (state.value = state.values.initialState);
      } else {
        state.value = action.payload;
        state.isFetch = true;
      }
      return state;
    },
  },
});

export const { changeTypeName, addType } = typeSlice.actions;

export default typeSlice.reducer;
