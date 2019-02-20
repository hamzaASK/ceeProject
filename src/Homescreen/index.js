import React, { Component } from 'react';
import Slider from './Slider'
import Card from '../Components/Card'
import { Timers } from '../Settings/Timers'

let timer = 0

export default class Homescreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    timer = setTimeout(() => this.props.history.push(`/indicators`), Timers.homescreen)
  }

  componentWillUnmount() {
    clearTimeout(timer)
  }

  render() {
    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }} >
        <Slider />
        {/* <Card // title=""
          content={
            <div style={{ flex: 1 }} />
          }
        /> */}
      </div>
    );
  }
}

