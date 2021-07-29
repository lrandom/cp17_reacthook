import { combineReducers } from "redux";
import number from "./numberReducer";
import notes from "./noteReducer";
export default combineReducers({
    number,
    notes
})