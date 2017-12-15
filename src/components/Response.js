import React from 'react';
// import { withRouter } from 'react-router'

const Response = (props) => {

	// console.log("response", props);

	return (
		<div className="replies">
			<p className="responseUser">Posted By {props.comments.user}:</p>
			<p className="responseMessage">{props.comments.message}</p>
			<br />
			<hr className="replyDivider"/>
		</div>
	)
}

export default Response