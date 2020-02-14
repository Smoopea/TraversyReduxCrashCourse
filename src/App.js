import React, { Component } from 'react';
import logo from './logo.svg';
import Posts from './components/Posts';
import Postform from './components/Postform';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
//Do I need to
