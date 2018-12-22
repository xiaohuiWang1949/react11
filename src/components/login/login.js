import React,{Component,Fragment} from "react";

import Headers from "../header/header";

import "../../common/css/login.css";

export default class Login extends Component {
	render() {
		return (
			<div className="content">
				<Headers />
				<div className="user">
					<div className="method">
						<p>使用社交账号登录</p>
						<div className="imgs">
							<div><img src="http://cdn.jiguo.com/v2.0.3/images/007.png" />微信</div>
							<div><img src="http://cdn.jiguo.com/v2.0.3/images/008.png" />QQ</div>
							<div><img src="http://cdn.jiguo.com/v2.0.3/images/009.png" />新浪微博</div>
						</div>
						<p>使用极果账号登录</p>
					</div>
					<div className="go">
						<p>
							<i className="fa fa-phone fa-2x icon"></i>
							<input type="text" placeholder="手机号"/>
						</p>
						<p>
							<i className="fa fa-lock fa-2x icon"></i>
							<input type="text" placeholder="密码"/>
						</p>
					</div>
					<div className="btn"><button>登录</button></div>
					<div className="register">
						<span><a href="#">忘记密码？</a></span>
						<span><a href="#">立即注册</a></span>
					</div>
				</div>
			</div>
		)
	}
}
