import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { universityModel } from "../models/unversityItemModel";

const initialState = {
  university: null,
};

export const university = createSlice({
  name: "universityReducer",
  initialState,
  reducers: {
    setUniversity: (state: any, action: PayloadAction<universityModel[]>) => {
      state.university = action.payload;
    },
  },
});

export default university.reducer;

export const { setUniversity } = university.actions;

export const selectUniversity = (state: any) =>
  state.universityReducer.university;
