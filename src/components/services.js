import React, { Component } from 'react'
// implementation of JSON using state.
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
      <div className='container-fluid text-center' style={{color:"#1ab7a8"}}>
        <p className='h1 m-5'>All services we offer:</p>
      <div id='parent'>
          <Facilities keyfacilities={this.state.all_facilities}/>
        </div>
        
      
    </div>
    </>
    )
  }
}

