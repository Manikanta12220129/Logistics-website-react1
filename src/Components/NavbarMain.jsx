import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import OffCanvasMain from './OffCanvasMain';

function NavbarMain() {

  return (
    <Navbar expand="lg" className=" p-1 fw-bold fs-5 navMain ">
      <Container>
        <Navbar.Brand className='text-center' href="#home"> <img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='w-100 d-flex justify-content-center text-center align-items-center list-unstyled'>
            <Nav.Link  as={Link} to={""}>Home</Nav.Link>
            <Nav.Link  as={Link} to={"/About"}>About</Nav.Link>
            <Nav.Link  as={Link} to={"/ServcesAndPrices"}>Services & Prices</Nav.Link>
            <Nav.Link  as={Link} to={"/NewsAndMedia"}>News and Media</Nav.Link>
            <Nav.Link  as={Link} to={"/ContactUs"}>Contact Us</Nav.Link>
          </Nav>
            <OffCanvasMain />

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;