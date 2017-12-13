import React from 'react';
import { withRouter } from 'react-router';
import Responses from './Responses';
import Back from './Back';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

class Post extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

		}
	}

	handleClick = (event) => {
		event.preventDefault();
	}

	render() {

	console.log(this.props.history);

	let index = parseInt(this.props.history.location.pathname.split("/")[2], this.props.radix);

	let currentPost = this.props.posts[index - 1];

		return (
		<Container>
				<Row>
					<Col xs="12">
						<Col xs="12">
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

}

export default withRouter(Post);

// const Post = (props) => {

// 	const handleClick = (event) => {
// 		event.preventDefault();
// 		props.goToPost(props.posts);
// 	}

// 	console.log(props.posts)

// 	return (
// 		<div className="viewPostContainer">
// 			<hr className="newPostDivider" />	
// 			<h1 className="viewPostTitle">{props.posts.title}</h1>
// 			<span className="viewPostPoster">Posted By: {props.posts.user}</span>    <span className="date">On: {props.posts.date}</span>
// 			<br />
// 			<p className="viewPostMessage">{props.posts.message}</p>

// 			<Button onClick={handleClick} className="detailButton">Details</Button>
// 			<hr className="newPostDivider" />

// 		</div>
// 	)
// }

// export default withRouter(Post)