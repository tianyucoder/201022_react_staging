import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>我是App组件</h1>
				<button onClick={this.getStudentInfo}>获取学生的信息</button>
				<button onClick={this.getCarInfo}>获取汽车的信息</button>
			</div>
		)
	}

	getStudentInfo = ()=>{
		axios.get('http://localhost:3000/students').then(
			response => {console.log('成功了',response.data)},
			error => {console.log('失败了',error)}
		)
	}
	getCarInfo = ()=>{
		axios.get('http://localhost:3000/qiaozhi/cars').then(
			response => {console.log('成功了',response.data)},
			error => {console.log('失败了',error)}
		)
	}
}
