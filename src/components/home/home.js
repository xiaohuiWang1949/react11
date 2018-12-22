import React, { Component ,Fragment} from 'react';
import {HashRouter as Router,Route,Link,NavLink,Switch,Redirect} from "react-router-dom";
import BScroll from "better-scroll";
import {connect} from "react-redux";
import {List_Home_action,List_Home_action_limit} from "../../action/actionCreator";

import Headers from "../header/header";
import Banner from "./children/banner";
import Message from "./children/homeMessage";
import ListHome from "./children/homeList";

class Home extends Component {
	render() {
		let {listHomeState}= this.props;
		//console.log(listHomeState)
		return (
			<div className="box">
				<Headers />
				<div className="wrapper" ref="wrapper">
					<div className="content">
						<Banner />
						<Message />
						<ListHome listHomeState={listHomeState} />
					</div>
				</div>
			</div>
		)
	}
	componentDidMount() {
		this.props.getHomeList();
		this.scroll=new BScroll(this.refs.wrapper,{
			click: true,
			pullUpLoad: true,
			probeType:2
		});
		this.scroll.on("pullingUp",()=>{
			this.props.getHome(this.props.page)
		})
		//console.log(this.scroll)
	}
	componentDidUpdate() {
		this.scroll.refresh();
		this.scroll.finishPullUp();
	}
}

const mapStateToProps=(state)=>({
	listHomeState:state.banner.listHomeState,
	page:state.banner.page
})

const mapDispatchToProps=(dispatch)=>({
	getHomeList() {
		dispatch(List_Home_action())
	},
	getHome(params) {
		dispatch(List_Home_action_limit(params))
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
