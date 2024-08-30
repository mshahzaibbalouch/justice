import React from 'react';

const ServicesSection = (
  { service }
) => {
  return (
    <div className='row align-items-center'>
      <div className="col-2">
        <div className="w-auto fs-3 d-flex justify-content-center align-items-center rounded-circle text-center card-icon p-2 bg-white text-primary">
          {service.icon}
        </div>
      </div>
      <div className="col-10 fs- m-0">{service.description}</div>
    </div>
  )
}

export default ServicesSection;