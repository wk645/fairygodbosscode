import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import { Route } from 'react-router-dom';
import New from './components/New';
import { withRouter } from 'react-router';


class App extends Component {

  constructor() {
    super();

    this.state = {
      posts: []
    }
  }

  addData = (data) => {
    console.log("data", data);
    data.id = this.state.posts.length + 1
    this.setState({
      posts: this.state.posts.concat(data)
    })
    this.props.history.push(`/post/${data.id}`)
  }

  goToPost = (data) => {
    console.log("details", data);
    this.props.history.push(`/post/${data.id}`)
    // this.props.history.push(`/post/${event.target.value}`)
  }

  render() {

  console.log("app state", this.state);
  
    return (
      <div className="App">
        <Route exact path="/" render={({history}) => <Home history={history} posts={this.state.posts} goToPost={this.goToPost} />} />

        <Route exact path="/new" render={({history}) => <Create addData={this.addData} history={history} />} />

        <Route path="/post/:id" render={({history}) => <New history={history} posts={this.state.posts} />} />

      </div>
  
    );
  }
}

export default withRouter(App);