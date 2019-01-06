import React from 'react';
import appStyles from '../appStyles';

class ToDo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {}
    }
  }

  fetchList(){
    fetch(this.props.url)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          data: result
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
  }

  componentDidMount(){
    this.fetchList()
  }

  markAsDone(taskId){
    const confirmDone = window.confirm('Mark this task as Done?')
    if(confirmDone){
      console.log(taskId)
      fetch(this.props.url + '/' + taskId, {method: 'post'})
      .then(this.fetchList())
      .then(this.render())
    }
  }

  render(){
    const { error, isLoaded, data } = this.state;
    if(error){
      return <div>Error: {error.message}</div>;
    } else if(!isLoaded){
      return <div>Loading...</div>;
    } else {
      return (
        <div className='todoApp' style={appStyles.todoApp}>
          <h2>ToDo</h2>
          <ul style={appStyles.ul}>
            {Object.keys(data).map(key => 
              <li key={key} index={data[key].id} style={appStyles.toDoItems} onClick={() => this.markAsDone(data[key].id)}>{data[key].content}</li>
            )}
          </ul>
        </div>
      )
    }
  }
}

export default ToDo;