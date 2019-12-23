import React from 'react';
import RegisterForm from './RegisterForm.js'
import jsonPlaceholder from '../../apis/jsonPlaceholder.js';
import $ from 'jquery';

var apiUrl = 'http://172.10.29.56:8000/api/v1'
const axios = require('axios');

class Login extends React.Component {

	constructor() {
		super();
		this.checkUserData = this.checkUserData.bind(this);
		this.registerCall = this.registerCall.bind(this);
		this.handleResponse = this.handleResponse.bind(this);
	}

    checkUserData(event){
    	event.preventDefault()
        $('#loader').show();
        $('.content').css('opacity', '0.2');
    	const username = event.target.elements.username.value;
    	const email = event.target.elements.email.value;
    	const password = event.target.elements.password.value;
    	const c_password = event.target.elements.c_password.value;
    	const first_name = event.target.elements.first_name.value;
    	const last_name = event.target.elements.last_name.value;
    	if(password===c_password){
    		this.registerCall(username,email,password,first_name,last_name)
    	}else{
    		$('.register-message').addClass('btn-danger').fadeIn().text("Password and Confirm Password does not match");
    		$('#loader').hide();
			$('.content').css('opacity', '1');
    	}
    }

	handleResponse(response) {
		$('#loader').hide();
		$('.content').css('opacity', '1');
	    if(response.status === 201){
	    	$('.register-message').removeClass('btn-danger');
	    	$('.register-message').addClass('btn-success').fadeIn().text("Register successful please login ");
	    	return response.data;
	    }
	    else{
	    	let error_data = response.data;
	        let message = Object.values(error_data).join("\n")
	        $('.register-message').addClass('btn-danger').fadeIn().text(message);
	    }
	}


	registerCall(username, email, password, first_name, last_name) {
	    let x = axios.post(`${apiUrl}/users/create`,{
	    		'username' : username, 
	    		'password' : password,
	    		'first_name' : first_name,
	    		'last_name' : last_name,
	    		'email' : email
	    	})
	        .then(this.handleResponse)
	        .catch((error) => {
	        	$('#loader').hide();
	        	$('.content').css('opacity', '1');
	        	let error_data = error.response.data;
	        	let message = Object.values(error_data).join("\n")
	        	$('.register-message').addClass('btn-danger').fadeIn().text(message);
		    });
	}

	render() {
		return (
			<div>
				<div className="info-alert">
					<p className="alert-message register-message"></p>
				</div>
				<RegisterForm userRegister={this.checkUserData} />
			</div>
		);
	} 

}

export default Login

