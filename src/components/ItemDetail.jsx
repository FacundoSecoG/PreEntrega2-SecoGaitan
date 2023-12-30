import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { getProductoPorId, agregarProductoAlCarrito } from '../asyncMock';

const ItemDetail = ({ getProductos }) => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            const productoData = await getProductoPorId(id);
            setProducto(productoData);
        };

        fetchProducto();
    }, [id]);

    const handleAgregarCarrito = () => {
        agregarProductoAlCarrito(id);
    };

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="container my-4">
            <Card className="d-flex">
                <Row>
                    <Col xs={12} md={6}>
                        <Card.Img variant="top" src={producto.imagen || 'https://via.placeholder.com/150'} style={{ height: '100%' }} />
                    </Col>
                    <Col xs={12} md={6}>
                        <Card.Body>
                            <Card.Title className="h1">{producto.producto}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted h3">{producto.categoria}</Card.Subtitle>
                            <Card.Text className="lead">{producto.descripcion}</Card.Text>
                            <Card.Text className="h4">Precio: ${producto.precio}</Card.Text>
                            <Button variant="primary" onClick={handleAgregarCarrito}>
                                Agregar al carrito
                            </Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default ItemDetail;
