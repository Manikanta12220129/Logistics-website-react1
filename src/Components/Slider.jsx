import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import image1 from '../images/download (4).png'
import image2 from '../images/download2.jpg'
import image3 from '../images/download3.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// import { Button } from 'bootstrap';

function Slider() {
  return (
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="First slide"
    />
    <Carousel.Caption className='d-none d-md-block'>
      <p className='fw-bold'>INTERNATIONAL LOGISTIC</p>
      <h1 className='display-2 fw-bold text-uppercase'>Full Sustainable Cargo Solution</h1>
      <Button as={Link} to={'About'} variant="outline-warning">Who We Are</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="Second slide"
    />
    <Carousel.Caption className='d-none d-md-block'>
      <h1 className='display-2 fw-bold'>WE DELIVER AROUND WORLD</h1>
      <p className='fw-bold'>international delivery</p>
      <Button as={Link} to={'About'} variant="outline-warning">Who We Are</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
    <Carousel.Caption className='d-none d-md-block'>
      <h1 className='display-2 fw-bold'>INTERNATIONAL FREIGHT DELIVERY SERVICES</h1>
      <p className='fw-bold'>We Provide Solutions</p>
      <Button as={Link} to={'About'} variant="outline-warning">Who We Are</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  );
}


export default Slider;