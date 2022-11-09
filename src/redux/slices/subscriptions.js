import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  // subList: []
  subscriptionList:[]
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


    getSubscriptionSuccess(state, action) {
      state.isLoading = false;
      state.subscriptionList = action.payload;
    },
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getSubscriptions() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/subscriptions');
      dispatch(slice.actions.getSubscriptionSuccess(response.data.data));
    } catch (error) {
      console.log(error)
      dispatch(slice.actions.hasError(error));
    }
  };
}