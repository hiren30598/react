import React, { Component } from 'react'
import { SubscribeButton, UnSubscribeButton } from './ChildButton.js'


class Message extends Component {

	constructor() {
		super()
		this.state = {
			message : "Welcome Guest",
			subscribed : false
		}
		this.changeMessage = this.changeMessage.bind(this)
		this.unChangeMessage = this.unChangeMessage.bind(this)
	}

	changeMessage() {
		this.setState({
			message : "Thank You For Subscribing",
			subscribed : true
		})
	}

	unChangeMessage() {
		this.setState({
			message : "Welcome Guest",
			subscribed : false
		})	
	}

	render() {
		return (
			<div className="content">
				<div className="message">
					<h1>{this.state.message}</h1>
					{ (!this.state.subscribed) ? <SubscribeButton greetHandler={this.changeMessage}/> : <UnSubscribeButton greetHandler={this.unChangeMessage}/> }
				</div>
			</div>
		);
	}
}

export default Message