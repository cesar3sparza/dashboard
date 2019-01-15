import React, { Component } from 'react';
import Weather from './components/Weather';
import ToDo from './components/Todo';
import Nest from './components/Nest';
import appStyles from './appStyles';

class App extends Component {
  state = {
    tasks: {},
    projects: {},
    project: {},
    projectSelected: false,
    projectTasks: {},
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
      // const dashboardTasks = result.filter(dbt => dbt.project_id === 2198782583)
      this.setState({
        tasks: result,
        isTodoLoaded: true
      })
    })
  }

  fetchProjects = (projectUrl) => {
    fetch(projectUrl)
    .then(res => res.json())
    .then((result) => {
      this.setState({
        projects: result,
        isTodoLoaded: true
      })
    })
  }

  setProject = (event) => {
    const value = parseInt(event.target.value)
    const projectTasks = this.state.tasks.filter(pt => pt.project_id === value)
    // Set to 0 when no project selected, display all tasks, else only show tasks from select project 
    if(value !== 0){
      this.setState({
        project: event.target.value,
        projectTasks: projectTasks,
        projectSelected: true
      })
    } else {
      this.setState({
        project: {},
        projectTasks: this.state.tasks,
        projectSelected: false
      })
    }
  }

  markAsDone = (taskId, todoUrl) => {
    const remainingTasks = this.state.tasks.filter(t => t.id !== taskId)
    fetch(todoUrl + taskId, {method: 'post'})
    this.setState({
      tasks: remainingTasks
    })
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
          projects={this.state.projects}
          isTodoLoaded={this.state.isTodoLoaded}
          error={this.state.taskError} 
          fetchList={this.fetchList}
          fetchProjects={this.fetchProjects}
          setProject={this.setProject}
          projectSelected={this.state.projectSelected}
          project={this.state.project}
          projectTasks={this.state.projectTasks}
        />
        <Nest
          fetchCameras={this.fetchCameras}
          isLoaded={this.state.isNestLoaded}
          error={this.state.nestError}
          cameras={this.state.cameras}
        />
      </div>
    )
  }
}

export default App;
