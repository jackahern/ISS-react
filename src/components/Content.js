import React, { Component } from 'react';
import axios from 'axios';
import Timestamp from 'react-timestamp';
import '../content.css';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: []
    };
  }

  componentDidMount() {
    this.getPositions();
    this.interval = setInterval(() => {
      this.getPositions();
    }, 1000);
  }

  getPositions() {
    axios.get("http://api.open-notify.org/iss-now.json")
      .then(res => {
        const positions = res.data;
        this.setState({ positions });
      })
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    if (this.state.positions.iss_position) {
      return (
        <div className="content">
          <div className="jumbo-custom">
            <div className="jumbotron">
              <h1 className="display-4">ISS co-ordinates</h1>
              <p className="lead">To follow the flight path and find the exact location of the ISS, we connect to an API to the longitude and latitude positions.</p>
              <hr className="my-4"/>
                <p>Latitude: {this.state.positions.iss_position.latitude} </p>
                <p>Longitude: {this.state.positions.iss_position.longitude} </p>
                <Timestamp className="bold" date={this.state.positions.timestamp} options={{ includeDay: true, twentyFourHour: true }} />
              <hr className="my-4"/>
                <p>To find the documentation of this API, please click to 'Learn more'</p>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Content;