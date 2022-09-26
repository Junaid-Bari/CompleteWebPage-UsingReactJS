import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

function OffcanvasExample() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg=" " expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand className='BrandNameSize' href="#">Pedler</Navbar.Brand>
            <Navbar.Brand className='NavBarAlterAfterSize' href="#">For Creator</Navbar.Brand>
            <Navbar.Brand className='NavBarAlterAfterSize' href="#">For Brand</Navbar.Brand>
            <div className='NavBaralterMain'><a className='NavbarAnchor1' href="#">For Creators</a>
            <a className='NavbarAnchor2' href="#">For Brands</a></div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav style={{alignItems:"center"}} className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className='navBarBootBtn1' href="#action1">Get Access</Nav.Link>
                  <Nav.Link className='navBarBootBtn2' href="#action2">Log in</Nav.Link>
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;