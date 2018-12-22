
import React,{Component} from "react";
import "../../../../node_modules/swiper/dist/css/swiper.css";


export default class ListHome extends Component {
	render() {
		let {listHomeState}=this.props;
		//console.log(listHomeState)
		return (
			<ul className="homeList">
				{
					listHomeState.length>0?listHomeState.map((item,index)=>{
						return <li key={index}>
							<h4>{item.title}</h4>
							<div className="img">
								<img src={'http://s1.jiguo.com/'+item.cover+'/640?imageView2/1/w/640/h/320/q/100'} />
								<div className="p">
									<span className="time">{item.addtime}</span>
									<div className="right">
										<span className="like"><i className="fa fa-thumbs-o-up"></i>{item.praise}</span>
										<span className="comments"><i className="fa fa-comment-o"></i>{item.is_featured}</span>
									</div>
								</div>
							</div>
							
						</li>
					}):""
				}
			</ul>
		)
	}
}
