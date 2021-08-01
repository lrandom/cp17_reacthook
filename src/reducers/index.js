import { combineReducers } from "redux";
import number from "./numberReducer";
import data from "./dataReducer";
export default combineReducers({
    number,
    data
})