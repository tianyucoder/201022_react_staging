import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
	render() {
		const {users} = this.props
		return (
			<div className="row">
				{
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
