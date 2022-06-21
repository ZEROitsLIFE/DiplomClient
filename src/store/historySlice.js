import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHistory = createAsyncThunk(
  "history/fetchHistory",
  async () => {
    const response = await fetch("https://relax-pluss-server.herokuapp.com/api/history/findAll");
    const data = await response.json();
    // console.log(data)
    return data;
  }
);

export const historySlice = createSlice({
  name: "history",
  initialState: {
    isFetch: false,
    value: [
      {
        _id: "",
        service: "",
        basket_id: null,
        date: "",
        time: 0,
        reserved: false,
        complited: false,
      },
    ],
  },
  reducers: {
    addHistory: (state, action) => {
      console.log("Payload=", action.payload);
      state.value.push(action.payload);
    },
    changeHistoryComplited: (state, action) => {
      console.log("Payload=", action.payload);
      state.value.map((data) => {
        if (data._id === action.payload._id) {
          console.log("Trues", data);
          data.complited = true;
        }
      });
    },
    changeHistoryReserved: (state, action) => {
      console.log("Payload=", action.payload);
      state.value.map((data) => {
        if (data._id === action.payload._id) {
          console.log("Trues", data);
          data.reserved = true;
          data.basket_id = action.payload.basket
        }
      });
    },
  },
  extraReducers: {
    [fetchHistory.pending]: (state) => {
      state.isFetch = false;
      return state;
    },
    [fetchHistory.fulfilled]: (state, action) => {
      console.log("History FETCH->", action.payload);
      if (!action.payload) {
        state.isFetch = false;
        return (state.value = state.value.initialState);
      } else {
        state.value = action.payload;
        state.isFetch = true;
      }
      return state;
    },
  },
});

export const { addHistory, changeHistoryComplited, changeHistoryReserved  } = historySlice.actions;

export default historySlice.reducer;
