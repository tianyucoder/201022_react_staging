import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

	state = {
		users:[], //存储用户列表
		isFirst:true, //标识界面是否为初次展示
		isLoading:false,//标识请求是否处于加载中
		errMsg:''//存储请求过程中的错误信息
	}

	componentDidMount(){
		this.id =  PubSub.subscribe('peiqi',(_,data)=>{
			this.setState(data)
		})
	}

	componentWillUnmount(){
		PubSub.unsubscribe(this.id)
	}

	render() {
		const {users,isFirst,isLoading,errMsg} = this.state
		return (
			<div className="row">
				{
					isFirst ? <h1>欢迎使用!</h1> : 
					isLoading ? <h1>稍等，数据加载中......</h1> :
					errMsg ? <h1>{errMsg}</h1> :
					users.map((userObj)=>{
						return (
							<div className="card" key={userObj.login}>
								<a href={userObj.html_url} rel="noreferrer" target="_blank">
									<img alt="pic" src={userObj.avatar_url} style={{width: '100px'}}/>
								</a>
								<p className="card-text">{userObj.login}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}
