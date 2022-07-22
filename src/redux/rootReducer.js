import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// slices
import staffReducer from './slices/staff';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const rootReducer = combineReducers({
  staff: staffReducer
});

export { rootPersistConfig, rootReducer };
