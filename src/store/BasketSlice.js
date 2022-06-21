import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBasket = createAsyncThunk("basket/fetchBasket", async (id) => {
  const response = await fetch("https://relax-pluss-server.herokuapp.com/api/basket/findUser", {id})
  const data = await response.json();
  console.log("FetchBasket=>", data);
  return data;
})


const initialValue={
    id: null,
      user: null, 
}
export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    isFetch: false,
    value: {
      id: null,
      user: null,
    },
  },
  reducers: {
    addBasket: (state, action) => {
        if (!action.payload) {
            console.log("State is peddom")
            state.isFetch = false;
          } else {
            state.id = action.payload._id;
            state.user = action.payload.user;
            state.isFetch = true;
          } 
    },
    removeBasket: (state, action) => {
        if (!action.payload) {
            console.log("State is peddom")
            state.isFetch = false;
          } else {
            state.value.id=initialValue.id;
            state.value.user=initialValue.user
          } 
    },
    // changeHistoryComplited: (state, action) => {
    // },
    // changeHistoryReserved: (state, action) => {
    // },
  },
  extraReducers: {
    [fetchBasket.pending]: (state) => {
      state.isFetch = false;
      return state;
    },
    [fetchBasket.fulfilled]: (state, action) => {
      console.log("Baskey=t FETCH->", action.payload);
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

export const {addBasket,removeBasket} = basketSlice.actions;

export default basketSlice.reducer;
