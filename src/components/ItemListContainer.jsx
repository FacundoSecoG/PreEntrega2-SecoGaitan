import { Container } from 'react-bootstrap';
import ItemList from './itemList';

const ItemListContainer = ({ greeting }) => {

    const productos = [
        { id: "1", categoria: "", producto1: "Iphone 15 pro max", descripcion: "Descripcion de producto", precio: 1800 },
        { id: "2", categoria: "", producto1: "Samsung galaxy S24 ultra", descripcion: "Descripcion de producto", precio: 1200 },
        { id: "3", categoria: "", producto1: "Xiaomi redmi note 14 pro 5g", descripcion: "Descripcion de productoDescripcion de productoDescripcion de productoDescripcion de productoDescripcion de productoDescripcion de productoDescripcion de productoDescripcion de productoDescripcion de productoDescripcion de producto", precio: 500 },
        { id: "4", categoria: "", producto1: "Nokia 1100", descripcion: "Descripcion de producto", precio: 60 }
    ]

    return (
        <Container className="mw-75 mt-4">
            <h1 style={{ fontSize: '50px', textAlign: 'center', padding: '2rem' }}>
                {greeting.split("Tuki E-Commerce").map((item, index) =>
                    index === 0 ?
                        <span key={index}>{item}<span style={{ color: '#0000ff' }}>Tuki E-Commerce!</span></span> : <span key={index}>{item}</span>
                )}
            </h1>
            <ItemList productos={productos} />
        </Container>
    )
}

export default ItemListContainer;