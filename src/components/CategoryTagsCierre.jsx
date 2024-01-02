import React, { useState } from "react";

const CategoryTagCierre = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    const containerStyle = {
        fontSize: '2.5rem',
        textAlign: 'right',
        fontWeight: 'bold',
        textAlign: 'right',
        position: 'relative',
        cursor: 'pointer',
    };

    const tagStyle = {
        fontWeight: 'bold',
        fontSize: '3rem',
        zIndex: 1,
        color: isHovered ? '#0d6efd' : 'black',
        display: 'inline-block',
        padding: isHovered ? '0 0.7rem' : '0',
        transition: 'color 0.3s ease, padding 0.3s ease',
    };

    const angleBracketStyle = {
        fontSize: '3rem',
        margin: '0 0.2rem',
        color: 'black',
    };

    return (
        <div
            style={containerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span style={angleBracketStyle}>&lt;/</span>
            <span style={tagStyle}>{children}</span>
            <span style={angleBracketStyle}>&gt;</span>
        </div>
    );
};

export default CategoryTagCierre;
