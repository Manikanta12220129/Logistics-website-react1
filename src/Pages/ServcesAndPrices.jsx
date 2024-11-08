import { ArrowDown } from 'phosphor-react';
import { useState } from 'react';
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Payment from '../Pages/Payment';
import vid from '../images/videoplayback.mp4'
function ServcesAndPrices() {
  const services = [
    {
      title: 'Air Trucking Industry',
      price: 899,
      description: [
        'Cargo consolidation',
        'Express delivery by cargo plane',
        'International air freight',
      ],
    },
    {
      title: 'Sea Trucking Industry',
      price: 500,
      description: [
        'Delivery to the port',
        'Clearance for loading onboard',
        'Control transportation',
      ],
    },
    {
      title: 'Car Trucking Industry',
      price: 350,
      description: [
        'Groupage loading',
        'Monitoring of the cargo ',
        'Maximum optimization',
      ],
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



  return (
<>
  <div className='w-100 text-center pt-3'>
    <p className='display-3 fw-bold'>Pricing And Plans</p>
    <div className='fw-bold p-5'><ArrowDown size={32} /></div>
  </div>
  <div className='container-fluid'>
    <h2 className='p-3 fw-bold text-center'>We Offer You</h2>
    <video src={vid} className='w-100' loop muted autoPlay></video>
  </div>
  <div className='container d-flex justify-content-center'>
    <Row xs={1} md={3} className="g-4 m-3">
      {services.map((service, idx) => (
        <Col key={idx}>
          <Card className="card h-100 shadow-lg p-4">
            <Card.Body>
              <Card.Title className='text-center fs-3 fw-bold'>{service.title}</Card.Title>
              <Card.Text className='text-center'>
                <strong className='fs-2'> ${service.price} /<small className='fs-6 text text-muted'>per month</small> </strong>
              </Card.Text>
              <ul>
                {service.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <button onClick={handleButtonClick} className="w-100 mt-3 button-5" >
                Get Me
              </button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  <Payment show={showModal} onHide={handleCloseModal} />
</>

  );
}

export default ServcesAndPrices;



