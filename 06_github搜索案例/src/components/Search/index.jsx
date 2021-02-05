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
		//发送网络请求前，维护App中的数据
		this.props.updateAppState({isFirst:false,isLoading:true,users:[],errMsg:''})
		//发送请求
		axios.get(`https://api.github.com/search/users?q=${value}`).then(
			response => {
				//从请求结果中获取所有用户
				const {items} = response.data
				//若请求成功，维护App中的数据
				this.props.updateAppState({isLoading:false,users:items,errMsg:''})
			},
			error => {
				//若请求失败，维护App中的数据
				this.props.updateAppState({isLoading:false,users:[],errMsg:error.message})
			}
		)
	}
}