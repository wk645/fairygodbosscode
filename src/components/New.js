import React from 'react';
import Responses from './Responses';
import Back from './Back';

const New = (props) => {

	let index = parseInt(props.history.location.pathname.split("/")[2]);

	console.log(index)

	let currentPost = props.posts[index-1]

	return (
			<div className="viewPostContainer">
			<hr />
			<h1 className="viewPostTitle">{currentPost.title}</h1>
			<p className="viewPostPoster">By: {currentPost.user}    On: {currentPost.date}</p>
			<br />
			<p className="viewPostMessage">{currentPost.message}</p>
			<Back />
			<hr />

			<Responses />

		</div>
	)
}

export default New