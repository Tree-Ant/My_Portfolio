import React, { Component } from 'react';

import Logo from './Logo/Logo';
import NavLinks from './NavLinks/NavLinks';

import './NavBar.css';

class NavBar extends Component {
    render () {
        return (
            <div className='NavBar'>
                <Logo />
                <NavLinks />
            </div>
            
        )
    }
}

export default NavBar;