import React from 'react';
import Item from './Item';
import { Row, Col } from 'react-bootstrap';

const sortByPriceDescending = (a, b) => b.precio - a.precio;

const ItemList = ({ products }) => {
    const productsByCategory = {};

    products.forEach((product) => {
        if (!productsByCategory[product.categoria]) {
            productsByCategory[product.categoria] = [];
        }
        productsByCategory[product.categoria].push(product);
    });

    for (const category in productsByCategory) {
        productsByCategory[category].sort(sortByPriceDescending);
    }

    return (
        <div>
            {Object.entries(productsByCategory).map(([category, products]) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                        {products.map((product) => (
                            <Col key={product.id}>
                                <Item
                                    id={product.id}
                                    categoria={product.categoria}
                                    nombre={product.producto}
                                    descripcion={product.descripcion}
                                    precio={product.precio}
                                    imagen={product.imagen}
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
