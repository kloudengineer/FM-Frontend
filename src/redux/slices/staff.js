import { createSlice } from "@reduxjs/toolkit";
import { listStaff } from "../thunk/staffThunk";

const initialState = {
  isLoading: false,
  error: false,
  users: {
    data: [],
  },
};
// currentPage: null,
// numberOfPages: null,
// state.users.currentPage = payload.data.currentPage;
// state.users.numberOfPages = payload.data.numberOfPages;

const slice = createSlice({
  name: "staff",
  initialState,
  extraReducers: {
    [listStaff.pending]: (state) => {
      state.isLoading = true;
    },
    [listStaff.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.users.data = payload.data.data;
    },
    [listStaff.rejected]: (state, { error }) => {
      state.error = error.message;
      state.isLoading = false;
      state.users = initialState.users;
    },
  },
});

export default slice.reducer;

// ! old redux

// export function getProfile(id) {
//   return async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.get("/staff/" + id);
//       dispatch(slice.actions.getProfileSuccess(response.data.staff));
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }

// // ----------------------------------------------------------------------

// export function updateStaff(staffId, payload) {
//   return async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.post("/staff/" + staffId, payload);
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }

// // ----------------------------------------------------------------------

// export function deleteStaff(staffId) {
//   return async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.delete("/staff/" + staffId);
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }
