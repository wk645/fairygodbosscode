import React from 'react';
import Responses from './Responses';
import Back from './Back';

const New = (props) => {

	let index = parseInt(props.history.location.pathname.split("/")[2], props.radix);

	let currentPost = props.posts[index-1]
	
	return (
			<div className="viewPostContainer">

			<h1 className="viewPostTitle">{currentPost.title}</h1>
			<span className="viewPostPoster">Posted By: {currentPost.user}</span>    <span className="date">On: {currentPost.date}</span>
			<br />
			<p className="viewPostMessage">{currentPost.message}</p>
			<Back />
			<hr className="newPostDivider" />

			<Responses />

		</div>
	)
}

export default New