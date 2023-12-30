import React from 'react';
import { Button, ListGroup, Row, Col } from 'react-bootstrap';

const CartItem = ({ id, producto, descripcion, precio, cantidad, onIncrement, onDecrement, onRemove }) => {
    return (
        <ListGroup.Item style={{ marginBottom: '10px' }}>
            <Row className="align-items-center">
                <Col md={6}>
                    <div className="d-flex flex-column">
                        <h5>{producto}</h5>
                        <p>{descripcion}</p>
                    </div>
                </Col>
                <Col md={2} className="text-center">
                    <p>${precio}</p>
                </Col>
                <Col md={4}>
                    <div className="d-flex align-items-center justify-content-center">
                        <Button variant="outline-secondary" onClick={onDecrement} disabled={cantidad === 1}>
                            -
                        </Button>
                        <span className="mx-2">{cantidad}</span>
                        <Button variant="outline-secondary" onClick={onIncrement}>
                            +
                        </Button>
                        <Button variant="danger" className="ml-2" onClick={onRemove}>
                            Eliminar
                        </Button>
                    </div>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default CartItem;
