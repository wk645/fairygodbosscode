import React from 'react';
import Response from './Response';
import ReplyForm from './ReplyForm';

export default class Responses extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			responses: []
		}
	}

	getResponses = (data) => {
		console.log(data);

		this.setState({
			responses: data
		})
	}

	render() {

	console.log("state", this.state.responses);

	let response = this.state.responses.map((resp, index) => <Response response={resp} key={index} />)

		return (
			<div className="responseContainer">

				<h3 className="responsesHeader">Responses</h3>
				{response}
				<hr className="divider" />
				<ReplyForm getResponses={this.getResponses} />
			</div>
		)
	}
}
