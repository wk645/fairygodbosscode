import React from 'react';
// import Post from './Post';

export default class Posts extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			posts: props.posts

		}
	}

	render() {

	// let post = this.props.posts.map((post, index) => <Post post={post} key={index} />)

		return (
			<div>
				<h1>Posts</h1>
				
			</div>
		)
	}
}

// pass Post props up to App.js down to Posts.js
