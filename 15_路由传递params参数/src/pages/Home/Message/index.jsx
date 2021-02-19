import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
	state = {
		messageArr:[
			{id:'001',title:'消息1',content:'加油，中国！'},
			{id:'002',title:'消息2',content:'加油，尚硅谷!'},
			{id:'003',title:'消息3',content:'加油，最棒的自己!'},
		]
	}
	render() {
		return (
			<div>
				<ul>
					{
						this.state.messageArr.map((msgObj)=>{
							return (
								<li key={msgObj.id}>
									{/* 传递params参数时，将参数变为路径的一部分*/}
									<Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}/${msgObj.content}`}>{msgObj.title}</Link>&nbsp;&nbsp;
								</li>
							)
						})
					}
				</ul>
				<hr/>
				{/* 接收params参数时，要提前站位(声明接收参数) */}
				<Route path="/home/message/detail/:id/:title/:content" component={Detail}/>
			</div>
		)
	}
}
