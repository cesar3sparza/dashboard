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
      const dashboardTasks = result.filter(dbt => dbt.project_id === 2198782583)
      this.setState({
        tasks: dashboardTasks,
        isTodoLoaded: true
      })
    })
  }

  markAsDone = (taskId, todoUrl) => {
    fetch(todoUrl + taskId, {method: 'post'})
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
        <Nest
          fetchCameras={this.fetchCameras}
          isLoaded={this.state.isNestLoaded}
          error={this.state.nestError}
          cameras={this.state.cameras}
        />
        <Weather url='http://localhost:5000/weather' />
        <ToDo
          markAsDone={this.markAsDone} 
          tasks={this.state.tasks}
          isTodoLoaded={this.state.isTodoLoaded}
          error={this.state.taskError} 
          fetchList={this.fetchList} 
        />
      </div>
    );
  }
}

export default App;
