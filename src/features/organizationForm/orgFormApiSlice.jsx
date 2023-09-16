import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ApiURL from "../../components/apiURL/ApiURL";

// get all organization member  data
export const getAllOrgData = createAsyncThunk(
  "orgMembersData/getAllOrgData",
  async () => {
    try {
      const response = await axios.get(
        `${ApiURL}/api/v1/org-members`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// create organization member data
export const createOrgData = createAsyncThunk(
  "orgMembersData/createOrgData",
  async (data) => {
    try {
      const response = await axios.post(
        `${ApiURL}/api/v1/org-members`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);

// find single organization member data
export const singleOrgData = createAsyncThunk(
  "orgMembersData/singleOrgData",
  async (email) => {
    try {
      const response = await axios.get(
        `${ApiURL}/api/v1/org-members/${email}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  }
);