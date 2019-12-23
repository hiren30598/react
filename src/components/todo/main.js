import React from "react"
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"

import loginRequired from "../LoginRequired"

class Todo extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			message_list : []
		}

		this.addData = this.addData.bind(this)
		this.removeData = this.removeData.bind(this)
		this.changeToDone = this.changeToDone.bind(this)
	}

	addData(event) {
		event.preventDefault()
		const message = {
			value : event.target.elements.note_message.value,
			done : false
		};
		event.target.elements.note_message.value = "";
		this.setState({
			message_list : [ ...this.state.message_list, message]
		})
	}

	removeData(index) {
		this.state.message_list.pop(index);
		const new_message_list = this.state.message_list;
		this.setState({
			message_list : new_message_list
		})	
	}

	changeToDone(index) {
		const new_message_list = this.state.message_list;
		new_message_list[index].done = (this.state.message_list[index].done) ? false : true;
		this.setState({
			message_list : new_message_list
		})		
	}

	render() {
		const isLoggedIn = localStorage.user;
		if(!isLoggedIn) {
			return (
				<div id="todo" className="container">
					<div className="btn-danger">
						You Must Required to login to access Todo App
					</div>
				</div>
			);
		}else{
			return (
				<div id="todo" className="container">
					<TodoForm save={this.addData} />
					<TodoList message_list={this.state.message_list} remove_data={this.removeData} change_status={this.changeToDone} />
				</div>
			);
		}
	}
}


export default Todo