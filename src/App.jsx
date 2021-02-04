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
	render() {
		//解构赋值获取todos
		const {todos} = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header/>
					{/* 给List组件传递todos做展示 */}
					<List todos={todos}/>
					<Footer/>
				</div>
			</div>
		)
	}
}
