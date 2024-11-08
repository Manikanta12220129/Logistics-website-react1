import React from 'react'
import imageFooter from '../images/logo.png'
import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitchLogo } from 'phosphor-react'
function Footer() {
  return (

<>
  <div className="container-fluid text-center FooterMain mt-5 h-auto">
    <div className="row pt-5 mt-5">
      <div className="col-md-6 mt-md-0">
        <div>
          <img className='w-25' src={imageFooter} alt="" />
        </div>
      </div>

      <hr className="w-100 d-md-none pb-0" />

      <div className="col-md-3 mb-md-0 mb-3">
        <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
          <li><a href="#!" className='list-unstyled text-white'><FacebookLogo size={32} /></a></li>
          <li><a href="#!" className='list-unstyled text-white'><InstagramLogo size={32} /></a></li>
        </ul>
      </div>

      <div className="col-md-3 mb-md-0 mb-3">
        <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
          <li><a href="#!" className='list-unstyled text-white'><LinkedinLogo size={32} /></a></li>
          <li><a href="#!" className='list-unstyled text-white'><TwitchLogo size={32} /></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-copyright text-center py-3 FooterMain ">
    © 2023 Copyright: <a href="https://google.com/" className='list-unstyled text-white p-3'> LOGISTICS </a>
  </div>
</>


    )
}

export default Footer