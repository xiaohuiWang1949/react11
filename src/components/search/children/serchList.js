import React, {
	Component
} from "react";


export default class SerchList extends Component {
	render() {
		let {
			serchLists
		} = this.props
		console.log(serchLists)
		return(
			<div className="serachContent">
			<p className="search-type-title">试用</p>
			<ul>
				{
					serchLists.length>0?serchLists.map((item,index)=>{
						return <li className="items" key={index}>
								<div>
									<div className="stream-box">
										<div className="stream-img">															
											<img src={'http://s1.jiguo.com/'+item.fileid+'/640?imageView2/1/w/640/h/320/q/100'} alt="没有图"/>
										</div>
										<div className="stream-right">
											<p className="stream-title ft14">{item.name}</p>
											<p className="stream-discount red mt10">
												<span className="red ft16">{item.follownum}</span> 
												<span className="gray ft12">申请</span>
											</p>
											<p className="stream-mall gray ft12">
												<span className="ft12 gray">
													<em dangerouslySetInnerHTML={{__html: item.status.title}} />
												</span>
											</p>
										</div>
									</div>
								</div>
							</li>
					}):"正在加载"
				}
			</ul>
			<div className="search-type-more">
				<a href="/mb/search/event.html?keyword=" className="block waves-effect waves-block">
					<div className="s-left">
      					查看更多试用 (<font id="seaech-event-num">2360</font>)
    				</div> 
    				<i className="icon icon-right-arrow"></i>
				</a>
			</div>
			<ul>
				{
					serchLists.length>0?serchLists.map((item,index)=>{
						return <li className="items" key={index}>
								<div>
									<div className="stream-box">
										<div className="stream-img">															
											<img src={'http://s1.jiguo.com/'+item.fileid+'/640?imageView2/1/w/640/h/320/q/100'} alt="没有图"/>
										</div>
										<div className="stream-right">
											<p className="stream-title ft14">{item.name}</p>
											<p className="stream-discount red mt10">
												<span className="red ft16">{item.follownum}</span> 
												<span className="gray ft12">申请</span>
											</p>
											<p className="stream-mall gray ft12">
												<em dangerouslySetInnerHTML={{__html: item.status.title}} />
											</p>
										</div>
									</div>
								</div>
							</li>
					}):"正在加载"
				}
			</ul>
			<div className="search-type-more">
				<a href="/mb/search/event.html?keyword=" className="block waves-effect waves-block">
					<div className="s-left">
      					查看更多文章 (<font id="seaech-event-num">2360</font>)
    				</div> 
    				<i className="icon icon-right-arrow"></i>
				</a>
			</div>
		</div>
		)
	}
}