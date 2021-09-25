import React from 'react';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <h1>hello from header</h1>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;