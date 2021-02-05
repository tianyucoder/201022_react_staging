import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<div className="container">
					<Search/>
					<List/>
				</div>
			</div>
		)
	}
}
