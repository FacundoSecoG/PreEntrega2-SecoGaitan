import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './itemList';

const ProductCategory = ({ productos }) => {
    const { Category } = useParams()
    const productosFiltrados = productos.filter(producto => producto.categoria === Category);

    return (
        <div>
            <ItemList  productos={productosFiltrados}/>
        </div>
    )
}

export default ProductCategory;