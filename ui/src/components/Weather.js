import React from 'react';
import appStyles from '../appStyles';

class Weather extends React.Component {
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
        });
      }
    )
  }

  render(){
    const { error, isLoaded, data } = this.state;
    if(error){
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='weatherApp' style={appStyles.weatherApp}>
          <h2 style={appStyles.weatherApp.h2}>Weather</h2>
          <ul style={appStyles.ul}>
            <li>Current Temperature: {data.currently.apparentTemperature}</li>
            <li>Today's High: {data.daily.data[0].temperatureHigh}</li>
            <li>Summary: {data.currently.summary}</li>
          </ul>
        </div>
      )
    }
  }
}

export default Weather;