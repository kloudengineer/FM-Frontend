import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  notificationList: [],
};

const slice = createSlice({
  name: "staffNotif",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET STAFF
    getNotifListSuccess(state, action) {
      state.isLoading = false;
      state.notificationList = action.payload;
    },

    // GET PROFILE
    getProfileSuccess(state, action) {
      state.isLoading = false;
      state.staff = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

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

// ----------------------------------------------------------------------

export function getNotifList() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const response = await axios.get("/notifications/staff");
      dispatch(slice.actions.getNotifListSuccess(response.data.data));
    } catch (error) {
      console.log(error.message);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getProfile(id) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/notifications/staff/" + id);
      dispatch(slice.actions.getProfileSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
// ----------------------------------------------------------------------
export function setIsUnReadFalse(id) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.get("/notifications/read/" + id);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
// ----------------------------------------------------------------------

export function markAllNotifAsRead() {
  console.log("work");
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const res = await axios.get("/notifications/read");
      console.log("res=", res.data);
    } catch (error) {
      console.log("Err=", error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

// export function deleteNotif(notifId) {
//   return async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.delete("/staff/" + staffId);
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }
