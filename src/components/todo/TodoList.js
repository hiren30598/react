import React from "react"

class TodoListData extends React.Component {

	constructor(props) {
		super(props);
		this.onClickClose = this.onClickClose.bind(this)
		this.chageStatus = this.chageStatus.bind(this)
	}

	onClickClose() {
		this.props.remove_data(this.props.index)
	}

	chageStatus() {
		this.props.change_status(this.props.index)	
	}

	render() {
		return (
			<div className="col-sm-12">
				<div className={'row ' + (this.props.message.done ? 'data-done' : 'data')}>
					<div className="col-sm-1">
						<i class="fa fa-check" aria-hidden="true" onClick={this.chageStatus}></i>
					</div>
					<div className="col-sm-9">
						{this.props.message.value}
					</div>
					<div className="col-sm-2">
						<button onClick={this.onClickClose}>&times;</button>
					</div>
				</div>
			</div>
		);
	}
}


function TodoList(props) {

	return (
		<div className="row">
				{
					props.message_list.map(
						(message,index) => (
							<TodoListData message={message} index={index} remove_data={props.remove_data} change_status={props.change_status}/>
						)
					)
				}
		</div>
	)
}

export default TodoList