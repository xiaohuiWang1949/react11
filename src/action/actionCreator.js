
import {fetch} from "whatwg-fetch";


//http://m.jiguo.com/api/event/GetMbBannerList

export const banner_action=()=>({
	type:"BANNER",
	payload: new Promise(resolve=>{
		let url="/api/event/GetMbBannerList"
		fetch(url)
		.then(res=>res.json())
		.then((data)=>{
			//console.log(data)
			resolve(data.result)
		})
	})
})

//http://m.jiguo.com/api/event/getBulletins

export const message_action=()=>({
	type: "MESSAGE_ACTION",
	payload: new Promise(resolve=>{
		let url="/api/event/getBulletins"
		fetch(url)
		.then((res)=>res.json())
		.then((data)=>{
			//console.log(data.result)
			resolve(data.result)
		})
	})
})

//http://m.jiguo.com/api/article/GetArticleList?sys=mb&limit=1545372000&size=10
//http://m.jiguo.com/api/article/GetArticleList?sys=mb&limit=1545284027&size=10
export const List_Home_action=()=>({
	type: "LIST_HOME_ACTION",
	payload: new Promise(resolve=>{
		let url="/api/article/GetArticleList?sys=mb&limit=&size=10"
		fetch(url)
		.then((res)=>res.json())
		.then((data)=>{
			//console.log(data.result)
			resolve(data)
		})
	})
})

export const List_Home_action_limit=(page)=>({
	type: "LIST_HOME_ACTION_LIMIT",
	payload: new Promise(resolve=>{
		if(page!="undefined") {
			let url="/api/article/GetArticleList?sys=mb&limit="+page+"&size=10"
			fetch(url)
			.then((res)=>res.json())
			.then((data)=>{
				//console.log(data.result)
				resolve(data)
			})
		}
		
	})
})


//http://m.jiguo.com/api/event/mbevent?sys=mb&limit=&size=10
export const TYPOUT_LIST=(page)=>({
	type: "TYPOUT_LIST",
	payload: new Promise(resolve=>{
		let url="/api/event/mbevent?sys=mb&limit=&size=10"
		fetch(url)
		.then((res)=>res.json())
		.then((data)=>{
			console.log(data.result)
			resolve(data)
		})		
	})
})