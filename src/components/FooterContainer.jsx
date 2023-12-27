import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FooterLegales from './FooterLegales';
import FooterRedes from './FooterRedes';

const FooterContainer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <Container className="p-4">
                <Row className="d-flex justify-content-between align-items-center">
                    <FooterRedes />
                    <FooterLegales />
                </Row>
            </Container>
        </footer>
    );
}

export default FooterContainer;