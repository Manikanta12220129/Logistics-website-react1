
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Payment = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className='fw-bold fs-4'>Visa Card Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label className='fw-bold fs-5'>Card Number</Form.Label>
            <Form.Control type="text" placeholder="Enter card number" />
          </Form.Group>

          <Form.Group>
            <Form.Label className='fw-bold fs-5'>Expiration Date</Form.Label>
            <Form.Control type="text" placeholder="MM/YY" />
          </Form.Group>

          <Form.Group>
            <Form.Label className='fw-bold fs-5'>CVC</Form.Label>
            <Form.Control type="text" placeholder="CVC" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Pay Now  
       </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Payment;

