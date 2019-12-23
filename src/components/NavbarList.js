import React from 'react'

function GenerateLi(props) {
	return (
		<li>
			<a href={props.data.link}>{props.data.name}</a>
			{
				(props.data.sublinks) && (
					<ul className="sublinks">
						{
							props.data.sublinks.map(
								element => (
									<li>{element.name}</li>
								)
							)
						}
					</ul>
				)
			}
		</li>
	);
}

class NavbarList extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			elementList : props.element
		}
	}

	elements() {
		return ( 
			this.state.elementList.map(element => (
					<GenerateLi data={element} />
				)
			) 
		);
	}

	render() {
		return (
			<ul>
				{this.elements()}
			</ul>
		);
	};
}

export default NavbarList
