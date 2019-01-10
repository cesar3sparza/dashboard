import React, { Component } from 'react';
import Weather from './components/Weather';
import ToDo from './components/Todo';
import Nest from './components/Nest';
import appStyles from './appStyles';

class App extends Component {
  state = {
    tasks: {},
    taskError: null,
    isTodoLoaded: false,
    cameras: {},
    nestError: null,
    isNestLoaded: false    
  }

  fetchList = (todoUrl) => {
    fetch(todoUrl)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          tasks: result,
          isTodoLoaded: true
        })
      }
    )
  }

  markAsDone = (taskId, todoUrl) => {
    fetch(todoUrl + taskId, {method: 'post'})
    .then(res => res.json())
    .then(this.fetchList(todoUrl))
  }

  fetchCameras = (nestUrl) => {
    fetch(nestUrl)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          cameras: result.devices,
          isNestLoaded: true
        })
      }
    )
  }  

  render() {
    return (
      <div className="App" style={appStyles.main}>
        <h2 style={appStyles.appH2}>DASHBOARD</h2>
        <Weather url='http://localhost:5000/weather' />
        <ToDo
          markAsDone={this.markAsDone} 
          tasks={this.state.tasks}
          isTodoLoaded={this.state.isTodoLoaded}
          error={this.state.taskError} 
          fetchList={this.fetchList} 
        />
        <Nest
          fetchCameras={this.fetchCameras}
          isLoaded={this.state.isNestLoaded}
          error={this.state.nestError}
          cameras={this.state.cameras}
        />
      </div>
    );
  }
}

export default App;
