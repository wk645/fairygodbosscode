import React from 'react';

const Response = (props) => {

	return (
		<div className="replies">
			<p className="responseUser">{props.response.user}:</p>
			<p className="responseMessage">{props.response.message}</p>
			<br />
			<hr />
		</div>
	)
}

export default Response
