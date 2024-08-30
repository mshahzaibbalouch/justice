import React from 'react';
import SectionTitle from './SectionTitle';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ButtonStyle from './ButtonStyle';


const Services = () => {
  const dispatch = useDispatch();
  dispatch({ type: 'SERVICES_TITLE', payload: "Our Services" })


  const services = useSelector((state) => state.store.services);
  const servicesDescription = useSelector((state) => state.store.servicesDescription);
  const servicesDesBold = useSelector((state) => state.store.servicesDesBold);
  const readmore = useSelector((state) => state.store.readmore);
  const servicesButtons = useSelector((state) => state.store.servicesButtons);



  return (
    <div className='py-3' id="services">
      <div className="container-sm">
        <SectionTitle title={services} />
        <div className="row py-3">
          <div className="col-lg-8 text-center text-lg-start">
            <p>{servicesDescription}</p>
            <b>{servicesDesBold}</b>
            <div className="row">
              <div className='my-3 col-4 mx-auto mx-lg-0'>
                <ButtonStyle title={readmore} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 my-3">
            <div className='row'>
            {
              servicesButtons && servicesButtons.map((item, index) => {
                return <div key={index} className='mb-2 col-6 col-lg-12'><ButtonStyle title={item} /></div>
              })
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;