const defaultState = {
    serchList:[]
}

export default (state=defaultState,action)=>{
//console.log(action.type)
    switch(action.type){
        case "SERCH_LIST_FULFILLED":
        let serchListState = JSON.parse(JSON.stringify(state));
        serchListState.serchList = action.payload;
        return serchListState;
    }
    return state;
}