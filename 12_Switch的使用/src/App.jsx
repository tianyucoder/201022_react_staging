import React, { Component } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'
import Header from './components/Header'
import {NavLink,Route,Switch} from 'react-router-dom'

export default class App extends Component {
	render() {
		return (
			<div>
				<Header a="100"/>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* React中我们使用Link标签，实现地址的切换—————— 编写路由链接*/}
							<NavLink className="list-group-item" activeClassName="active" to="/about" >About</NavLink>
							<NavLink className="list-group-item" activeClassName="active" to="/home">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 制定规则————注册路由 */}
								<Switch>
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
									<Route path="/about" component={Test}/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
