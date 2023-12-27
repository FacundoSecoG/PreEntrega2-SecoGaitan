import React from 'react';
import Item from './Item';
import { Row, Col } from 'react-bootstrap';

const sortByPriceDescending = (a, b) => b.precio - a.precio;

const ItemList = ({ productos }) => {
    const productosPorMarca = {};
    productos.forEach((producto) => {
        if (!productosPorMarca[producto.categoria]) {
            productosPorMarca[producto.categoria] = [];
        }
        productosPorMarca[producto.categoria].push(producto);
    });
    for (const categoria in productosPorMarca) {
        productosPorMarca[categoria].sort(sortByPriceDescending);
    }
    return (
        <div>
            {Object.entries(productosPorMarca).map(([categoria, productos]) => (
                <div key={categoria}>
                    <h2>{categoria}</h2>
                    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                        {productos.map((producto) => (
                            <Col key={producto.id}>
                                <Item
                                    id={producto.id}
                                    categoria={producto.categoria}
                                    nombre={producto.producto}
                                    descripcion={producto.descripcion}
                                    precio={producto.precio}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
