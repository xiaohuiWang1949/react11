
const defaultState={
	flag:false
}

export default (state=defaultState,action)=>{
	switch(action.type){
		case "SHOW_MENU":
		let flagChange=JSON.parse(JSON.stringify(state));
		flagChange.flag=true;
		return flagChange
	}
	switch(action.type){
		case "HIDE_MENU":
		let hideMenu=JSON.parse(JSON.stringify(state));
		hideMenu.flag=false;
		return hideMenu
	}
	return state
}
