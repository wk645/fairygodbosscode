import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Back = () => {

	return (
		<Link to="/">
			<Button className="backButton">Back to Posts</Button>
		</Link>
	)
}

export default Back