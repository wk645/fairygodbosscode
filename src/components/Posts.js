import React from 'react';
import Post from './Post';

export default class Posts extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<div>
				<h1>Posts</h1>
				<Post />
			</div>
		)
	}
}