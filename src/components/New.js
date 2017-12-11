import React from 'react';
import Responses from './Responses';
import Back from './Back';
import { withRouter } from 'react-router';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const New = (props) => {

	console.log(props.history)

	let index = parseInt(props.history.location.pathname.split("/")[2], props.radix);

	let currentPost = props.posts[index-1]
	
	return (
	<Container>
		<Row>
			<Col xs="12">
			<Col md="4">
				<div className="viewPostContainer">

				<h1 className="viewPostTitle">{currentPost.title}</h1>
				<span className="viewPostPoster">Posted By: {currentPost.user}</span>    <span className="date">On: {currentPost.date}</span>
				<br />
				<p className="viewPostMessage">{currentPost.message}</p>
				<Back />
				<hr className="newPostDivider" />

				<Responses />
				</div>
			</Col>
			</Col>
		</Row>
	</Container>
	)
}

export default withRouter(New)