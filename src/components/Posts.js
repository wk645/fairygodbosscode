import React from 'react';
import Post from './Post';
import { withRouter } from 'react-router';

class Posts extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			posts: props.posts

		}
	}

	render() {

		// console.log(this.props.history)

	// console.log("in posts", this.props)

	let post = this.props.posts.length === 0 ? null : this.props.posts.map((p, index) => <Post posts={p} key={index} goToPost={this.props.goToPost} />)

	// console.log("mapped", post)

		return (
			<div>
			{post}
			</div>
		)
	}
}

export default withRouter(Posts);