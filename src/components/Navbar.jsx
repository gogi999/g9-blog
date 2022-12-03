import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Welcome to G9 Blog!</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;
