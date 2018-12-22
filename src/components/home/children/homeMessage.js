
import React,{Component} from "react";
import {connect} from "react-redux";
import {message_action} from "../../../action/actionCreator";
import Swiper from "swiper";
import "../../../../node_modules/swiper/dist/css/swiper.css";

class Message extends Component {
	render() {
		let {messageState}=this.props
		//console.log(messageState)
		return (
			<div className="swiper-container_message" ref="message_per">
				<div className="message"><i className="fa fa-volume-off fa-2x"></i></div>
			    <div className="swiper-wrapper">
			    	{
			    		messageState.length>0?messageState.map((item,index)=>{
			    			return	<div className="swiper-slide" key={index}>
			    				<span className="play_name">{item.play_name}</span>
			    				<span className="username">{item.username}</span>
			    				{item.content}
			    			</div>
			    		}):""
			    	}
			    </div>
			    <div className="swiper-pagination banner_pes"></div>
			</div>
		)
	}
	componentDidMount() {
		this.props.getMessage()
		setTimeout(()=>{
			new Swiper(this.refs.message_per,{
				direction: 'vertical',
				loop:true,
				autoplay:true
			})
		},300)	
	}
}

const mapStateToProps=(state)=>({
	messageState:state.banner.messageState
})

const mapDispatchToProps=(dispatch)=>({
	getMessage() {
		dispatch(message_action())
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Message)
