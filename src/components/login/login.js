import React from 'react';
import LoginForm from './LoginForm.js'
import './login.css'
import jsonPlaceholder from '../../apis/jsonPlaceholder.js';
import $ from 'jquery';

var apiUrl = 'http://172.10.29.56:8000/api/v1/rest-auth'
const axios = require('axios');

function authHeader() {
    // return authorization header with basic auth credentials
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.authdata) {
        return { 'Authorization': 'Basic ' + user.authdata };
    } else {
        return {};
    }
}


class Login extends React.Component {

	constructor() {
		super();
		this.checkUserData = this.checkUser.bind(this);
		this.loginCall = this.loginCall.bind(this);
		this.handleResponse = this.handleResponse.bind(this);
	}

	checkUser(event) {
		event.preventDefault()
		let username = event.target.elements.username.value;
		let password = event.target.elements.password.value
		$('.alert-message').removeClass('btn-danger');
        $('#loader').show();
        $('.content').css('opacity', '0.2');
		this.loginCall(username,password)
	}

	handleResponse(response) {
	    if(response.status === 200){
	    	return response.data;
	    }
	    else if (response.status === 400){
	    	debugger
	    }
	}


	loginCall(username, password) {
		let formData = new FormData();
		formData.append("username", username);
		formData.append("password", password);
	    let x = axios.post(`${apiUrl}/login/`,{'username' : username, 'password' : password})
	        .then(this.handleResponse)
	        .then(user => {
	            // login successful if there's a user in the response
	            if (user) {
	                // store user details and basic auth credentials in local storage 
	                user.authdata = window.btoa(username + ':' + password);
	                localStorage.setItem('user', JSON.stringify(user));
	            }
	            window.location.href = "/";
	            return user;
	        })
	        .catch((error) => {
	        	$('.content').css('opacity', 'inherit');
	            $('#loader').hide();
	        	if(!error.status){
	            	$('.alert-message').addClass('btn-danger').fadeIn().text("Coudn't connect to server please try later").append('<span class="close fa fa-times"></span>');
	        	}
	        	else{
	            	$('.alert-message').addClass('btn-danger').fadeIn().text("Invalid Username or Password.").append('<span class="close fa fa-times"></span>');
	        	}
	            setTimeout(function () { $('.alert-message').removeClass('btn-danger').fadeOut(); }, 5000);
	            $('.content').css('opacity', 'inherit');
	            $('#loader').hide();
		    });
	}

	render() {
		return (
			<div>
				<LoginForm checkuser={this.checkUserData} />
			</div>
		);
	} 

}

export default Login

