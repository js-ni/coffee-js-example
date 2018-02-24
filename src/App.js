import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Page from './components/Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Page>
          {this.props.children}
        </Page>
      </div>
    );
  }
}

export default App;
