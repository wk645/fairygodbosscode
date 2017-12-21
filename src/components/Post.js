import React from 'react';
import { withRouter } from 'react-router';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Button } from 'semantic-ui-react';
import Back from './Back';
import ReplyForm from './ReplyForm';
import Responses from './Responses';

class Post extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			post: this.props.posts,
			comments: []
		}
	}

	handleClick = (event) => {
		event.preventDefault();
		this.props.goToPost(this.props.posts);
	}

	// create a comment, make it belong to a post. Render comments related to that post.

	getComments = (data) => {
    // create an empty comments array in the single post and push into the comment
	    data.id = this.state.comments.length + 1;
	    this.setState({
	      comments: this.state.comments.concat(data)
	 	});
  	}	

	render() {

	console.log("comments in Post", this.state.comments);

	let index = parseInt(this.props.history.location.pathname.split("/")[2], this.props.radix);

	let currentPost = this.props.posts[index - 1];

	// console.log("current", currentPost);
	// console.log("history", this.props.history);
	
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
								<Responses comments={this.state.comments} />
								<ReplyForm getComments={this.getComments} />
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