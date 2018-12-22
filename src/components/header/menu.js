import React, { Component ,Fragment} from 'react';
import {HashRouter as Router,Route,Link,NavLink,Switch,Redirect} from "react-router-dom";
import store from "../../store";

import "../../common/css/style.css"

//console.log(store)

export default class Menu extends Component {
	constructor() {
		super();
		this.state=store.getState();
		store.subscribe(this.flagChange.bind(this))
		//console.log(this.state)
		//className={flag?'show':''}
	}
	render() {
		let {flag}=this.state.menu;
		//console.log(flag)
		return (
			<div id="menubox" className={flag?'show':''}>
				<div className="menu">
					<h2>
						<img src="http://cdn.jiguo.com/static@2.0/v1.0.0/img/app-menue-icon.6dfff9a.png" />
						下载<i className="fa fa-caret-right" aria-hidden="true"></i>
					</h2>
					<ul>
						<li onClick={this.hideMenu.bind(this)}>
						<NavLink to="/home"><i className="fa fa-home fa-2x"></i>首页</NavLink>
						</li>
						<li onClick={this.hideMenu.bind(this)}>
						<NavLink to="/typout"><i className="fa fa-bookmark-o fa-2x"></i>试用</NavLink>
						</li>
						<li onClick={this.hideMenu.bind(this)}>
						<NavLink to="/homr"><i className="fa fa-tag fa-2x"></i>新品</NavLink>
						</li>
						<li onClick={this.hideMenu.bind(this)}>
						<NavLink to="/homr"><i className="fa fa-credit-card-alt"></i>折扣</NavLink>
						</li>
						<li onClick={this.hideMenu.bind(this)}>
						<NavLink to="/homr"><i className="fa fa-clone fa-2x"></i>清单</NavLink>
						</li>
						<li onClick={this.hideMenu.bind(this)}>
						<NavLink to="/homr"><i className="fa fa-file-o fa-2x"></i>体验</NavLink>
						</li>
						<li onClick={this.hideMenu.bind(this)}>
						<NavLink to="/homr"><i className="fa fa-user-circle fa-2x"></i>体验师</NavLink>
						</li>
						<li onClick={this.hideMenu.bind(this)}>
						<NavLink to="/homr"><i className="fa fa-refresh fa-2x"></i>优品</NavLink>
						</li>
						<li onClick={this.hideMenu.bind(this)}>
						<NavLink to="/homr"><i className="fa fa-shopping-bag fa-2x"></i>商城</NavLink>
						</li>
						<li onClick={this.hideMenu.bind(this)}>
						<NavLink to="/homr"><i className="fa fa-cog fa-2x"></i>联系</NavLink>
						</li>
					</ul>
				</div>
				<div className="mark" onClick={this.hideMenu.bind(this)}></div>
			</div>
		)
	}
	flagChange() {
		this.setState(store.getState())
	}
	hideMenu() {
		let action={
			type:"HIDE_MENU"
		}
		store.dispatch(action)
	}
}
