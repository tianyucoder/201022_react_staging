import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
	render() {
		const {users,isFirst,isLoading,errMsg} = this.props
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
