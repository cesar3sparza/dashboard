import React from 'react';
import nestStyles from '../nestStyles';

class Nest extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {}
    }
  }

  fetchCameras(){
    fetch(this.props.url,{})
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          data: result.devices
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  componentDidMount(){
    this.fetchCameras();
    setInterval(this.fetchCameras.bind(this),60000);
  }

  render(){
    const {error, isLoaded, data} = this.state;
    if(error){
      return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className='nestApp' width={nestStyles.appWidth + `%`}>
            <h2>Nest</h2>
            <ul>
              {Object.keys(data.cameras).map(key =>
                <li key={key}>
                  <img 
                    src={data.cameras[key].last_event.animated_image_url} 
                    alt={data.cameras[key].name} 
                  />
                </li>
              )}
            </ul>
        </div>
      )
    }
  }
}

export default Nest;