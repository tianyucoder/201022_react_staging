import { Component } from 'react'
import A from './components/A'
import B from './components/B'

export default class App extends Component {
	state = {car:'马自达·阿特兹'}

	render() {
		return (
			<div style={{backgroundColor:"orange",padding:'10px'}}>
				<h2>我是App组件</h2>
				<A che={this.state.car}/>
				<br/>
				<B huanche={this.huanche}/>
			</div>
		)
	}

	huanche = (mingzi)=>{
		console.log('App中huanche被调用了')
		this.setState({car:mingzi})
	}
}
