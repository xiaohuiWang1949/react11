import React,{Component,Fragment} from "react";
import SerchInput from "./children/serchInput";
import SerchList from "./children/serchList";
import "./css/search.css"

import {connect} from "react-redux";
import {serch_action} from "../../action/actionCreator"





class Search extends Component {
	render() {
		let {serchList} = this.props;
//		console.log(serchList)
		return(
			<Fragment>
				<div id="search">
					<SerchInput />
					<SerchList serchLists={serchList}/>
				</div>
			</Fragment>
		)
	}
	componentDidMount(){
        this.props.getSerchData();
    }
}
const mapStateToProps = (state)=>({
    serchList:state.home.serchList
})

const mapDispatchToProps = (dispatch)=>({
    getSerchData(){
        dispatch(serch_action());
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Search)