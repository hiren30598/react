import React from 'react'

function TodoForm(props) {
	return (
		<form onSubmit={props.save} className="form-group">
			<input type='text' name='note_message' id='note_message' placeholder="Add Your Message" className="form-control" required/>
			<input type='submit' value="Add Note" className="btn btn-primary"/>
		</form>
	);
}

export default TodoForm