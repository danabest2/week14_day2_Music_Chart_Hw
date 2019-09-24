import React, { Component } from 'react';
import SongContainer from './containers/SongContainer';
//import './App.css';

class App extends Component {
  render() {
      return (
        <div className="App">

          <header className="App-header">
            <h1 className="App-title">iTunes Top 20</h1>
          </header>

          <div>
            <SongContainer/>
          </div>

        </div>
    );
  }
}

export default App;
