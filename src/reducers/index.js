import listReducer from "./employeeList";
import { combineReducers } from "redux";

const allReducers = combineReducers({ listReducer });

export default allReducers;
