import {Component} from 'react'
import Count from './components/Count/Count'

export default class App extends Component{
	render(){
		return(
			<div>
				<h2>我是App组件</h2>
				<Count/>
			</div>
		)
	}
}