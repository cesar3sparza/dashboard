import React from 'react';
import appStyles from '../appStyles';

class ToDo extends React.Component {
  todoUrl = 'http://localhost:5000/todo/';

  componentDidMount(){
    this.props.fetchList(this.todoUrl)
  }

  render(){
    const tasks = this.props.tasks;
    const error = this.props.error;
    const isTodoLoaded = this.props.isTodoLoaded;
    if(error){
      return <div>Error: {error.message}</div>;
    } else if(!isTodoLoaded){
      return <div>Loading...</div>;
    } else {
      return (
        <div className='todoApp' style={appStyles.todoApp}>
          <h2>ToDo</h2>
          <ul style={appStyles.ul}>
            {Object.keys(tasks).map(key => 
              {if(tasks[key].project_id === 2198782583){
                return ( 
                  <li 
                    key={key} 
                    index={tasks[key].id} 
                    style={appStyles.toDoItems} 
                    onClick={() => 
                      this.props.markAsDone(tasks[key].id, this.todoUrl)}>
                      Task: {tasks[key].content} 
                      TaskId: {tasks[key].id}
                  </li>
                  )
                }
              }
            )}
          </ul>
        </div>
      )
    }
  }
}

export default ToDo;