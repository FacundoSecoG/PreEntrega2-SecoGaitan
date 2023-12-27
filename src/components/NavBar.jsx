import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CartWidget from "./CartWidget"
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import gameIcon from '/gameIcon.svg';
import { Link, useLocation } from 'react-router-dom'

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

    const [activeCategory, setActiveCategory] = useState('');
    const location = useLocation();
    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath.includes('Home')) {
            setActiveLink('INICIO');
            setActiveCategory('');
        } else if (currentPath.includes('Products')) {
            setActiveLink('PRODUCTOS');
            setActiveCategory('');
        } else if (currentPath.includes('Contact')) {
            setActiveLink('CONTACTO');
            setActiveCategory('');
        } else if (currentPath.includes('Category')) {
            setActiveLink('');
            const category = currentPath.split('/').pop();
            setActiveCategory(category);
        }
    }, [location]);

    return (
        <Navbar bg="light" expand="lg">
            <Container className="d-flex justify-content-between">
                <Link to="/MiPrimer-ECommerce/Home" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={gameIcon} alt="Gamer Icon" style={{ marginRight: '10px', width: '30px', height: '30px' }} />
                    TUKI
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="w-50 justify-content-around">
                        <Link to="/MiPrimer-ECommerce/Home" onClick={() => handleNavLinkClick('INICIO')} style={activeLink === 'INICIO' ? { color: 'blue', borderBottom: '2px solid blue', transition: 'color 0.3s ease-in-out' } : {}}>INICIO</Link>
                        <Link to="/MiPrimer-ECommerce/Products" onClick={() => handleNavLinkClick('PRODUCTOS')} style={activeLink === 'PRODUCTOS' ? { color: 'blue', borderBottom: '2px solid blue', transition: 'color 0.3s ease-in-out' } : {}}>PRODUCTOS</Link>
                        <Link to="/MiPrimer-ECommerce/Contact" onClick={() => handleNavLinkClick('CONTACTO')} style={activeLink === 'CONTACTO' ? { color: 'blue', borderBottom: '2px solid blue', transition: 'color 0.3s ease-in-out' } : {}}>CONTACTO</Link>
                        <NavDropdown title={activeCategory || "CATEGORIAS"} id="basic-nav-dropdown" style={activeCategory ? { color: 'blue', borderBottom: '2px solid blue', transition: 'color 0.3s ease-in-out' } : {}}>

                            <NavDropdown.Item>
                                <Link to="/MiPrimer-ECommerce/Category/APPLE" onClick={() => { setActiveCategory('APPLE'); setActiveLink(''); }} style={activeCategory === 'APPLE' ? { color: 'blue', borderBottom: '2px solid blue', transition: 'color 0.3s ease-in-out' } : {}}>APPLE</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/MiPrimer-ECommerce/Category/SAMSUNG" onClick={() => { setActiveCategory('SAMSUNG'); setActiveLink(''); }} style={activeCategory === 'SAMSUNG' ? { color: 'blue', borderBottom: '2px solid blue', transition: 'color 0.3s ease-in-out' } : {}}>SAMSUNG</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/MiPrimer-ECommerce/Category/XIAOMI" onClick={() => { setActiveCategory('XIAOMI'); setActiveLink(''); }} style={activeCategory === 'XIAOMI' ? { color: 'blue', borderBottom: '2px solid blue', transition: 'color 0.3s ease-in-out' } : {}}>XIAOMI</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
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
                                    Buscar Producto
                                </Tooltip>
                            }
                        >
                            <Button variant="outline-success" style={{ ...buttonStyle, marginLeft: '5px' }} onMouseEnter={handleMouseEnterButton} onMouseLeave={handleMouseLeaveButton}>
                                <FaSearch />
                            </Button>
                        </OverlayTrigger>
                    </Form>
                    <Link to={"/MiPrimer-ECommerce/Cart"}>
                        <CartWidget />
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;