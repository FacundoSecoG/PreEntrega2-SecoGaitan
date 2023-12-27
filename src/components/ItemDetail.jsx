import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

const ItemDetail = ({ productos }) => {
    const { id } = useParams();
    const producto = productos.find((producto) => producto.id === id);

    return (
        <div className="container my-4">
            <Card className="d-flex">
                <Row>
                    {/* Parte izquierda: Imagen */}
                    <Col xs={12} md={6}>
                        <Card.Img
                            variant="top"
                            src={producto.imagen || 'https://via.placeholder.com/150'}
                            style={{ height: '100%' }}
                        />
                    </Col>
                    {/* Parte derecha: Información */}
                    <Col xs={12} md={6}>
                        <Card.Body>
                            <Card.Title className="h1">{producto.producto}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted h3">{producto.categoria}</Card.Subtitle>
                            <Card.Text className="lead">{producto.descripcion}</Card.Text>
                            <Card.Text className="h4">Precio: ${producto.precio}</Card.Text>
                            <Button variant="primary">Agregar al carrito</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default ItemDetail;
