import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
	render() {
		//eslint-disable-next-line
		const {id,title,done} = this.props
		return (
			<li>
				<label>
					<input type="checkbox"/>
					<span>{title}</span>
				</label>
				<button className="btn btn-danger" style={{display:'none'}}>删除</button>
			</li>
		)
	}
}
