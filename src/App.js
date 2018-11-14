import React, { Component } from 'react';
import AssetsContainer from './components/AssetsContainer'
import NewAssetForm from './components/NewAssetForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AssetsContainer courseId="1"/>
        <NewAssetForm />
      </div>
    );
  }
}

export default App;
