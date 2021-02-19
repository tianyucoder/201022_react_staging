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
									{/* 传递state参数时，to要写成一个对象，且包含pathname、state属性*/}
									<Link 
										to={{
											pathname:'/home/message/detail',
											state:{
												id:msgObj.id,
												title:msgObj.title,
												content:msgObj.content,
											} 
										}}
									>
										{msgObj.title}
									</Link>&nbsp;&nbsp;
								</li>
							)
						})
					}
				</ul>
				<hr/>
				{/* 传递state参数时，无需站位（无需声明接收） */}
				<Route path="/home/message/detail" component={Detail}/>
			</div>
		)
	}
}
