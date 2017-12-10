import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import dateFormat from 'dateformat';
import AlertContainer from 'react-alert';

export default class Create extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			title: "",
			message: "",
			user: "",
			date: dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT")
		}
	}

	alertOptions = {
	    offset: 14,
	    position: 'top left',
	    theme: 'dark',
	    time: 3000,
	    transition: 'fade'
  	}

	handleCancel = (event) => {
		event.preventDefault();
		this.props.history.push('/');
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		});
	}

	handleCreate = (event) => {
		event.preventDefault();

		if (this.state.title && this.state.message && this.state.user !== "") {
			this.props.addData(this.state)
		} else {
			this.msg.error("You can't leave the fields empty!")
		}
	}

	render() {

		return (
			<div className="createForm">
      		<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
			
			<h1 className="createPostTitle">
				Create a New Post
			</h1>

			<Form onSubmit={this.handleCreate}>
				<Form.Field>
					<label className="inputTitle">Post Title:</label>
					<input className="inputTitleBox" placeholder="" fluid="true" onChange={this.handleChange} value={this.state.title} type="text" name="title" />
				</Form.Field>

				<Form.Field>
					<label className="messageBox">Message:</label>
					<input className="messageBox" placeholder="" fluid="true" onChange={this.handleChange} value={this.state.message} type="text" name="message" size="big" />
				</Form.Field>

				<Form.Field>
					<label className="inputUser">User:</label>
					<input className="inputUserBox" placeholder="" fluid="true" onChange={this.handleChange} value={this.state.user} type="text" name="user" />
				</Form.Field>
				
				<div className="createButtonDiv">
				<Button className="cancelButton" onClick={this.handleCancel}>Cancel</Button>
				<Button className="createButton">Create Post</Button>
				</div>

			</Form>

			</div>
		)
	}
}
