import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
	render() {
		// console.log('Header收到的props是：',this.props)
		return (
			<div className="row">
				<div className="col-xs-offset-2 col-xs-8">
					<div className="page-header">
						<h2>React Router Demo</h2>
						<button onClick={this.houtui}>←后退</button>
						<button onClick={this.jianjin}>前进→</button>
					</div>
				</div>
			</div>
		)
	}

	houtui = ()=>{
		this.props.history.goBack()
	}

	jianjin = ()=>{
		this.props.history.goForward()
	}

}

export default withRouter(Header)
