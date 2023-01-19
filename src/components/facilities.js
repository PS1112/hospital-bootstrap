import React from 'react'
import '../styles/services.css'

const Facilities = ({keyfacilities})=> {
    console.log(keyfacilities)
  return (
    <>
<div id='facilities'  className='col-xs-12 col-12 col-sm-6 col-md-8 col-lg-6 col-xl-6' >
{
  keyfacilities.map( (item) => (
<div className='col-xs-12 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3'>
<img src={item.image} alt="" height="200px" />
<h3>{item.name}</h3>
<p>${item.price}</p>
<p>{item.description}</p>
<hr />
</div>
) )
}     
</div>
    </>
  )
}
export default Facilities;
