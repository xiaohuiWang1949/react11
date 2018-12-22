import React, { Component ,Fragment} from 'react';
import {HashRouter as Router,Route,Link,NavLink,Switch,Redirect} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store"

import Home from "./components/home/home";
import Search from "./components/search/search";
import Login from "./components/login/login";

import Typout from "./components/typout/typout";

import "./common/css/style.css"


import "./common/css/style.css"


class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    	<Router>
					<div>
						<Switch>
							<Route path="/home" component={Home} />
							<Route path="/search" component={Search} />
							<Route path="/login" component={Login} />
							<Route path="/typout" component={Typout} />
							<Redirect path="/" to="/home" />
						</Switch>
					</div>
				</Router>
				</Provider>
    );
  }
}

export default App;
