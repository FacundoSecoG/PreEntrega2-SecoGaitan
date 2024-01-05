import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <img src="/gameIcon.svg" alt="Game Icon" style={{ width: '100px', height: 'auto' }} />
            <Spinner animation="border" variant="primary" style={{ marginTop: '20px' }} />
        </div>
    );
};

export default Loader;