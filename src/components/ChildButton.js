import React from 'react'

function SubscribeButton(props) {
	return (<button onClick={props.greetHandler} className="login100-form-btn">Subscribe</button>);
}


function UnSubscribeButton(props) {
	return (<button onClick={props.greetHandler} className="login100-form-btn">UnSubscribe</button>);
}

export { SubscribeButton,UnSubscribeButton } 