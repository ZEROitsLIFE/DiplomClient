import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchService = createAsyncThunk(
  "service/fetchService",
  async () => {
    try {
      const response = await fetch("https://relax-pluss-server.herokuapp.com/api/service/findAll");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("first", error);
    }
  }
);

export const serviceSlice = createSlice({
  name: "service",
  initialState: {
    isFetch: false,
    value: [
      {
        _id: "",
        type: "",
        name: "",
        description: "",
        price: 0,
      },
    ],
  },
  reducers: {
    addService: (state, action) => {
      state.value.push(action.payload);
    },
    changeService: (state, action) => {
      state.value.map((data) => {
        if (data._id === action.payload.id) {
          return (
            (data.type = action.payload.type),
            (data.name = action.payload.name),
            (data.description = action.payload.description),
            (data.price = action.payload.price)
          );
        }
      });
    },
  },
  extraReducers: {
    [fetchService.pending]: (state, action) => {
      state.isFetch = false;
      return state;
    },
    [fetchService.fulfilled]: (state, action) => {
      if (!action.payload) {
        return (state.value = state.initialState);
      } else {
        state.value = action.payload;
        state.isFetch = true;
      }
      return state;
    },
  },
});

export const { addService, changeService } = serviceSlice.actions;

export default serviceSlice.reducer;
