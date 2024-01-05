import React from 'react';
import Item from './Item';
import { Row, Col, Container } from 'react-bootstrap';
import CategoryTagApertura from './CategoryTagsApertura';
import CategoryTagCierre from './CategoryTagsCierre';

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
        <Container>
            {Object.entries(productsByCategory).map(([category, products]) => (
                <div key={category}>
                    <CategoryTagApertura>{category}</CategoryTagApertura>
                    <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
                        {products.map((product) => (
                            <Col key={product.id} style={{ minWidth: '300px' }}>
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
                    <CategoryTagCierre>{category}</CategoryTagCierre>
                </div>
            ))}
        </Container>
    );
};

export default React.memo(ItemList);
