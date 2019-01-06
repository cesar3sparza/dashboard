import React, { Component } from 'react';
import Weather from './components/Weather';
import ToDo from './components/Todo';
import Nest from './components/Nest';
import appStyles from './appStyles';

class App extends Component {
  render() {
    return (
      <div className="App" style={appStyles.main}>
        <h2 style={appStyles.appH2}>DASHBOARD</h2>
        <Weather url='http://localhost:5000/weather' />
        <ToDo url='http://localhost:5000/todo' />
        <Nest url='http://localhost:5000/nest' />
      </div>
    );
  }
}

export default App;
