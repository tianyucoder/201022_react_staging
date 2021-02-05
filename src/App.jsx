import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
	state = {
		users:[] //存储用户列表
	}

	render() {
		return (
			<div id="app">
				<div className="container">
					<Search saveUsers={this.saveUsers}/>
					<List users={this.state.users}/>
				</div>
			</div>
		)
	}

	//保存用户列表
	saveUsers = (users)=>{
		this.setState({users})
	}
}
