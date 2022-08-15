import { map, filter } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  vehicle: {},
  vehicleList: []
};

const slice = createSlice({
  name: 'vehicle',
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

    // GET VEHICLES
    getVehicleListSuccess(state, action) {
      state.isLoading = false;
      state.vehicleList = action.payload;
    },

    // GET PROFILE
    getProfileSuccess(state, action) {
      state.isLoading = false;
      state.vehicle = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getProfile(id) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/vehicles/' + id);
      dispatch(slice.actions.getProfileSuccess(response.data.vehicle));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getVehicleList() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const response = await axios.get('/vehicles');
      console.log(response.data)
      dispatch(slice.actions.getVehicleListSuccess(response.data.vehicles));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function findVehicles(filter) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/find-vehicles', filter);
      dispatch(slice.actions.getRouteListSuccess(response.data.vehicles));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function createVehicle(payload) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/vehicles', payload);
      dispatch(slice.actions.createVehicleSuccess(response.data.vehicle));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function updateVehicle(vehicleId, payload) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/vehicles/' + vehicleId, payload);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function deleteVehicle(id) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.delete('/vehicles/' + id);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}