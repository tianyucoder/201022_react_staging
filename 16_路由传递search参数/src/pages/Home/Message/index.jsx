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
									{/* 传递search参数时，将参数写在？后面，形如key=value & key=value这种形式*/}
									<Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}&content=${msgObj.content}`}>{msgObj.title}</Link>&nbsp;&nbsp;
								</li>
							)
						})
					}
				</ul>
				<hr/>
				{/* search参数，无需站位（无需声明接收）*/}
				<Route path="/home/message/detail" component={Detail}/>
			</div>
		)
	}
}
