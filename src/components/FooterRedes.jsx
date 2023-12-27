import React, { useState } from 'react';
import { Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterRedes = () => {
    const [iconColor, setIconColor] = useState({ facebook: 'black', instagram: 'black', twitter: 'black' });

    const handleMouseEnter = (network) => {
        setIconColor({ ...iconColor, [network]: 'blue' });
    };

    const handleMouseLeave = (network) => {
        setIconColor({ ...iconColor, [network]: 'black' });
    };

    const renderTooltip = (props, socialNetwork) => (
        <Tooltip id="button-tooltip" {...props}>
            {socialNetwork}
        </Tooltip>
    );

    return (
        <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Follow Us</h5>
            <ul className="list-unstyled">
                <li className="list-inline-item">
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(props) => renderTooltip(props, 'Facebook')}
                    >
                        <a href="#!" className="btn-floating btn-sm m-1" onMouseEnter={() => handleMouseEnter('facebook')} onMouseLeave={() => handleMouseLeave('facebook')}>
                            <FaFacebook size={32} color={iconColor.facebook} />
                        </a>
                    </OverlayTrigger>
                </li>
                <li className="list-inline-item">
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(props) => renderTooltip(props, 'Instagram')}
                    >
                        <a href="#!" className="btn-floating btn-sm m-1" onMouseEnter={() => handleMouseEnter('instagram')} onMouseLeave={() => handleMouseLeave('instagram')}>
                            <FaInstagram size={32} color={iconColor.instagram} />
                        </a>
                    </OverlayTrigger>
                </li>
                <li className="list-inline-item">
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(props) => renderTooltip(props, 'Twitter')}
                    >
                        <a href="#!" className="btn-floating btn-sm m-1" onMouseEnter={() => handleMouseEnter('twitter')} onMouseLeave={() => handleMouseLeave('twitter')}>
                            <FaTwitter size={32} color={iconColor.twitter} />
                        </a>
                    </OverlayTrigger>
                </li>
            </ul>
        </Col>
    );
}

export default FooterRedes;