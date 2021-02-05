import React, { Component } from 'react'

export default class A extends Component {

	render() {
		return (
			<div style={{backgroundColor:"skyblue",padding:'10px'}}>
				<h2>我是A组件，我可以开车：{this.props.che}</h2>
			</div>
		)
	}
}
