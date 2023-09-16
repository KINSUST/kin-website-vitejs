// create auth slice

import { createSlice } from "@reduxjs/toolkit";
import { createOrgData, getAllOrgData, singleOrgData } from "./orgFormApiSlice";

const organizationsSlice = createSlice({
  name: "organizations",
  initialState: {
    orgMembers: [],
    error: null,
    message: null,
    singleOrg: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
      state.singleOrg= null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrgData.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllOrgData.fulfilled, (state, action) => {
        state.orgMembers = action.payload.data;
      })

      .addCase(createOrgData.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createOrgData.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.orgMembers = [...state.orgMembers, action.payload.data];
      })

      .addCase(singleOrgData.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(singleOrgData.fulfilled, (state, action) => {
        state.message =action.payload.message
        state.singleOrg = action.payload.data;
      });
  },
});

// selectors
export const getProgramsData = (state) => state.advisors;

// actions
export const { setMessageEmpty } = organizationsSlice.actions;
// exports
export default organizationsSlice.reducer;
