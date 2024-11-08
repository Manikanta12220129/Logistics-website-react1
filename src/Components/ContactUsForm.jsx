import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { DeviceMobile } from 'phosphor-react';
import {MapPinLine} from 'phosphor-react'
import { EnvelopeSimple } from 'phosphor-react'

function ContactUsForm() {
  return (
<div className='container w-100 d-flex flex-column flex-md-row'>
  <div className='w-100 w-md-50 d-flex flex-column gap-3'>
    <small>Contact Us</small>
    <h1 className='fw-bold'>Have Questions? Get in touch!</h1>
    <p className='text-muted'>
      Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
    </p>
    <span className='fw-bold'>
      <MapPinLine size={32} /> 785 15th Street, Office 478 Berlin
    </span>
    <span className='fw-bold'>
      <DeviceMobile size={32} /> +49 840 841 25 69
    </span>
    <span className='fw-bold'>
      <EnvelopeSimple size={32} /> info@email.com
    </span>
  </div>
  <div
    className='w-100 w-md-50'
    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    data-aos-duration="2000"
  >
    <Form className='p-4'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bold'>Name</Form.Label>
        <Form.Control className='border' type="text" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label className='fw-bold'>Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@email.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='fw-bold'>Your Message</Form.Label>
        <Form.Control as="textarea" placeholder='How can we help you? Feel free to get in touch!' rows={3} />
      </Form.Group>
      <Button variant="warning">Submit</Button>
    </Form>
  </div>
</div>


  );
}

export default ContactUsForm;