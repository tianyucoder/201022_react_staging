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
					<Header addTodo={this.addTodo}/>
					{/* 给List组件：传递todos做展示，传递updateTodo给Item用，传递deleteTodo给Item用 */}
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
					<Footer todos={todos} updateAll={this.updateAll} deleteAllDone={this.deleteAllDone}/>
				</div>
			</div>
		)
	}

	//更新一个todo
	updateTodo = (id,done)=>{
		//获取todos
		const {todos} = this.state
		//根据传递过来的id和done值，更新指定的todo
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.id === id) todoObj.done = done
			return todoObj
		})
		//更新状态
		this.setState({todos:newTodos})
	}

	//添加一个todo
	addTodo = (todoObj)=>{
		//获取原来的todos
		const {todos} = this.state
		//更新todos，将传递过来的todoObj追加到todos数组前方
		this.setState({todos:[todoObj,...todos]})
	}

	//删除一个todo
	deleteTodo = (id)=>{
		//获取状态中原来的todos
		const {todos} = this.state
		//过滤
		const newTodos = todos.filter( todoObj => todoObj.id !== id)
		//更新state
		this.setState({todos:newTodos})
	}

	//全选 or 全不选
	updateAll = (done)=>{
		//获取原来的todos
		const {todos} = this.state
		//更改所有todo的done值
		const newTodos = todos.map((todoObj)=>{
			return {...todoObj,done}
		})
		//更新state
		this.setState({todos:newTodos})
	}

	//删除所有已经完成的
	deleteAllDone = ()=>{
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return todoObj.done === false
		})
		this.setState({todos:newTodos})
	}
}
