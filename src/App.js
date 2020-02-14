import React, { Component } from 'react';
import logo from './logo.svg';
import Posts from './components/Posts';
import Postform from './components/Postform';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Postform />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
