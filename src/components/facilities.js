import React from 'react'
import '../styles/services.css'

const Facilities = ({keyfacilities})=> {
    console.log(keyfacilities)
  return (
    <>
<div id='facilities'>
{
  keyfacilities.map( (item) => (
<div id='card'>
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
