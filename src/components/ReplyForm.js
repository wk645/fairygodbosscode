import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class ReplyForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			message: "",
			user: ""
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let array = [];
		let obj = Object.assign({}, this.state);
		array.push(obj);
		
		this.props.getResponses(array);

		this.setState({ 
			message: "",
			user: ""
		})
	}

	render() {

		return (
			<Form onSubmit={this.handleSubmit}>

				<Form.Field>
					<label className="replyMessage">Reply Message:</label>
					<input className="replyMessageBox" onChange={this.handleChange} value={this.state.message} type="text" name="message" fluid="true" />
				</Form.Field>
				<Form.Field>
					<label className="replyUser">Reply User:</label>
					<input className="replyUserBox" onChange={this.handleChange} value={this.state.user} type="text" name="user" fluid="true" />
				</Form.Field>

				<Button className="postReplyButton">Post Reply</Button>

			</Form>
		)
	}
}