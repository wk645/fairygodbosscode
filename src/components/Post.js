import React from 'react';

const Post = (props) => {

	console.log("in post", props)

	// props.location.state.message

	return (
		<div>
			<p>{props.title}</p>
			<p>{props.message}</p>
			<p>{props.user}</p>

		</div>
	)
}

export default Post