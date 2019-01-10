import React from 'react';
import appStyles from '../appStyles';

class Nest extends React.Component {

  url='http://localhost:5000/nest'

  componentDidMount(){
    this.props.fetchCameras(this.url);
    setInterval(this.props.fetchCameras(this.url),60000);
  }

  render(){
    const {error, isLoaded, cameras} = this.props;
    if(error){
      return <div>Error: {error.message}</div>
    } else if(!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className='nestApp' style={appStyles.nestApp}>
            <h2 style={appStyles.nestApp.h2}>Nest</h2>
              {Object.keys(cameras.cameras).map(key =>
                <div key={key} style={appStyles.nestCameras}>
                  <h4 style={appStyles.camsH4}>{cameras.cameras[key].name}</h4>
                  <a href={cameras.cameras[key].public_share_url || cameras.cameras[key].web_url}>
                    <img 
                      src={cameras.cameras[key].last_event.animated_image_url} 
                      alt={cameras.cameras[key].name}
                    />
                  </a>
                </div>
              )}
          </div>
      )
    }
  }
}

export default Nest;