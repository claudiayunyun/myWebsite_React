import React, { Component } from 'react';
import '../CSS/clock.css';

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
		setInterval(()=> this.currentTime(), 500)
	}

	render() {
		const monthArray = ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		const dayArray = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		const hourArray = ['00','01','02','03','04','05','06','07','08']
		return (
			<div>
				<h4>Local Time:</h4>
				<h4 className = 'dateString'> {dayArray[this.state.time.getDay()]}, {monthArray[this.state.time.getMonth()]} {this.state.time.getDate()}, {this.state.time.getFullYear()}</h4>
				<h4> {this.state.time.getHours()} : {this.state.time.getMinutes()} : {this.state.time.getSeconds()}</h4>
			</div>
		)
	}

}

export { Clock };