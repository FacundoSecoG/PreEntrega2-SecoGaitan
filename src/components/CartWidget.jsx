import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react"
import { Badge, Button } from 'react-bootstrap';

const CartWidget = () => {
    const [contadorProductos, setContadorProductos] = useState(0)

    const getCartCount = () => {
        const cart = JSON.parse(localStorage.getItem('carrito'));
        if (cart) {
            let totalItems = 0;
            cart.forEach(item => {
                totalItems += item.cantidad;
            });
            setContadorProductos(totalItems);
        }
    }

    useEffect(() => {
        getCartCount(); 
        window.addEventListener('cartChange', getCartCount);
        return () => {
            window.removeEventListener('cartChange', getCartCount);
        }
    }, []);

    return (
        <Button variant="primary" className="d-flex align-items-center m-3 ml-lg-3">
            <FontAwesomeIcon icon={faShoppingCart} className="me-2"/>
            <Badge>{contadorProductos}</Badge>
        </Button>
    )
}

export default CartWidget;