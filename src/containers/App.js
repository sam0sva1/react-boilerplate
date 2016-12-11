import React, { Component } from 'react'
import './app.css'

export default class App extends Component {
	render() {
		return (
			<div className='app'>
				<div>Darth Vader welcomes you!</div>
				<img src='../static/dv.png' alt='logo' />
			</div>
		)
	}
}