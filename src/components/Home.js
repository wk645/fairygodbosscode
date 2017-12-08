import React from 'react';
import Message from './Message';
import Posts from './Posts';
import { Button } from 'semantic-ui-react';

export default class Home extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			posts: [],
			showMessage: true
		}
	}

	handleClick = (event) => {
		event.preventDefault();
		this.props.history.push('/new');
	}

	render() {

	let message = this.state.posts === null ? <Posts /> : <Message /> 

		return (
			<div className="messageBoardContainer">
				<h1 className="homeTitle">The Fairygodboss Message Board</h1>
					
					{message}
				
				<Button className="newPost" onClick={this.handleClick}>Create New Post</Button>
			</div>
		)
	}
}