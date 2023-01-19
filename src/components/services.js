import React, { Component } from 'react'
import Facilities from './facilities';
import JSON from "../services.json";
import '../styles/services.css'

export default class services extends Component {
  state={
    all_facilities : JSON
  }
  render() {
    return (
      <>
      <div id='parent'>
        <Facilities keyfacilities={this.state.all_facilities}/>
      
    </div>
    </>
    )
  }
}
