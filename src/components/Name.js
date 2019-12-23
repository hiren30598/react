import React , {Component} from 'react'

const Name = (props) => {
	return (
		<div>
			<h1>
				Name : {props.name} Hero Name : {props.heroName}
			</h1>
			{props.children}
		</div>
	);
}



class FullName extends Component {
	render() {
		return (
			<div className="full-name">
				<p>Name {this.props.name}</p>
				{this.props.children}
			</div>
		);
	}

}

FullName.defaultProps = { 
    name: ['Ram', 'Shyam', 'Raghav'] 
} 

export default FullName;