import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import { Route } from 'react-router-dom';
import Post from './components/Post';


class App extends Component {

  constructor() {
    super();

    this.state = {
      title: "",
      message: "",
      user: "",
      date: "",
    }
  }

  getData = (data) => {
    this.setState({
      title: data.title,
      message: data.message,
      user: data.user,
      date: data.date

    })
  }

  render() {

    console.log(this.state.date, "in app")
  
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/new" render={({history}) => <Create getData={this.getData} history={history} />} />
        <Route exact path="/post" render={({history}) => <Post history={history} title={this.state.title} message={this.state.message} user={this.state.user}  />} />

      </div>
  
    );
  }
}

export default App;