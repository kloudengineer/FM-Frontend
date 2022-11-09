import { map, filter } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  priceList:[]
};

const slice = createSlice({
  name: 'price',
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

    // GET Prices
    getPriceListSuccess(state, action) {
      state.isLoading = false;
      state.priceList = action.payload;
    },
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


export function getPriceList() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/prices');
      dispatch(slice.actions.getPriceListSuccess(response.data));
    } catch (error) {
      console.log(error)
      dispatch(slice.actions.hasError(error));
    }
  };
}