import React from 'react';

class RegisterForm extends React.Component {

	render() {
		return (
			<div className="register">
				<h2>
					<center>Register Here</center>
				</h2>
				<form className="form-group" onSubmit={this.props.userRegister}>
					<div>
						<input type='text' className="input100"  required  name="username" id="username" placeholder="Username" />
					</div>
					<div>
						<input type='text' className="input100" required  name="email" id="email" placeholder="Email" />
					</div>
					<div>
						<input type='password' className="input100"  required name="password" id="password" placeholder="Password" />
					</div>
					<div>
						<input type='password' className="input100" required  name="c_password" id="c_password" placeholder="ConfirmPassword" />
					</div>
					<div>
						<input type='text' className="input100"  name="first_name" id="first_name" placeholder="First Name" />
					</div>
					<div>
						<input type='text' className="input100"  name="last_name" id="last_name" placeholder="Last Name" />
					</div>
					<div className="submit-btn">
						<input type='submit' className="login100-form-btn" />
					</div>
				</form>
			</div>
		);
	}

}

export default RegisterForm;

