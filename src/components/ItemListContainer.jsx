import { Card, Row, Col, Container, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { FaExpandAlt } from "react-icons/fa";

const ItemListContainer = ({ productos }) => {
    return (
        <Container className="mw-75 mt-4">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {productos.map((producto, idx) => (
                    <Col key={idx}>
                        <Card style={{ maxWidth: '300px', margin: 'auto' }} className="position-relative">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id={`tooltip-top`}>
                                        Expandir
                                    </Tooltip>
                                }
                            >
                                <Button variant="primary" className="position-absolute top-0 end-0 m-2">
                                    <FaExpandAlt />
                                </Button>
                            </OverlayTrigger>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body className="position-relative">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            Agregar al carrito
                                        </Tooltip>
                                    }
                                >
                                    <Button variant="primary" className="position-absolute top-0 end-0 m-2">
                                        <FaShoppingCart />
                                    </Button>
                                </OverlayTrigger>
                                <Card.Title>{producto.producto1}</Card.Title>
                                <Card.Text>
                                    {producto.descripcion}
                                </Card.Text>
                                <Card.Text>
                                    Precio: ${producto.precio}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ItemListContainer;