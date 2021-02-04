import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
	//初始化状态
	state = {
		isEnter:false//标识鼠标是否移入当前Item
	}
	render() {
		//eslint-disable-next-line
		const {id,title,done} = this.props
		const {isEnter} = this.state
		return (
			<li 
				onMouseEnter={this.handleMouse(true)} 
				onMouseLeave={this.handleMouse(false)} 
				style={{backgroundColor:isEnter ? '#ddd' : 'white'}}
			>
				<label>
					<input type="checkbox" checked={done} onChange={this.handleChange(id)}/>
					<span>{title}</span>
				</label>
				<button 
					className="btn btn-danger" 
					style={{display:isEnter ? 'block' : 'none'}}
					onClick={this.handleDelete(id)}
				>
					删除
				</button>
			</li>
		)
	}

	//响应鼠标移入、移除的回调（精简写法）
	handleMouse = isEnter => ()=> this.setState({isEnter})

	//响应鼠标移入、移除的回调（复杂写法）
	/* handleMouse = (a)=>{
		return ()=>
			this.setState({isEnter:a})
		}
	} */

	//勾选 or 取消勾选一个todo的回调
	handleChange = (id)=>{
		//通知App将某个todo勾选 or 取消勾选
		return (event)=>{
			//调用App传递过来的updateTodo
			this.props.updateTodo(id,event.target.checked)
		}
	}

	//删除一个todo的回调
	handleDelete = (id)=>{
		return ()=>{
			//eslint-disable-next-line
			if(confirm('确定删除吗？')){
				//通知App去删除一个todo
				this.props.deleteTodo(id)
			}
		}
	}
	
}
