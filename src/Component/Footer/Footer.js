import React from 'react';
import img from './../../Img/logo.png';
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="logo">
                    <h4>Monirul</h4>
                </div>
                <div className="copy">
                    <p>© 2022. All rights reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;