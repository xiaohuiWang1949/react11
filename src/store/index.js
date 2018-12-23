import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import menu from "./reducers/menu";
import banner from "./reducers/banner";
import typout from "./reducers/typout";
import home from "./reducers/home";

const reducers=combineReducers({
	menu,
	banner,
	typout,
	home
})

const store=createStore(reducers,applyMiddleware(reduxPromiseMiddleware()))

export default store;
