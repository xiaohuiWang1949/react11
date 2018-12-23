import React,{Component} from "react";
import {HashRouter as Router,Route,Link,NavLink,Switch,Redirect} from "react-router-dom";

import "../css/search.css"
export default class SerchInput extends Component{
    render(){
        return (
        <div className="search_header-box">
			<div className="search_header-inner">
				<div className="search_header-inner-box">
					<label>
						<input type="text" placeholder="搜索"/>
					</label>
				</div>
				<div className="search_btn-wrap">
					<div className="">
						<NavLink to="/home">取消</NavLink>
					</div>
				</div>
			</div>
		</div>	 
        )
    }
}