import React from 'react';
import appStyles from '../appStyles';

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
          <div className='nestApp' style={appStyles.nestApp}>
            <h2 style={appStyles.nestApp.h2}>Nest</h2>
              {Object.keys(data.cameras).map(key =>
                <div key={key} style={appStyles.nestCameras}>
                  <h4>{data.cameras[key].name}</h4>
                  <a href={data.cameras[key].public_share_url || data.cameras[key].web_url}>
                  <img 
                    src={data.cameras[key].last_event.animated_image_url} 
                    alt={data.cameras[key].name} 
                  /></a>
                </div>
              )}
        </div>
      )
    }
  }
}

export default Nest;