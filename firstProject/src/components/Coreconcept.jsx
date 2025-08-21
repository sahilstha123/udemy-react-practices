import React from 'react'

const Coreconcept = ({image, title, description}) => {
  return (
    <div className='text-gray-300 w-64 bg-gray-800 p-3 rounded-md'>
        <img src={image} alt="figure" width="150px" className='mx-auto'/>
        <h3 className='text-center font-semibold text-xl'>{title}</h3>
        <p className='text-center'>{description}</p>
    </div>
  )
}

export default Coreconcept