import React from 'react';
// import Responses from './Responses';
// import Back from './Back';

const Post = (props) => {

	console.log("in post", props.posts)


	return (
		<div className="viewPostContainer">
			<hr />	
			<h1 className="viewPostTitle">{props.posts.title}</h1>
			<span className="viewPostPoster">By: {props.posts.user}</span>    <span className="date">On: {props.posts.date}</span>
			<br />
			<p className="viewPostMessage">{props.posts.message}</p>
			<hr />

		</div>
	)
}

export default Post