import { combineReducers } from "redux";
import multipleMassAccelatorSlice from "./multipleMassAccelator";

const reducers = combineReducers({
  multipleMassAccelatorState: multipleMassAccelatorSlice,
});

export default reducers;
