import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import { Route } from 'react-router-dom';
import New from './components/New';


class App extends Component {

  constructor() {
    super();

    this.state = {
      posts: []
    }
  }

  addData = (data) => {
    console.log("data", data);
    this.setState({
      posts: this.state.posts.concat(data)
    })
  }

  render() {

  // console.log("app state", this.state.posts);
  
    return (
      <div className="App">
        <Route exact path="/" render={({history}) => <Home history={history} posts={this.state.posts} />} />

        <Route exact path="/new" render={({history}) => <Create addData={this.addData} history={history} />} />

        <Route exact path="/post" render={({history}) => <New history={history} posts={this.state.posts} />} />

      </div>
  
    );
  }
}

export default App;