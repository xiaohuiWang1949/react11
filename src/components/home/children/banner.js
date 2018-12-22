
import React,{Component} from "react";
import {connect} from "react-redux";
import {banner_action} from "../../../action/actionCreator";
import Swiper from "swiper";
import "../../../../node_modules/swiper/dist/css/swiper.css";

class Banner extends Component {
	render() {
		let {bannerState}=this.props;
		//console.log(bannerState)
		return (
			<div className="swiper-container banner_per" ref="banner_per">
			    <div className="swiper-wrapper">
			    	{
			    		bannerState.length>0?bannerState.map((item,index)=>{
			    			return	<div className="swiper-slide img" key={index}>
			    			<img src={'http://s1.jiguo.com/'+item.fileid+'/640?imageView2/1/w/640/h/320/q/100'}/>
			    			</div>
			    		}):""
			    	}
			    </div>
			    <div className="swiper-pagination banner_pess"></div>
			</div>
		)
	}
	componentDidMount() {
		this.props.getBannerData()
		setTimeout(()=>{
			new Swiper(this.refs.banner_per,{
				loop:true,
				autoplay:true,
				pagination: {
			      el: '.banner_pess',
			    }
			})
		},300)	
	}
}

const mapStateToProps=(state)=>({
	bannerState:state.banner.bannerState
})

const mapDispatchToProps=(dispatch)=>({
	getBannerData() {
		dispatch(banner_action())
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Banner)
