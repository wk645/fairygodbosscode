import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import { Route } from 'react-router-dom';
import New from './components/New';
import { withRouter } from 'react-router';
// import { Responsive, Segment } from 'semantic-ui-react';
import AlertContainer from 'react-alert';

class App extends Component {

  constructor() {
    super();

    this.state = {
      posts: []
    }
  }

  alertOptions = {
    offset: 14,
    position: 'top left',
    theme: 'dark',
    time: 3000,
    transition: 'fade'
  }

  addData = (data) => {
    // console.log("data", data);
    data.id = this.state.posts.length + 1
    this.setState({
      posts: this.state.posts.concat(data)
    })
    this.props.history.push(`/post/${data.id}`)
  }

  goToPost = (data) => {
    // console.log("details", data);
    this.props.history.push(`/post/${data.id}`)
  }

  // this.msg.success(`Welcome back ${res.user.username}!`)

  // this.msg.show("")
  
  render() {

  // console.log("app state", this.state);
  
    return (
      <div className="App">
      <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />

        <Route exact path="/" render={({history}) => <Home history={history} posts={this.state.posts} goToPost={this.goToPost} />} />

        <Route exact path="/new" render={({history}) => <Create addData={this.addData} history={history} />} />

        <Route path="/post/:id" render={({history}) => <New history={history} posts={this.state.posts} />} />

      </div>
    );
  }
}

export default withRouter(App);