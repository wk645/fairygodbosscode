import React from 'react';
// import { withRouter } from 'react-router'

const Response = (props) => {

	return (
		<div className="replies">
			<p className="responseUser">Posted By {props.response.user}:</p>
			<p className="responseMessage">{props.response.message}</p>
			<br />
			<hr className="replyDivider"/>
		</div>
	)
}

export default Response