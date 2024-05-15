import { combineReducers } from "redux";
import adminReducer from "./admin/reducer/Reducer"

let rootReducer = combineReducers({
    adminReducer,
})

export default rootReducer;