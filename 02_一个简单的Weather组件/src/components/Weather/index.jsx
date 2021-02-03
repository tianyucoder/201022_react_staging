import React from 'react'
import './index.css'

export default class Weather extends React.Component{
	state = {isHot:true}
	render(){
		return (
			<div className="w">
				<h2>今天天气很{this.state.isHot? '炎热' : '凉爽'}</h2>
				<button onClick={this.changeHot}>切换天气</button>
			</div>
		)
	}
	changeHot = ()=>{
		const {isHot} = this.state
		this.setState({isHot:!isHot})
	}
}
