import React, { Component } from 'react';

import Todolists from './components/Todolists.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todolists />
      </div>
    );
  }
}

export default App;
