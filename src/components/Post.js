import React from 'react';
import { Button } from 'semantic-ui-react';

const Post = (props) => {

	const handleClick = (event) => {
		event.preventDefault();
		props.goToPost(props.posts);
	}

	return (
		<div className="viewPostContainer">
			<hr className="newPostDivider" />	
			<h1 className="viewPostTitle">{props.posts.title}</h1>
			<span className="viewPostPoster">Posted By: {props.posts.user}</span>    <span className="date">On: {props.posts.date}</span>
			<br />
			<p className="viewPostMessage">{props.posts.message}</p>
			<Button onClick={handleClick} className="detailButton">Details</Button>
			<hr className="newPostDivider" />

		</div>
	)
}

export default Post