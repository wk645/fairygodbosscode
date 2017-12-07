import React from 'react';
import { Button, Form } from 'semantic-ui-react';
// import Posts from './Posts';

export default class Create extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			title: "",
			message: "",
			user: ""
		}
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
		// go to the single post
	}

	render() {

		console.log(this.state)

		return (
			<div className="createForm">
			<h1 className="createPostTitle">
				Create a New Post
			</h1>

			<Form>
				<Form.Field>
					<label>Post Title:</label>
					<input className="inputTitle" placeholder="" fluid="true" onChange={this.handleChange} value={this.state.title} type="text" name="title" />
				</Form.Field>
			</Form>
			<Form>
				<Form.Field>
					<label>Message:</label>
					<input className="messageBox" placeholder="" fluid="true" onChange={this.handleChange} value={this.state.message} type="text" name="message" />
				</Form.Field>
			</Form>
			<Form>
				<Form.Field>
					<label>User:</label>
					<input className="inputTitle" placeholder="" fluid="true" onChange={this.handleChange} value={this.state.user} type="text" name="user" />
				</Form.Field>
				
				<Button className="cancelButton" onClick={this.handleCancel}>Cancel</Button>
				<Button className="createButton" onClick={this.handleCreate}>Create Post</Button>
			</Form>



			</div>
		)
	}
}

				// <p className="postTitle">Post Title:
				// </p>
				// <Input className="inputTitle" placeholder="" fluid={true} onChange={this.handleChange} value={this.state.title} type="text" name="title" />

				// <p className="message">
				// 	Message:
				// </p>
				// <Input className="messageBox" placeholder="" fluid={true} onChange={this.handleChange} value={this.state.message} type="text" name="message" />

				// <p className="postUser">
				// 	User:
				// </p>
				// <Input className="inputTitle" placeholder="" fluid={true} onChange={this.handleChange} value={this.state.user} type="text" name="user" />
				// <br />