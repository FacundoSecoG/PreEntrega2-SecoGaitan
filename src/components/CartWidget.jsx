import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { Badge, Button } from 'react-bootstrap';

const CartWidget = () => {
    const [contadorProductos,setContadorProductos] = useState(0)
    return (
        <Button variant="primary" className="d-flex align-items-center m-3 ml-lg-3">
            <FontAwesomeIcon icon={faShoppingCart} className="me-2"/>
            <Badge>{contadorProductos}</Badge>
        </Button>
    )
}

export default CartWidget;