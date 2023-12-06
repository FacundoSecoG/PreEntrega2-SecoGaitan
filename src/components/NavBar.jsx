import { Navbar, Nav, Container, Form, FormControl, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CartWidget from "./CartWidget"
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import gameIcon from '../../public/gameIcon.svg';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('INICIO');
    const [buttonStyle, setButtonStyle] = useState({});

    const handleNavLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    const handleMouseEnterButton = () => {
        setButtonStyle({ color: 'white', borderColor: 'blue', backgroundColor: 'blue' });
    };
    
    const handleMouseLeaveButton = () => {
        setButtonStyle({ color: 'black', borderColor: 'black', backgroundColor: 'transparent' });
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={gameIcon} alt="Gamer Icon" style={{ marginRight: '10px', width: '30px', height: '30px' }} />
                    Mi E-Commerce
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="w-50 justify-content-around">
                        <Nav.Link href="#" onClick={() => handleNavLinkClick('INICIO')} style={activeLink === 'INICIO' ? { color: 'blue', borderBottom: '2px solid blue', transition: 'color 0.3s ease-in-out' } : {}}>INICIO</Nav.Link>
                        <Nav.Link href="#" onClick={() => handleNavLinkClick('Seccion2')} style={activeLink === 'Seccion2' ? { color: 'blue', borderBottom: '2px solid blue', transition: 'color 0.3s ease-in-out' } : {}}>Seccion2</Nav.Link>
                        <Nav.Link href="#" onClick={() => handleNavLinkClick('Seccion3')} style={activeLink === 'Seccion3' ? { color: 'blue', borderBottom: '2px solid blue', transition: 'color 0.3s ease-in-out' } : {}}>Seccion3</Nav.Link>
                        <Nav.Link href="#" onClick={() => handleNavLinkClick('Seccion4')} style={activeLink === 'Seccion4' ? { color: 'blue', borderBottom: '2px solid blue', transition: 'color 0.3s ease-in-out' } : {}}>Seccion4</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Buscar"
                            className="mr-2"
                            aria-label="Buscar"
                        />
                        <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    Buscar
                                </Tooltip>
                            }
                        >
                            <Button variant="outline-success" style={{ ... buttonStyle, marginLeft: '5px'}} onMouseEnter={handleMouseEnterButton} onMouseLeave={handleMouseLeaveButton}>
                                <FaSearch />
                            </Button>
                        </OverlayTrigger>
                    </Form>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;