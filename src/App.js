import React, { Component } from 'react';
import AssetsContainer from './components/AssetsContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AssetsContainer courseId="1"/>
      </div>
    );
  }
}

export default App;
