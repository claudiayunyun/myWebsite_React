import React, { Component } from 'react';

class Clock extends Component {
	constructor() {
		super()
		this.state = {
			time: new Date()
		}
	}

	currentTime() {
		this.setState({
			time : new Date()
		})
	}

	componentWillMount() {
		setInterval(()=> this.currentTime(), 1000)
	}

	render() {
		return (
			<div>
				<h4> {this.state.time.toLocaleDateString()} </h4>
				<h4> {this.state.time.toLocaleTimeString()} </h4>
			</div>
		)
	}

}

export { Clock };