import React, { useState, useEffect } from 'react';
import { Button, ListGroup, Container } from 'react-bootstrap';
import CartItem from './CartItem';
import { getProductosPorIds } from '../asyncMock';
import CategoryTagApertura from './CategoryTagsApertura';
import CategoryTagCierre from './CategoryTagsCierre';


const Cart = () => {
    const [productosEnCarrito, setProductosEnCarrito] = useState([]);
    const [botonPresionado, setBotonPresionado] = useState(null);

    useEffect(() => {
        const carritoEnLocalStorage = localStorage.getItem('carrito');
        const carritoParseado = JSON.parse(carritoEnLocalStorage) || [];

        const productosEnCarrito = getProductosPorIds(carritoParseado.map((producto) => producto.id));
        setProductosEnCarrito(productosEnCarrito);
    }, []);

    const handleIncrement = (id) => {
        setBotonPresionado('increment');
        const updatedProductos = productosEnCarrito.map((producto) =>
            producto.id === id ? { ...producto, cantidad: producto.cantidad + 1 } : producto
        );
        setProductosEnCarrito(updatedProductos);
        actualizarCarritoLocalStorage(updatedProductos);
    };

    const handleDecrement = (id) => {
        setBotonPresionado('decrement');
        const updatedProductos = productosEnCarrito.map((producto) =>
            producto.id === id && producto.cantidad > 1 ? { ...producto, cantidad: producto.cantidad - 1 } : producto
        );
        setProductosEnCarrito(updatedProductos);
        actualizarCarritoLocalStorage(updatedProductos);
    };

    const handleRemove = (id) => {
        const updatedProductos = productosEnCarrito.filter((producto) => producto.id !== id);
        setProductosEnCarrito(updatedProductos);
        actualizarCarritoLocalStorage(updatedProductos);
    };

    const actualizarCarritoLocalStorage = (productos) => {
        localStorage.setItem('carrito', JSON.stringify(productos));
        window.dispatchEvent(new CustomEvent('cartChange'));
    };

    const calcularSubtotal = () => {
        return productosEnCarrito.reduce((subtotal, producto) => subtotal + producto.precio * producto.cantidad, 0);
    };

    const calcularCantidadProductos = () => {
        return productosEnCarrito.reduce((cantidadTotal, producto) => cantidadTotal + producto.cantidad, 0);
    };

    const handleFinalizarCompra = () => {
        console.log('Compra finalizada');
    };



    return (
        <Container className="d-flex flex-column align-items-center">
            <div className="align-self-start">
                <CategoryTagApertura>Carrito</CategoryTagApertura>
            </div>
            <ListGroup style={{ width: '80%' }}>
                {productosEnCarrito.map((producto) => (
                    <CartItem
                        key={producto.id}
                        {...producto}
                        onIncrement={() => handleIncrement(producto.id)}
                        onDecrement={() => handleDecrement(producto.id)}
                        onRemove={() => handleRemove(producto.id)}
                        botonPresionado={botonPresionado}
                    />
                ))}
            </ListGroup>
            <div className="mt-4">
                <h4>Resumen de la cuenta</h4>
                <p>Cantidad de productos: {calcularCantidadProductos()}</p>
                <p>Subtotal: ${calcularSubtotal()}</p>
            </div>
            <Button variant="primary" className="mt-3" onClick={handleFinalizarCompra}>
                Finalizar compra
            </Button>
            <div className="align-self-end">
                <CategoryTagCierre>Carrito</CategoryTagCierre>
            </div>
        </Container>
    );
};

export default Cart;
