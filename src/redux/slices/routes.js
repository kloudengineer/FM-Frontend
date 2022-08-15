import { map, filter } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  route: {},
  routeList: []
};

const slice = createSlice({
  name: 'route',
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

    // GET ROUTES
    getRouteListSuccess(state, action) {
      state.isLoading = false;
      state.routeList = action.payload;
    },

    // GET PROFILE
    getProfileSuccess(state, action) {
      state.isLoading = false;
      state.route = action.payload;
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
      const response = await axios.get('/routes/' + id);
      dispatch(slice.actions.getProfileSuccess(response.data.route));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getRouteList() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const response = await axios.get('/routes');
      dispatch(slice.actions.getRouteListSuccess(response.data.routes));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function findRoutes(filter) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/find-routes', filter);
      dispatch(slice.actions.getRouteListSuccess(response.data.routes));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function createRoute(payload) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/routes', payload);
      dispatch(slice.actions.createRouteSuccess(response.data.route));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function updateRoute(routeId, payload) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/routes/' + routeId, payload);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function deleteRoute(routeId) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.delete('/routes/' + routeId);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}