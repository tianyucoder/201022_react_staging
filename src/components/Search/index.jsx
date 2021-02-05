import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">Search Github Users</h3>
				<div>
					<input ref={c => this.keyWord = c} type="text" placeholder="enter the name you search"/>&nbsp;
					<button onClick={this.search}>Search</button>
				</div>
			</section>
		)
	}

	search =()=>{
		//获取用户输入的关键字
		const {value} = this.keyWord
		//校验数据
		if(!value.trim()) return alert('搜索值不能为空')
		//发送请求
		axios.get(`https://api.github.com/search/users?q=${value}`).then(
			response => {
				// console.log('成功',response.data.items)
				this.props.saveUsers(response.data.items)
			},
			error => {console.log('失败了',error)}
		)
	}
}