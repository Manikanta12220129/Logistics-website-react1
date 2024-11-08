import Accordion from 'react-bootstrap/Accordion';
import {ArrowDown} from "phosphor-react"
import sea1 from '../images/image-10-copyright-840x560.jpg'
import air1 from '../images/download (3).png'
import land1 from '../images/image-21-copyright-840x560.jpg'
import store from '../images/image-22-copyright-840x600.jpg'
import Card from 'react-bootstrap/Card';
import img1 from '../images/image-4-copyright-890x664.jpg'
import img2 from '../images/image-5-copyright-890x664.jpg'
import img3 from '../images/image-6-copyright-890x664.jpg'
import { useEffect } from 'react';
function AlwaysOpenExample() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container'>
<div className='w-100 text-center pt-3'>
  <p className='display-3 fw-bold pt-2'>News & Media</p>
  <div className='fw-bold p-5'><ArrowDown size={32} /></div>  
  <div className='w-100 justify-content-center fw-bold fs-3 pb-4'>New Articles</div>
  <div className='container'>
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      <div className='col'>
        <Card className='border-0'>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title className='text-start'>COMMERCIAL</Card.Title>
            <Card.Text className='text-start fs-5 fw-bold'>
              The Main Functions of Warehouse Logistics
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='col'>
        <Card className='border-0'>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title className='text-start'>COMMERCIAL</Card.Title>
            <Card.Text className='text-start fs-5 fw-bold'>
              How to Correctly Calculate the Load Volume?
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='col'>
        <Card className='border-0'>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title className='text-start'>COMMERCIAL</Card.Title>
            <Card.Text className='text-start fs-5 fw-bold'>
              What Are the Categories and Cargo Types?
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
</div>





    <Accordion className='border-4 p-5' defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header><p className='fw-bold fs-3'>Sea Shipment</p></Accordion.Header>
        <Accordion.Body className='d-flex w-100'>
        <div className='w-50'>
            <h3 className='fw-bold'>OVERVIEW</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed sapiente culpa accusantium porro est iste incidunt reprehenderit eaque quaerat laboriosam debitis deleniti quas ratione voluptas velit, perferendis praesentium voluptates.</p>
        </div>
        <div className='w-50 d-none  d-lg-block'>
            <img className='w-100' src={sea1} alt="" />
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><p className='fw-bold fs-3'>Air Shipment </p></Accordion.Header>
        <Accordion.Body className='d-flex w-100'>
        <div className='w-50'>
            <h3 className='fw-bold'>OVERVIEW</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed sapiente culpa accusantium porro est iste incidunt reprehenderit eaque quaerat laboriosam debitis deleniti quas ratione voluptas velit, perferendis praesentium voluptates.</p>
        </div>
        <div className=' w-50 d-none  d-lg-block'>
            <img className='w-100' src={air1} alt="" />
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><p className='fw-bold fs-3'>Land Shipment</p></Accordion.Header>
        <Accordion.Body className='d-flex w-100'>
        <div className='w-50'>
            <h3 className='fw-bold'>OVERVIEW</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed sapiente culpa accusantium porro est iste incidunt reprehenderit eaque quaerat laboriosam debitis deleniti quas ratione voluptas velit, perferendis praesentium voluptates.</p>
        </div>
        <div className='w-50 d-none  d-lg-block'>
            <img className='w-100' src={store} alt="" />
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><p className='fw-bold fs-3'>Store And Retail</p></Accordion.Header>
        <Accordion.Body className='d-flex w-100'>
        <div className='w-50 '>
            <h3 className='fw-bold'>OVERVIEW</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed sapiente culpa accusantium porro est iste incidunt reprehenderit eaque quaerat laboriosam debitis deleniti quas ratione voluptas velit, perferendis praesentium voluptates.</p>
        </div>
        <div className='w-50 d-none  d-lg-block'>
            <img className='w-100' src={land1} alt="" />
        </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    
    </div>
  );
}

export default AlwaysOpenExample;