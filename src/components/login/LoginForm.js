import React from 'react';

class LoginForm extends React.Component {

	render() {
		return (
			<div className="login">
				<h2>
					<center>Login Here</center>
				</h2>
				<form className="form-group" onSubmit={this.props.checkuser}>
					<div>
						<input type='text' className="input100" name="username" required id="username" placeholder="Username" />
					</div>
					<div>
						<input type='password' className="input100" name="password" required id="password" placeholder="Password" />
					</div>
					<div className="submit-btn">
						<input type='submit' className="login100-form-btn" />
					</div>
				</form>
			</div>
		);
	}

}

export default LoginForm;

