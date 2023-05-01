import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  university: null,
};

export const university = createSlice({
  name: "universityReducer",
  initialState,
  reducers: {
    setUniversity: (state, action) => {
      state.university = action.payload;
    },
  },
});

export default university.reducer;

export const { setUniversity } = university.actions;
