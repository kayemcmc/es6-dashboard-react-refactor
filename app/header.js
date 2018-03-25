import React from 'react';

const Header = ({children}) => (
    <header>
    <nav className="navbar navbar-dark bg-primary mb-3">
    <div className="container">
        <span className="navbar-brand">{children}</span>
    </div>
    </nav>
</header>
)

export default Header;

