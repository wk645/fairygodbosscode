import React from 'react';
import Message from './Message';
import { Button } from 'semantic-ui-react';
import Posts from './Posts';
import { withRouter } from 'react-router';

class Home extends React.Component {

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

	let message = this.props.posts.length === 0 ? <Message /> : <Posts posts={this.props.posts} goToPost={this.props.goToPost} comments={this.props.comments} />

		return (
			<div className="messageBoardContainer">
				<h1 className="homeTitle">The Fairygodboss Message Board</h1>
				<Button className="newPost" onClick={this.handleClick}>Create New Post</Button>
				{message}
			</div>
		)
	}
}

export default withRouter(Home)
