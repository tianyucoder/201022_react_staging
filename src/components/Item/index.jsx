import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
	render() {
		//eslint-disable-next-line
		const {id,title,done} = this.props
		return (
			<li>
				<label>
					<input type="checkbox" checked={done} onChange={this.handleChange(id)}/>
					<span>{title}</span>
				</label>
				<button className="btn btn-danger" style={{display:'none'}}>删除</button>
			</li>
		)
	}

	//勾选 or 取消勾选一个todo的回调
	handleChange = (id)=>{
		//通知App将某个todo勾选 or 取消勾选
		return (event)=>{
			//调用App传递过来的updateTodo
			this.props.updateTodo(id,event.target.checked)
		}
	}
	
}
