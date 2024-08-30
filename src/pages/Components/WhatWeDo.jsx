import React from 'react'
import SectionTitle from './SectionTitle';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ServicesSection from './ServicesSection';

const WhatWeDo = () => {
  const dispatch = useDispatch();
  dispatch({ type: 'WHATWEDO_TITLE', payload: "What we do?" })
  dispatch({ type: 'OUR_SERVICES' });
  const what = useSelector((state) => state.store.what);
  const ourServices = useSelector((state) => state.services.ourServices);

  return (
    <div className='bg-theme-primary py-4' id="whatwedo">
      <div className="container-sm">
        <SectionTitle title={what} />
        <div className=' row'>
          {
            ourServices?.map((service, index) => {
              return (
                <div className="col-md-4 mb-3" key={index}><ServicesSection service={service} /></div>
              )
            })
          }

        </div>
      </div>

    </div>
  )
}

export default WhatWeDo