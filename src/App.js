import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import { Route } from 'react-router-dom';

class App extends Component {

  constructor() {
    super();

    this.state = {

    }
  }


  render() {
  
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Create} />
      </div>
  
    );
  }
}

export default App;

// <Route exact path="/" render={({history}) => <Home history={history} />} />