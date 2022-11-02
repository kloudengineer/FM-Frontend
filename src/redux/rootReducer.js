import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import staffReducer from "./slices/staff";
import routeReducer from "./slices/routes";
import vehicleReducer from "./slices/vehicles";
import notifReducer from "./slices/notifications";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  staff: staffReducer,
  route: routeReducer,
  vehicle: vehicleReducer,
  notifications: notifReducer,
});

export { rootPersistConfig, rootReducer };
