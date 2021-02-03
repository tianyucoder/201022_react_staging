import React from 'react'
import Weather from './components/Weather'
import './App.css'

export default class App extends React.Component{
	render(){
		return(
			<div className="a">
				<h2>我是App组件</h2>
				<Weather/>
			</div>
		)
	}
}