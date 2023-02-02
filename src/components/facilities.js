import React from 'react'
import '../styles/services.css'

const Facilities = ({keyfacilities})=> {
  return (
    <>
<div id='facilities' className='d-flex flex-column justify-content-center align-items-center flex-wrap gap-3 mt-4 mb-5'>
{
  keyfacilities.map( (item) => (
<div id='card'className='d-flex flex-column justify-content-center align-items-center p-3' >
<img className='rounded' src={item.image} alt="" height="200px" />
<h3 className='mt-2'>Name: {item.name}</h3>
<p className='h5'>Price: Rs{item.price}/-</p>
<p className='h6 text-justify'>Description: {item.description}</p>
<hr />
</div>
) )
}     
</div>
    </>
  )
}
export default Facilities;
