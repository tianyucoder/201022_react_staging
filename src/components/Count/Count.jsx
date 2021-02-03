import React, { Component } from 'react'

export default class Count extends Component {
	state = {sum:0}
	render() {
		return (
			<div>
				<h2>当前求和为:{this.state.sum}</h2>
				<button onClick={this.add}>+1</button>
			</div>
		)
	}
	add = ()=>{
		const {sum} = this.state
		this.setState({sum:sum+1})
	}
}
