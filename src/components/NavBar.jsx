import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="#">Mi E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="w-50 justify-content-around">
                        <Nav.Link href="#">INICIO</Nav.Link>
                        <Nav.Link href="#">Seccion2</Nav.Link>
                        <Nav.Link href="#">Seccion3</Nav.Link>
                        <Nav.Link href="#">Seccion4</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;