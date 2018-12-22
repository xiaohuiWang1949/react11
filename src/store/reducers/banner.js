
const defaultState={
	bannerState:[],
	messageState:[],
	listHomeState:[],
	limit:"",
	page:""
}

export default (state=defaultState,action)=>{
	//console.log(action.type)
	switch(action.type){
		case "BANNER_FULFILLED":
		let bannerStateChagge=JSON.parse(JSON.stringify(state));
		bannerStateChagge.bannerState=action.payload
		return bannerStateChagge
		case "MESSAGE_ACTION_FULFILLED":
		let massgeChange=JSON.parse(JSON.stringify(state));
		massgeChange.messageState=action.payload
		return massgeChange
		case "LIST_HOME_ACTION_FULFILLED":
		let listHomeChange=JSON.parse(JSON.stringify(state));
		listHomeChange.limit=action.payload.limit
		listHomeChange.listHomeState=[...listHomeChange.listHomeState,...action.payload.result]
		return listHomeChange
		case "LIST_HOME_ACTION_LIMIT_FULFILLED":
		let limitHomeChange=JSON.parse(JSON.stringify(state));
		limitHomeChange.page=limitHomeChange.limit
		limitHomeChange.limit=action.payload.limit
		limitHomeChange.listHomeState=[...limitHomeChange.listHomeState,...action.payload.result]
		return limitHomeChange
	}
	return state
}
