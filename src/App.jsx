import { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	//初始化状态
	state = {
		todos:[
			{id:'001',title:'抽烟',done:true},
			{id:'002',title:'喝酒',done:false},
			{id:'003',title:'烫头',done:true},
		]
	}

	//勾选 or 取消勾选一个todo
	updateTodo = (id,done)=>{
		const {todos} = this.state
		//作业
	}

	render() {
		//解构赋值获取todos
		const {todos} = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header/>
					{/* 给List组件：传递todos做展示，传递updateTodo给Item用 */}
					<List todos={todos} updateTodo={this.updateTodo}/>
					<Footer/>
				</div>
			</div>
		)
	}
}
