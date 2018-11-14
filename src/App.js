import React, { Component } from 'react';
import AssetsContainer from './components/AssetsContainer'
import NewAssetForm from './components/NewAssetForm'
import './App.css';
import { CourseAdapter } from './adapters';

class App extends Component {
  componentDidMount() {
    CourseAdapter.getOne(1)
      .then((resp) => {
        console.log('resp:', resp );
      })
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to Biology</h1>
        <AssetsContainer courseId="1"/>
        <NewAssetForm courseId="1"/>
      </div>
    );
  }
}

export default App;
