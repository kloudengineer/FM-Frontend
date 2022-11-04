import { map, filter } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  // subList: []
  subStatusList: []
};

const slice = createSlice({
  name: 'subscription',
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

    // GET subs


    getSubscriptionStatusSuccess(state, action) {
      state.isLoading = false;
      state.subStatusList = action.payload;
    },
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getSubscriptionStatus() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/subscription-status');
      dispatch(slice.actions.getSubscriptionStatusSuccess(response.data));
    } catch (error) {
      console.log(error)
      dispatch(slice.actions.hasError(error));
    }
  };
}