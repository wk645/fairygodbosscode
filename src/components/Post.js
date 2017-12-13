import React from 'react';
import { withRouter } from 'react-router';
import Responses from './Responses';
import Back from './Back';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Button } from 'semantic-ui-react';

class Post extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			home: false
		}
	}

	handleClick = (event) => {
		event.preventDefault();
		this.props.goToPost(this.props.posts);
	}

	render() {

	let index = parseInt(this.props.history.location.pathname.split("/")[2], this.props.radix);

	let currentPost = this.props.posts[index - 1];
	
	let homePath = this.props.history.location.pathname === '/'

		return (
			<div>
				{ homePath
					? <div className="viewPostContainer">
						<hr className="newPostDivider" />	
						<h1 className="viewPostTitle">{this.props.posts.title}</h1>
						<span className="viewPostPoster">Posted By: {this.props.posts.user}</span>    <span className="date">On: {this.props.posts.date}</span>
						<br />
						<p className="viewPostMessage">{this.props.posts.message}</p>

						<Button onClick={this.handleClick} className="detailButton">Details</Button>
						<hr className="newPostDivider" />
					</div>

					: <Container>
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
				}
			</div>
		)
	}

}

export default withRouter(Post);