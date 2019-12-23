import React from 'react';
import $ from "jquery";

const loginRequired = () => {
	$('.alert-message').addClass('btn-danger').fadeIn().text("You Must Required to login to access this").append('<span class="close fa fa-times"></span>');
	setTimeout(function () { $('.alert-message').removeClass('btn-danger').fadeOut(); }, 5000);
	return(
		null
	);
}

export default loginRequired