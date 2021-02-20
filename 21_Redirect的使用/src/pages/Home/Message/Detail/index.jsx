import React, { Component } from 'react'

export default class Detail extends Component {
	render() {
		// console.log(this.props.location.pathname)
		const {id,title,content} = this.props.location.state
		return (
			<ul>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
				<li>CONTENT:{content}</li>
			</ul>
		)
	}
}
