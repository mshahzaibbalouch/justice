import React from 'react';


const SectionTitle = ({title}) => {
    
  return (
    <div>
        <h1 className='text-uppercase fw-bold text-center mb-0'>{title}</h1>
        <div className='seprater mx-auto rounded-pill'></div>
    </div>
  )
}

export default SectionTitle