import React from 'react';

const Response = (props) => {

	console.log("in response", props)

	return (
		<div className="replies">
			<p className="responseUser">{props.response.user}:</p>
			<p className="responseMessage">{props.response.message}</p>
		</div>
	)
}

export default Response
