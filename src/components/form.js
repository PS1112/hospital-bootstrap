import React from 'react'
import { Form,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../styles/form.css'

export default function AuthForm({title,setPassword,setEmail,handleAction}) {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center 'id='container'>
    <div id='form'>
        <p id='heading'> {title} </p>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label id='label'>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label id='label'>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>
    <Button id='btnbtn' variant="primary" type="submit" onClick={handleAction}>
      {title}
    </Button>
    <Form.Text className="text-muted" id='btn_text'>
     {title ==='Login' ? ' Do not have an account ?... ':' Already have an account ?.. '}
     {title === 'Login'? <Link to={'/register'}> Sign Up </Link> : <Link to={'/'}> Sign In</Link>}
    </Form.Text>
    </div> 
    </div>
  )
}
