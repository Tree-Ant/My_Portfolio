import React from 'react';

import Logo from '../../../assets/IMGs/logo.png';

import './Logo.css';

const logo = (props) => (
    <div className="Logo">
        <img src={Logo} alt="Logo"></img>
    </div>
);

export default logo;
