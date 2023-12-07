import React from 'react'
import Item from './item'
import { Row, Col } from 'react-bootstrap';

const ItemList = ({ productos }) => {
    return (
        <div>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {productos.map((producto, idx) => (
                    <Col key={producto.id}>
                        <Item 
                            id={producto.id}
                            categoria={producto.categoria}
                            nombre={producto.producto1}
                            descripcion={producto.descripcion}
                            precio={producto.precio}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ItemList