import React from 'react';
import { FaShoppingCart, FaExpandAlt } from 'react-icons/fa';
import { Card, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { agregarProductoAlCarrito } from '../asyncMock'; 

const Item = ({ id, categoria, nombre, descripcion, precio, imagen }) => {
    const navigate = useNavigate();

    const handleExpandClick = () => {
        navigate(`/ItemDetail/${id}`);
    };

    const handleAgregarCarritoClick = () => {
        agregarProductoAlCarrito(id);
    };

    return (
        <div>
            <Card style={{ maxWidth: '300px', margin: 'auto' }} className="position-relative">
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            <Link to={`/ItemDetail/${id}`}>Expandir</Link>
                        </Tooltip>
                    }
                >
                    <Button variant="primary" className="position-absolute top-0 end-0 m-2" onClick={handleExpandClick}>
                        <FaExpandAlt />
                    </Button>
                </OverlayTrigger>
                <Card.Img variant="top" src={imagen} style={{ height: '380px', objectFit: 'cover' }} />
                <Card.Body className="position-relative">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Card.Title style={{
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            flex: '1 1 auto',
                            minHeight: '50px',
                        }} title={nombre}>
                            {nombre}
                        </Card.Title>
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Agregar al carrito
                                </Tooltip>
                            }
                        >
                            <Button variant="primary" className="ml-2" onClick={handleAgregarCarritoClick}>
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
                    }} title={descripcion}>
                        {descripcion}
                    </Card.Text>
                    <Card.Text>
                        Precio: ${precio}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;
