import React from 'react';
import Message from './Message';
import { Button } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';

export default class Home extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			posts: this.props
		}
	}

	handleClick = (event) => {
		event.preventDefault();
		this.props.history.push('/new');
	}

	render() {

	// console.log("home", this.props)
	// console.log(this.props.match)

	let message = this.props.posts.length === 0 ? <Message /> : <Posts posts={this.props.posts} />

		return (
			<div className="messageBoardContainer">
				<h1 className="homeTitle">The Fairygodboss Message Board</h1>
				{message}
				<Button className="newPost" onClick={this.handleClick}>Create New Post</Button>
			</div>
		)
	}
}