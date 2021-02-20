import React, { Component } from 'react'

export default class News extends Component {
	/* componentDidMount(){
		this.timer = setTimeout(()=>{
			//写一段代码，自动跳转到message路由
			this.props.history.replace('/home/message')
		},2000)
	} */

	/* componentWillUnmount(){
		clearTimeout(this.timer)
	} */
	render() {
		return (
			<ul>
				<li>news001</li>
				<li>news002</li>
				<li>news003</li>
			</ul>
		)
	}
}
