import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
	render() {
		return (
			<div className="todo-header">
				<input onKeyUp={this.handleAdd} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
			</div>
		)
	}

	//按下回车——响应添加的回调
	handleAdd = (event)=>{
		//从event中获取键盘码、事件源
		const {keyCode,target} = event
		//判断回车
		if(keyCode === 13){
			if(!target.value.trim()) return alert('输入不能为空')
			//将用户输入的文字，变成一个todo对象
			const todoObj = {id:Date.now(),title:target.value,done:false}
			//调用App传递过来的添加todo方法
			this.props.addTodo(todoObj)
			//清空用户输入
			target.value = ''
		}
	}
}
