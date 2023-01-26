// JSON implementation using Hooks
import React,{useState} from 'react'
import Doctors from './doctors'
import JSON from '../doctors.json'
import '../styles/departments.css'

export default function Department() {

  const [doctors, setdoctors] = useState(JSON);

  return (
    <>
      <div className='container-fluid text-center' style={{color:"#1ab7a8"}}>
        <div>
          <Doctors doc={doctors}/>
        </div>
         
      </div>
    </>
  )
}
