import React, { useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import imageOne from '../images/Capture1.PNG'
import imageTwo from '../images/Capture2.PNG'
import imageThree from '../images/Capture3.PNG'
import imageFour from '../images/Capture4.PNG'
function WhatWeDo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className='d-flex flex-column w-100 justify-content-center align-items-center p-5 '>
  <h4 className='fw-bold w-100 text-center'>What We Do</h4>
  <p className='display-4 fw-bold text-center'>High level of <br /> provisioned services</p>
  <div className='container-fluid'>
  <div className='row'>
    <div className='details p-2 col-12 col-sm-6 col-md-4 col-lg-3' data-aos="flip-left" data-aos-duration="2500">
      <img className='w-25 img-fluid' src={imageOne} alt="imgOne" />
      <p className='fw-bold text-start fs-4'>Supply Chain Planning</p>
      <Button as={Link} to={'/NewsAndMedia'} className='bg-transparent text-black p-1 button-52 fw-bold'>Details</Button>
    </div>
    <div className='details p-2 col-12 col-sm-6 col-md-4 col-lg-3' data-aos="flip-left" data-aos-duration="2500">
      <img className='w-25 img-fluid' src={imageTwo} alt="imgOne" />
      <p className='fw-bold text-start fs-4'>Cargo Transportation</p>
      <Button as={Link} to={'/NewsAndMedia'} className='bg-transparent text-black p-1 button-52 fw-bold'>Details</Button>
    </div>
    <div className='details p-2 col-12 col-sm-6 col-md-4 col-lg-3' data-aos="flip-left" data-aos-duration="2500">
      <img className='w-25 img-fluid' src={imageThree} alt="imgOne" />
      <p className='fw-bold text-start fs-4'>Warehousing & Storage</p>
      <Button as={Link} to={'/NewsAndMedia'} className='bg-transparent text-black p-1 button-52 fw-bold'>Details</Button>
    </div>
    <div className='details p-2 col-12 col-sm-6 col-md-4 col-lg-3' data-aos="flip-left" data-aos-duration="2500">
      <img className='w-25 img-fluid' src={imageFour} alt="imgOne" />
      <p className='fw-bold text-start fs-4'>Retail & Packaging</p>
      <Button as={Link} to={'/NewsAndMedia'} className='bg-transparent text-black p-1 button-52 fw-bold'>Details</Button>
    </div>
  </div>
</div>
    </div>
    <div className='fixed-bg p-4 w-100 d-flex flex-column justify-content-end text-center text-white fw-bold'>
    <small className='fs-4'>WE OFFER YOU</small>
    <p className='display-3 fw-bold fst-italic mb-0'>Full range of transportation services</p>
</div>

<div className='container w-100 p-5'>
  <div className='row'>
    <div className='col-md-8 col-lg-9'>
      <p className='display-5 fw-bold Logistics text-center text-md-start'>Logistics that is dedicated to your company</p>
    </div>
    <div className='col-md-4 col-lg-3' data-aos="zoom-in-up" data-aos-duration="3000">
<div className="cardFly d-none d-lg-block">
  <div className="card-body">
    <h4 className="card-title p-4 fw-bold text-center">Track Your Shipment</h4>
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div className="line-1 m-2 d-flex align-self-center"></div>
      <input placeholder='SH.NU' className='w-100 m-2 rounded-3 text-center' type="text" />
      <button className="button-24 p-2 w-100">Track</button>
    </div>
  </div>
</div>

    </div>
  </div>
</div>

    </>
  )
}

export default WhatWeDo