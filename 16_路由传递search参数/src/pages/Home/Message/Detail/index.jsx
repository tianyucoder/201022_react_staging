import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {
	render() {
		//接收search参数
		console.log('@',this)
		const {search} = this.props.location
		const {id,title,content} = qs.parse(search.slice(1))
		return (
			<ul>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
				<li>CONTENT:{content}</li>
			</ul>
		)
	}
}
