import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { FaExpandAlt } from "react-icons/fa";
import { Card, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

const Item = ({ id, categoria, nombre, descripcion, precio }) => {
    return (
        <div>
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
                    }} title={descripcion}>
                        {descripcion}
                    </Card.Text>
                    <Card.Text>
                        Precio: ${precio}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item