import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './components/Name.js'
import FullName from './components/Name.js'
import Hello from './components/Hello.js'
import Message from './components/Message.js'
import NavbarList from './components/NavbarList.js'
import Todo from './components/todo/main.js'

function App() {

	const elementList = [
					{ 
						'name' : 'Home', 
						'link' : '/' 
					},
					{ 
						'name' : 'Login', 
						'link' : '/login' 
					},
					{ 
						'name' : 'Register', 
						'link' : '/' 
					},
					{ 
						'name' : 'Todo', 
						'link' : '/todo' 
					},
					{ 
						'name' : 'Contact Us', 
						'link' : '/' 
					},
					{ 
						'name' : 'Page', 
						'link' : '/', 
						'sublinks' : [
							{ 'name' : 'link 1' },
							{ 'name' : 'link 2' },
						] 
					},
				]
	return ( 
		<div className="App"> 
			<nav>
				<NavbarList element={elementList} />
			</nav>
		</div> 
	); 
}

export default App;
