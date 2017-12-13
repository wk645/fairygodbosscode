import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import { Route } from 'react-router-dom';
import Post from './components/Post';
import { withRouter } from 'react-router';
import AlertContainer from 'react-alert';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

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
  };

  addData = (data) => {
    data.id = this.state.posts.length + 1
    this.setState({
      posts: this.state.posts.concat(data)
    })
    this.props.history.push(`/post/${data.id}`)
  }

  goToPost = (data) => {
    this.props.history.push(`/post/${data.id}`)
  }

  render() {
  
    return (
    <div className="App">
    <Container fluid={true}>
    <Row>
    <Col xs="12">
      <Col xs="12">
      <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />

        <Route exact path="/" render={({history}) => <Home history={history} posts={this.state.posts} goToPost={this.goToPost} />} />

        <Route exact path="/new" render={({history}) => <Create addData={this.addData} history={history} />} />

        <Route path="/post/:id" render={({history}) => <Post history={history} posts={this.state.posts} />} />
      </Col>
    </Col>
    </Row>
    </Container>
    </div>
    );
  }
}

export default withRouter(App);