import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { universityModel } from "../models/unversityItemModel";

const initialState = {
  university: null,
  searchData: null,
};

export const university = createSlice({
  name: "universityReducer",
  initialState,
  reducers: {
    setUniversity: (state: any, action: PayloadAction<universityModel[]>) => {
      state.university = action.payload;
    },
    setSearchDataStore: (state: any, action: PayloadAction<string>) => {
      state.searchData = action.payload;
    },
  },
});

export default university.reducer;

export const { setUniversity, setSearchDataStore } = university.actions;

export const selectUniversity = (state: any) =>
  state.universityReducer.university;
export const selectSearchData = (state: any) =>
  state.universityReducer.searchData;
