import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CartWidget from "./CartWidget";
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import gameIcon from '/gameIcon.svg';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getProductosPorCategoria } from '../asyncMock';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('INICIO');
    const [buttonStyle, setButtonStyle] = useState({});
    const [searchCategory, setSearchCategory] = useState('');
    const [activeCategory, setActiveCategory] = useState('');

    const { category } = useParams();

    const handleNavLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    const handleSearchCategoryFromInput = () => {
        if (searchCategory) {
            window.location.href = `/Category/${searchCategory}`;
        }
    };

    const handleMouseEnterButton = () => {
        setButtonStyle({ color: '#0d6efd', borderColor: '#0d6efd', backgroundColor: '#0d6efd' });
    };

    const handleMouseLeaveButton = () => {
        setButtonStyle({ color: 'black', borderColor: 'black', backgroundColor: 'transparent' });
    };

    const handleSearchCategory = () => {
        if (category) {
            getProductosPorCategoria(category).then((productos) => {
                console.log('Productos filtrados por categoría:', productos);
            });
        }
    };

    const location = useLocation();
    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath.includes('Home')) {
            setActiveLink('inicio');
            setActiveCategory('');
        } else if (currentPath.includes('Products')) {
            setActiveLink('productos');
            setActiveCategory('');
        } else if (currentPath.includes('Contact')) {
            setActiveLink('contacto');
            setActiveCategory('');
        } else if (currentPath.includes('Category')) {
            setActiveLink('');
            const category = currentPath.split('/').pop();
            setActiveCategory(category);
        }
    }, [location]);

    return (
        <Navbar bg="light" expand="lg">
            <Container className="d-flex justify-content-between align-items-center">
                <Link to="/Home" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={gameIcon} alt="Gamer Icon" style={{ marginRight: '10px', width: '30px', height: '30px' }} />
                    TUKI
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="w-50 justify-content-around align-items-center">
                        <Link to="/Home" onClick={() => handleNavLinkClick('inicio')} style={activeLink === 'inicio' ? { color: '#0d6efd', borderBottom: '2px solid #0d6efd', transition: 'color 0.3s ease-in-out' } : { color: 'black' }}>inicio</Link>
                        <Link to="/Products" onClick={() => handleNavLinkClick('productos')} style={activeLink === 'productos' ? { color: '#0d6efd', borderBottom: '2px solid #0d6efd', transition: 'color 0.3s ease-in-out' } : { color: 'black' }}>productos</Link>
                        <Link to="/Contact" onClick={() => handleNavLinkClick('contacto')} style={activeLink === 'contacto' ? { color: '#0d6efd', borderBottom: '2px solid #0d6efd', transition: 'color 0.3s ease-in-out' } : { color: 'black' }}>contacto</Link>
                        <NavDropdown title={activeCategory || "categorias"} id="basic-nav-dropdown" style={activeCategory ? { color: '#0d6efd', borderBottom: '2px solid #0d6efd', transition: 'color 0.3s ease-in-out' } : { color: 'black' }}>
                            <div className="text-center">
                                <Link to="/Category/apple" onClick={() => { setActiveCategory('apple'); setActiveLink(''); }} style={activeCategory === 'apple' ? { color: '#0d6efd', borderBottom: '2px solid #0d6efd', transition: 'color 0.3s ease-in-out' } : { color: 'black' }}>apple</Link>
                            </div>
                            <div className="text-center">
                                <Link to="/Category/samsung" onClick={() => { setActiveCategory('samsung'); setActiveLink(''); }} style={activeCategory === 'samsung' ? { color: '#0d6efd', borderBottom: '2px solid #0d6efd', transition: 'color 0.3s ease-in-out' } : { color: 'black' }}>samsung</Link>
                            </div>
                            <div className="text-center">
                                <Link to="/Category/xiaomi" onClick={() => { setActiveCategory('xiaomi'); setActiveLink(''); }} style={activeCategory === 'xiaomi' ? { color: '#0d6efd', borderBottom: '2px solid #0d6efd', transition: 'color 0.3s ease-in-out' } : { color: 'black' }}>xiaomi</Link>
                            </div>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Buscar"
                            className="mr-2"
                            aria-label="Buscar"
                            onChange={(e) => setSearchCategory(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleSearchCategoryFromInput();
                                }
                            }}
                        />
                        <Button variant="outline-success" style={{ ...buttonStyle, marginLeft: '5px' }} onMouseEnter={handleMouseEnterButton} onMouseLeave={handleMouseLeaveButton} onClick={handleSearchCategoryFromInput}>
                            <FaSearch />
                        </Button>
                    </Form>
                    <Link to={"/Cart"}>
                        <CartWidget />
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
