import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { useState } from "react"

const CartWidget = () => {

    const [contadorProductos,setContadorProductos] = useState(0)
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <h2>{contadorProductos}</h2>
        </div>
    )
}

export default CartWidget