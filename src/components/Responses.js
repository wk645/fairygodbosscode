import React from 'react';
import Response from './Response';
// import ReplyForm from './ReplyForm';
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

	// console.log(this.props.comments);

	let response = this.props.comments.map((c, index) => <Response comments={c} key={index} />)

		return (
			<div className="responseContainer">

				<h3 className="responsesHeader">Responses</h3>
				{response}
				<hr className="divider" />
			</div>
		)
	}
}

export default withRouter(Responses)
