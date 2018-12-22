import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import menu from "./reducers/menu";
import banner from "./reducers/banner";
import typout from "./reducers/typout";

const reducers=combineReducers({
	menu,
	banner,
	typout
})

const store=createStore(reducers,applyMiddleware(reduxPromiseMiddleware()))

export default store;
