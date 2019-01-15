import React from 'react';
import appStyles from '../appStyles';

class ToDo extends React.Component {
  todoUrl = 'http://localhost:5000/todo/';
  todoProjects = 'http://localhost:5000/todo/projects';

  componentDidMount(){
    this.props.fetchList(this.todoUrl)
    this.props.fetchProjects(this.todoProjects)
  }

  render(){
    const tasks = (this.props.projectSelected ? this.props.projectTasks : this.props.tasks);    
    const projects = this.props.projects;
    const error = this.props.error;
    const isTodoLoaded = this.props.isTodoLoaded;
    if(error){
      return <div>Error: {error.message}</div>;
    } else if(!isTodoLoaded){
      return <div>Loading...</div>;
    } else {
      return (
        <div className='todoApp' style={appStyles.todoApp}>
          <h2 style={appStyles.todoApp.h2}>ToDo</h2>
          <span 
            style={appStyles.reloadTasks} 
            onClick={() => this.props.fetchList(this.todoUrl)}>
            &#x21bb;
          </span>
          <select style={appStyles.todoApp.projectSelect} onChange={this.props.setProject} value={this.props.project}>
            <option value="0">Select a project...</option>
            {Object.keys(projects).map(key => 
              <option 
                key={projects[key].id}
                value={projects[key].id}>
                {projects[key].name}
              </option>
            )}
          </select>
          <ul style={appStyles.ul}>
          {Object.keys(tasks).map(key =>  
            <li 
              key={key} 
              index={tasks[key].id} 
              style={appStyles.toDoItems} 
              onClick={() => 
                this.props.markAsDone(tasks[key].id, this.todoUrl)}>
                {tasks[key].content}
            </li>
          )}
          </ul>
        </div>
      )
    }
  }
}

export default ToDo;