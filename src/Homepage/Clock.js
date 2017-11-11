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
		const hourArray = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
		const minuteArray = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20',
							 '21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40',
							 '41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'];
		return (
			<div>
				<h4>Local Time:</h4>
				<h4 className = 'dateString'> {dayArray[this.state.time.getDay()]}, {monthArray[this.state.time.getMonth()]} {this.state.time.getDate()}, {this.state.time.getFullYear()}</h4>
				<h4> 
					<div>{hourArray[this.state.time.getHours()]}</div>
					 :  
					<div>{minuteArray[this.state.time.getMinutes()]} </div>
					 : 
					<div>{minuteArray[this.state.time.getSeconds()]} </div>
				</h4>
			</div>
		)
	}

}

export { Clock };