import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
	render() {
		//获取App传递过来的todos
		const {todos} = this.props
		return (
			<ul className="todo-main">
				{
					todos.map((todoObj)=>{
						return <Item key={todoObj.id} {...todoObj}/>
					})
				}
			</ul>
		)
	}
}
