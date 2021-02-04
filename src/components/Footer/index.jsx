import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
	render() {
		const {todos} = this.props
		const total = todos.length //总数
		const doneCount = todos.reduce((preValue,current) => preValue + (current.done ? 1 : 0),0)//已完成数量
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total!==0 }/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button onClick={this.props.deleteAllDone} className="btn btn-danger">清除已完成任务</button>
			</div>
		)
	}

	//全选or全不选的回调
	handleCheckAll = (event)=>{
		this.props.updateAll(event.target.checked)
	}

	// clearAllDone = ()=>{
	// 	//通知App删除所有已经完成的
	// 	this.props.deleteAllDone()
	// }
}
