import { Container } from 'react-bootstrap';
import ItemList from './itemList';

const ItemListContainer = ({ greeting, productos }) => {
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