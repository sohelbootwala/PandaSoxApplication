import React, { Component } from 'react'
import axios from 'axios'
class IdeasContainer extends Component {
	construtor(props){
		super(props)
		this.state = {
			ideas: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:3001/api/v1/ideas.json')
		.then(response => {
			console.log(response)
			this.setState({ideas: response.data})
		})
		.catch(error)
	}
	render() {
		return (
				<div className="">
				heres an idea!!!!
				</div>
			);
	}
}

export default IdeasContainer