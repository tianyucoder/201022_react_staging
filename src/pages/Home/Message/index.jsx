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
									<Link 
										to={`/home/message/detail/${msgObj.id}/${msgObj.title}/${msgObj.content}`}
										/* to={{
											pathname:'/home/message/detail',
											state:{
												id:msgObj.id,
												title:msgObj.title,
												content:msgObj.content,
											} 
										}} */
									>
										{msgObj.title}
									</Link>&nbsp;&nbsp;
									<button onClick={this.show(msgObj,true)}>push查看</button>&nbsp;&nbsp;
									<button onClick={this.show(msgObj,false)}>replace查看</button>
								</li>
							)
						})
					}
				</ul>
				<button onClick={this.houtui}>←后退</button>
				<button onClick={this.qianjin}>前进→</button>
				<button onClick={this.demo}>测试一下go</button>
				<hr/>
				<Route path="/home/message/detail/:id/:title/:content" component={Detail}/>
			</div>
		)
	}

	show = (msgObj,isPush)=>{
		return ()=>{
			isPush ? this.props.history.push(`/home/message/detail/${msgObj.id}/${msgObj.title}/${msgObj.content}`) : 
			this.props.history.replace(`/home/message/detail/${msgObj.id}/${msgObj.title}/${msgObj.content}`)
		}
	}

	houtui = ()=>{
		this.props.history.goBack()
	}

	qianjin = ()=>{
		this.props.history.goForward()
	}

	demo = ()=>{
		this.props.history.go(-2)
	}


}
