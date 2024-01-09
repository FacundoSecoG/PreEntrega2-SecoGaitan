import { Container } from 'react-bootstrap';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductosPorCategoria, getProductos } from '../asyncMock';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { category } = useParams();

    useEffect(()=>{
        if (category) {
            getProductosPorCategoria(category).then(response=>{
                setProducts(response)
            })
            .catch(error=>{
                console.error(error)
            })
        } else {
            getProductos().then(response=>{
                setProducts(response)
            })
            .catch(error=>{
                console.error(error)
            })
        }
    },[category])

    return (
        <Container className="mw-75 mt-4">
            {greeting && (
                <h1 style={{ fontSize: '4rem', textAlign: 'center', padding: '2rem'}}>
                    {greeting.split("Tuki E-Commerce").map((item, index) =>
                        index === 0 ?
                            <span key={index}>{item}<span style={{ color: '#0d6efd' }}>Tuki E-Commerce!</span></span> : <span key={index}>{item}</span>
                    )}
                </h1>
            )}
            <ItemList products={products} />
        </Container>
    )
}

export default ItemListContainer;