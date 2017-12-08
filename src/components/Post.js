import React from 'react';
// import Responses from './Responses';
import Back from './Back';

const Post = (props) => {

	console.log("in post", props.posts)


	return (
		<div className="viewPostContainer">
			<h1 className="viewPostTitle">{props.posts.title}</h1>
			<p className="viewPostPoster">By: {props.posts.user}    On: {props.posts.date}</p>
			<br />
			<p className="viewPostMessage">{props.posts.message}</p>
			<hr />

		</div>
	)
}

export default Post