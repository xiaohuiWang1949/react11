
import React,{Component} from "react";
import {connect} from "react-redux";
import Headers from "../header/header";
import {TYPOUT_LIST} from "../../action/actionCreator";

class Typout extends Component {
	render() {
		let {bannerState}=this.props;
		//console.log(bannerState)
		return (
			<div className="con">
			   <Headers />
               <div className="discount">
                    <ul>
                        <li>试用</li>
                    </ul>
               </div>
			</div>
		)
    }
    componentDidMount() {
        this.props.getData()
    }
}

const mapStateToProps=(state)=>({
    listState:state.typout.listState,
    page:state.typout.page
})

const mapDispatchToProps=(dispatch)=>({
    getData() {
        dispatch(TYPOUT_LIST())
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Typout)
