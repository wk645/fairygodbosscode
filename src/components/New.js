import React from 'react';
import Responses from './Responses';
import Back from './Back';

// export default class New extends React.Component {

// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			title: "",
// 			user: "",
// 			message: "",
// 			date: ""
// 		}
// 	}

// 	render() {
		
// 		return (
			
// 			<div viewPostContainer>

// 			</div>
// 		)
// 	}
// }

const New = (props) => {

	console.log("in new", props.posts)

	let title = props.posts.map(p => p.title);
	let user = props.posts.map(p => p.user);
	let date = props.posts.map(p => p.date);
	let message = props.posts.map(p => p.message);

	return (
			<div className="viewPostContainer">
			<h1 className="viewPostTitle">{title}</h1>
			<p className="viewPostPoster">By: {user}    On: {date}</p>
			<br />
			<p className="viewPostMessage">{message}</p>
			<Back />
			<hr />

			<Responses />

		</div>
	)
}

export default New