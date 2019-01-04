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

  componentDidMount(){
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
          <ul>
            {Object.keys(data).map(key => 
              <li key={key} index={data[key].id}>{data[key].content}</li>
            )}
          </ul>
        </div>
      )
    }
  }
}

export default ToDo;