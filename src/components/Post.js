import React from 'react';
import { Button } from 'semantic-ui-react';

const Post = (props) => {

	// console.log("in post", props.posts)
	console.log("in post", props)

	// console.log("in post", props.history)


	const handleClick = (event) => {
		event.preventDefault();
		props.goToPost(props.posts);
		console.log(event)
		// go to New of that id
	}

	return (
		<div className="viewPostContainer">
			<hr />	
			<h1 className="viewPostTitle">{props.posts.title}</h1>
			<span className="viewPostPoster">By: {props.posts.user}</span>    <span className="date">On: {props.posts.date}</span>
			<br />
			<p className="viewPostMessage">{props.posts.message}</p>
			<Button onClick={handleClick} className="detailButton">Details</Button>
			<hr />

		</div>
	)
}

export default Post