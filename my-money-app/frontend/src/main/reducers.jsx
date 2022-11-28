import { combineReducers, CombineReducers } from "redux";

import DashboardReducers from "../dashboard/dashboardReducers";

const rootReducer = combineReducers({
  dashboard: DashboardReducers
});

export default rootReducer;
