import { Button } from "react-bootstrap";
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Appointment_form extends Component {
  render() {
    return (
      <div>
        form will be developed for appointment
if you came here by mistake please return to home page via button below
<Button><Link to="/">click here</Link></Button>         
      </div>
    )
  }
}
