import React from 'react'
import ItemListContainer from "./ItemListContainer"
import { useState } from "react"

const Products = ({productos}) => {
    const [greeting, setGreeting] = useState("¡Bienvenidos al Tuki E-Commerce")
    return (
        <div>
            <ItemListContainer greeting={greeting} productos={productos} />
        </div>
    )
}

export default Products