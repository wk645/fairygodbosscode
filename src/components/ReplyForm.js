import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import AlertContainer from 'react-alert';

export default class ReplyForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			message: "",
			user: ""
		}
	}

	alertOptions = {
	    offset: 14,
	    position: 'top left',
	    theme: 'dark',
	    time: 3000,
	    transition: 'fade'
  	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();

		if (this.state.message === "") {
			this.msg.error("You can't leave the message field empty!")
		} else if (this.state.user === "") {
			this.msg.error("You can't leave the user field empty!")
		} else {
			this.props.getComments(this.state);
			this.setState({ 
				message: "",
				user: ""
			})	
		}
	}

	render() {

		return (
			<Form onSubmit={this.handleSubmit}>
      		<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />

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