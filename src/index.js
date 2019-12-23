import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todo from './components/todo/main.js'
import Message from './components/Message.js'
import Login from './components/login/login.js'
import Register from './components/register/register.js'
import Logout from './components/logout.js'

import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import loader from './LeafyFormalIndianhare-max-1mb.gif';


const routing = (
  <Router>
    <div>
        <div className="App">
	      	<nav>
	        	<ul>
					<li>
					  <Link to="/">Home</Link>
					</li>
					{ 
						(!localStorage.user) ? <li><Link to="/login">Login</Link></li>:<li><Link to="/profile">Profile</Link></li>
					}
										{ 
						(!localStorage.user) ? <li><Link to="/register">Register</Link></li>:<li><Link to="/logout">Logout</Link></li>
					}
					<li>
					  <Link to="/todo">Todo</Link>
					</li>
	          	</ul>
	        </nav>
	        <div id="loader" style={{ 'display': 'none'}}>
                    <img src={loader} style={{ 'width': '100%', 'height': 'auto' }} alt="" />
            </div>
	    </div>
	  <div className="content" >
	      	<div className="info-alert">
					<p className="alert-message"></p>
			</div>
			<Route exact path="/" component={Message} />
			<Route path="/todo" component={Todo} />
			<Route path="/login" component={Login} />
			<Route path="/logout" component={Logout} />
			<Route path="/register" component={Register} />
	</div>

    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
