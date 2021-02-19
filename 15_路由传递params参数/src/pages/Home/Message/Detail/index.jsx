import React, { Component } from 'react'

export default class Detail extends Component {
	render() {
		// console.log('Detail收到的参数是',this.props.match.params)
		const {id,title,content} = this.props.match.params //接收路由的params参数
		return (
			<ul>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
				<li>CONTENT:{content}</li>
			</ul>
		)
	}
}
