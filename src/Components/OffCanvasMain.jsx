import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CloudSnow } from 'phosphor-react';
import axios from 'axios';

function OffCanvasMain() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const API_KEY = '4c35297da9de787ac68958487d31ea4f'; // Replace with your API key

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15; // Convert Kelvin to Celsius
  };

  const kelvinToFahrenheit = (kelvin) => {
    return (kelvin - 273.15) * 9/5 + 32; // Convert Kelvin to Fahrenheit
  };

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
      axios
        .get(apiUrl)
        .then((res) => {
          setData(res.data);
          setLocation('');
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  };

  return (
    <>
      <Button className='bg-transparent fw-bold fst-italic border-0' variant="primary" onClick={handleShow}>
        We Care <CloudSnow size={32} />
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <div className='off'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='fw-bold text-center fst-italic d-flex '>we care about your shipment so we track weather</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="search w-100 d-flex justify-content-center rounded-2 p-3">
              <input
                placeholder='Enter location'
                onKeyPress={searchLocation}
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                type="text"
              />
            </div>
            <div className='container'>
              <div className="top">
                <div className="location fs-1 text-white text-center fw-bold">
                  <p>{data.name}</p>
                </div>
                <div className="temp fw-bold text-white display-3">
  {data.main && typeof data.main.temp === 'number' ? (
    <>
      <h1>{Math.round(kelvinToCelsius(data.main.temp))} °C</h1>
      <p>{Math.round(kelvinToFahrenheit(data.main.temp))} °F</p>
    </>
  ) : (
    <p>Loading...</p>
  )}
</div>

                <div className="descriptions text-white">
                  <p>{data.weather?.[0]?.main}</p>
                </div>
              </div>
              {/* Rest of the code */}
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
}

export default OffCanvasMain;
