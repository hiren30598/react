import React , {Component} from 'react'
import $ from 'jquery';

class Logout extends Component {

	render() {
	    // remove user from local storage to log user out
	    localStorage.removeItem('user');
	    $('.alert-message').removeClass('btn-danger');
        $('#loader').show();
        $('.content').css('opacity', '0.2');
	    window.location.href = "/";

	    return (
	    	null
	    )
	}
}


export default Logout;