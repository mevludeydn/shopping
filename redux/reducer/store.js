import { legacy_createStore } from "redux";
import rootReducers from ".";

const store = legacy_createStore(rootReducers);


export default store;