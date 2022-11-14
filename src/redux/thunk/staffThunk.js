import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const listStaff = createAsyncThunk("staff/list", async () => {
  // { authToken, page, carrierId }
  // const headers = {
  //   "Content-Type": "application/json",
  //   Authorization: authToken,
  //   carrier: carrierId,
  // };
  //   {headers}
  // ?page=${page} we don't have pagination.
  const res = await axios.get("/staff");
  console.log("STAFF = ", res);
  return res;
});

export const createStaff = createAsyncThunk(
  "staff/create",
  async ({ staff }) => {
    // { authToken,}
    // const headers = {
    //   "Content-Type": "application/json",
    //   Authorization: authToken,
    // };
    const res = await axios.post("/staff", { staff });
    return res;
  }
);
export const deleteStaff = createAsyncThunk();
export const getProfile = createAsyncThunk();
