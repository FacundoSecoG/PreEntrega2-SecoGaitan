import { Card, Row, Col, Container, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { FaExpandAlt } from "react-icons/fa";
import { useState, useEffect } from 'react';

const ItemListContainer = ({productos, greeting }) => {
    return (
        <Container className="mw-75 mt-4">
            <h1 style={{ fontSize: '50px', textAlign: 'center', padding: '2rem' }}>
                {greeting.split("TUKI Tienda").map((item, index) => 
                    index === 0 ? 
                    <>{item}<span style={{ color: '#0000ff' }}>TUKI E-Commerce!</span></> : item
                )}
            </h1>
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
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Card.Title style={{ 
                                        display: '-webkit-box', 
                                        WebkitLineClamp: '2', 
                                        WebkitBoxOrient: 'vertical', 
                                        overflow: 'hidden', 
                                        flex: '1 1 auto',
                                        minHeight: '50px',
                                    }} title={producto.producto1}>
                                        {producto.producto1}
                                    </Card.Title>
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                Agregar al carrito
                                            </Tooltip>
                                        }
                                    >
                                        <Button variant="primary" className="ml-2">
                                            <FaShoppingCart />
                                        </Button>
                                    </OverlayTrigger>
                                </div>
                                <Card.Text style={{ 
                                    display: '-webkit-box',
                                    WebkitLineClamp: '3',
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    minHeight: '75px'
                                }} title={producto.descripcion}>
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