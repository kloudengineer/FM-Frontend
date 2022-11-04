import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// slices
import staffReducer from './slices/staff';
import routeReducer from './slices/routes';
import vehicleReducer from './slices/vehicles';
import priceReducer from './slices/pricing';
import subsReducer from './slices/subscriptions';
// import subscriptionReducer from './slices/subscription'
// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const rootReducer = combineReducers({
  staff: staffReducer,
  route: routeReducer,
  vehicle: vehicleReducer,
  price:priceReducer,
  subscription:subsReducer
  // subscription:subscriptionReducer
});

export { rootPersistConfig, rootReducer };
