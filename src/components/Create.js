import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import Post from './Post';

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
		console.log("clicked button")
		this.props.getData(this.state);
		this.props.history.push('/post');
	}

	render() {

	// let newPost = this.state.posts === true ? <Post data={this.state} /> : null

	let showPost = this.state.clickButton === true ? <Post title={this.state.title} message={this.state.message} user={this.state.user} /> : null

		return (
			<div className="createForm">
			<h1 className="createPostTitle">
				Create a New Post
			</h1>

			<Form onSubmit={this.handleCreate}>
				<Form.Field>
					<label className="inputTitle">Post Title:</label>
					<input  placeholder="" fluid="true" onChange={this.handleChange} value={this.state.title} type="text" name="title" />
				</Form.Field>

				<Form.Field>
					<label className="messageBox">Message:</label>
					<input  placeholder="" fluid="true" onChange={this.handleChange} value={this.state.message} type="text" name="message" />
				</Form.Field>

				<Form.Field>
					<label className="inputTitle">User:</label>
					<input placeholder="" fluid="true" onChange={this.handleChange} value={this.state.user} type="text" name="user" />
				</Form.Field>
				
				<Button className="cancelButton" onClick={this.handleCancel}>Cancel</Button>
				<Button className="createButton">Create Post</Button>
			</Form>

			{showPost}

			</div>
		)
	}
}
