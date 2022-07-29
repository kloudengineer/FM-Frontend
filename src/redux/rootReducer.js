import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// slices
import staffReducer from './slices/staff';
import routeReducer from './slices/routes';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const rootReducer = combineReducers({
  staff: staffReducer,
  route: routeReducer
});

export { rootPersistConfig, rootReducer };
