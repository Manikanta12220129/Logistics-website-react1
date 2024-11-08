import React from 'react'
import {ArrowDown, Check} from "phosphor-react"
import img1 from '../images/1.jpg'
import MeetOurTeam from '../Components/MeetOurTeam'
import imgAbout1 from '../images/singnture.png'
function About() {
  return (
<div className='container pt-5'>
  <div className='w-100 text-center pt-3'>
    <p className='display-3 fw-bold pt-2'>About Us</p>
    <div className='fw-bold p-5'><ArrowDown size={32} /></div>  
  </div>
  <div className='container w-100 d-flex flex-column flex-md-row p-3'>
    <div className='w-100 w-md-50'>
      <p className='fw-bold'>Supply Chain Technology & Customized Solutions.</p>
      <h1 className='fw-bold'>Competitive Advantages For Largest Companies!</h1>
      <p>Providing the best transport and shipping services available all over the world. Our skilled personnel, utilizing the latest communications, tracking, and processing software, combined with decades of experience.</p>
      <ul className='list-unstyled'>
        <li><Check size={32} /> Transparent Pricing, Environmental Sensitivity</li>
        <li><Check size={32} /> 24/7 Hours Support, Professional and Qualified</li>
        <li><Check size={32} /> Real-Time Tracking, Fast & Efficient Delivery</li>
        <li><Check size={32} /> Warehouse Storage, Personalized solutions</li>
      </ul>
      <div className='d-flex flex-column flex-md-row gap-3'>
        <button className='button-24 p-2'>more about us</button>
        <button className='btnnt fw-bold'>Find Your Solutions</button>
      </div>
    </div>
    <div className='w-100 w-md-50'>
      <img className='w-100' src={img1} alt="one" />
    </div>
  </div>
  <div className='container'>
    <h1>Safe, Reliable And Express Logistic & Transport Solutions That Saves Your Time!</h1>
    <p>Logisti Group is a representative logistics operator providing a full range of service in the sphere of customs clearance and transport worldwide for any type of cargo. We pride ourselves on providing the best transport and shipping services available all over the world. Our skilled personnel, utilizing the latest communications, tracking, and processing software, combined with decades of experience! Through integrated supply chain solutions, Logisti drives sustainable competitive advantages to some of Australia's largest companies.</p>
    <h2>OUR MISSION</h2>
    <p>Utilizing latest communications, tracking processing software and decades of experience</p>
    <h2>OUR VISION</h2>
    <p>The best possible service in the sphere of optimized rout of cargo & transportation worldwide</p>
    <img src={imgAbout1} alt="-" />
  </div>
  <div className='w-100 text-center pt-3'>
    <p className='display-4 fw-bold pt-2'>Meet Our Team</p>
    <MeetOurTeam />
  </div>
</div>

  )
}

export default About