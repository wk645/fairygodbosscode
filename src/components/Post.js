import React from 'react';
import Responses from './Responses';
import Back from './Back';
// import Reply from './Reply';

const Post = (props) => {

	console.log("in post", props)

	// props.location.state.message

	return (
		<div className="viewPostContainer">
			<h1 className="viewPostTitle">{props.title}</h1>
			<p className="viewPostPoster">By: {props.user}    On: {props.date}</p>
			<br />
			<p className="viewPostMessage">{props.message}</p>
			<Back />
			<hr />

			<Responses />

		</div>
	)
}

export default Post