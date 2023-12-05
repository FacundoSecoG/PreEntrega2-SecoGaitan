import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { Badge, Nav } from 'react-bootstrap';

const CartWidget = () => {

    const [contadorProductos,setContadorProductos] = useState(0)
    return (
        <Nav.Link href="#" className="d-flex align-items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="me-2"/>
            <Badge pill bg="secondary">{contadorProductos}</Badge>
        </Nav.Link>
    )
}

export default CartWidget;