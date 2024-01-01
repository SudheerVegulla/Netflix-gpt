import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleSearchView: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.toggleSearchView = !state.toggleSearchView; // if we arite like this it will make toggleSearchView as true which is correct
      //   return !state.toggleSearchView; // if we write like this then gptSearch : true means it make entire initialState as true
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
