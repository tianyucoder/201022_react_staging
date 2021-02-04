import React, { Component } from 'react'

export default class B extends Component {
	render() {
		return (
			<div style={{backgroundColor:"gray",padding:'10px'}}>
				<h2>我是B组件</h2>
				<button onClick={this.changeCar}>换车</button>
			</div>
		)
	}
	changeCar = ()=>{
		this.props.huanche('奥拓')
	}
}
