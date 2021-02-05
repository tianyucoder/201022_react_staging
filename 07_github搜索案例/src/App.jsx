import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
	state = {
		users:[], //存储用户列表
		isFirst:true, //标识界面是否为初次展示
		isLoading:false,//标识请求是否处于加载中
		errMsg:''//存储请求过程中的错误信息
	}

	render() {
		return (
			<div id="app">
				<div className="container">
					<Search updateAppState={this.updateAppState}/>
					<List {...this.state}/>
				</div>
			</div>
		)
	}

	//保存用户列表
	updateAppState = (obj)=>{
		this.setState(obj)
	}


}
