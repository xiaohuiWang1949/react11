
import React,{Component} from "react";
import {connect} from "react-redux";
import {banner_action} from "../../action/actionCreator";
import Headers from "../header/header";

export default class Discount extends Component {
	render() {
		let {bannerState}=this.props;
		//console.log(bannerState)
		return (
			<div className="con">
			   <Headers />
               <div className="discount">
                    <ul>
                        <li>折扣店</li>
                    </ul>
               </div>
			</div>
		)
	}
}
