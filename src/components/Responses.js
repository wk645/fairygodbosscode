import React from 'react';
import Response from './Response';
import ReplyForm from './ReplyForm';
import { withRouter } from 'react-router';

class Responses extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			responses: []
		}
	}

	getResponses = (data) => {
		data.id = this.state.responses.length + 1;
		this.setState({
			responses: this.state.responses.concat(data)
		})
	}

	render() {

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

export default withRouter(Responses)
