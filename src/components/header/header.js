import React, { Component ,Fragment} from 'react';
import {HashRouter as Router,Route,Link,NavLink,Switch,Redirect} from "react-router-dom";
import store from "../../store";

import Menu from "./menu";

import "../../common/css/style.css";

export default class Headers extends Component {
	render() {
		return (
			<div id="header">
				<div className="menu" onClick={this.showMenu.bind(this)}>
    				<i className="fa fa-bars fa-2x"></i>
    			</div>
				<NavLink to="/home" className="logo">
					<img src={require("../../common/images/logojg.png")} />
				</NavLink>
				<div className="right">
					<NavLink to="/search"><i className="fa fa-search fa-2x"></i></NavLink>
					<NavLink to="/login"><i className="fa fa-user-o fa-2x"></i></NavLink>
				</div>
				<Menu />
			</div>
		)
	}
	showMenu(){
		//alert(1)
		let action={
			type:"SHOW_MENU"
		}
		store.dispatch(action)
	}
}
