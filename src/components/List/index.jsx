import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
	render() {
		//获取App传递过来的todos、updateTodo(List不用，给Item用)
		const {todos,updateTodo} = this.props
		return (
			<ul className="todo-main">
				{
					todos.map((todoObj)=>{
						return <Item key={todoObj.id} {...todoObj} updateTodo={updateTodo}/>
					})
				}
			</ul>
		)
	}
}
