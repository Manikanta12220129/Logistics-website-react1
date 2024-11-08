/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import {ArrowDown} from "phosphor-react"
import ContactUsForm from '../Components/ContactUsForm';
function ContactUs() {
  return (
    <div className="container w-100 h-100">
    <div className='w-100 text-center pt-3'>
      <p className='display-3 fw-bold pt-2'>Contact Us</p>
    <div className='fw-bold p-5'><ArrowDown size={32} /></div> 
    <small className='fw-bold'>Our Locations</small> 
    <p className='fs-3'>We understand the importance of approaching each work integrally and believe in the power of simple and easy communication.</p>
    </div>
      <div className="w-100 p-5" style={{ height: '500px' }} data-aos="zoom-in " data-aos-duration="3000">
        <iframe
          className="w-100 h-100"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=1200&amp;height=800&amp;hl=en&amp;q=Hamburg &amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
        </iframe>
      </div>
      <ContactUsForm />
    </div>
  );
}

export default ContactUs;
