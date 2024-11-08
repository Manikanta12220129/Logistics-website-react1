import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
function GroupExample() {
  return (
<div className='container'>
  <CardGroup>
    <div className='col-md-4 col-sm-12'>
      <Card className='card-1 cardMain'>
        <Card.Body className="d-flex flex-column justify-content-end">
          <h3 className='text-white fw-bold'>Marin Transport Logistics</h3>
          <Button as={Link} to={'/MarinTransport'} className="text-white bg-transparent fw-bold BtnCard mt-3">See More</Button>
        </Card.Body>
      </Card>
    </div>

    <div className='col-md-4 col-sm-12'>
      <Card className='card-2 cardMain'>
        <Card.Body className="d-flex flex-column justify-content-end">
          <h3 className='text-white fw-bold'>Land Transport Logistics</h3>
          <Button as={Link} to={'/MarinTransport'} className="text-white bg-transparent fw-bold BtnCard mt-3">See More</Button>
        </Card.Body>
      </Card>
    </div>

    <div className='col-md-4 col-sm-12'>
      <Card className='card-3 cardMain'>
        <Card.Body className="d-flex flex-column justify-content-end">
          <h3 className='text-white fw-bold'>Rail Transport Logistics</h3>
          <Button as={Link} to={'/MarinTransport'} className="text-white bg-transparent fw-bold BtnCard mt-3">See More</Button>
        </Card.Body>
      </Card>
    </div>
  </CardGroup>
</div>
  );
}

export default GroupExample;