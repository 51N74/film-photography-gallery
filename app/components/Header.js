import React from 'react';

const Header = () => {
    return (
        <header className="container-xl bg-white">
            <nav className="py-4">
                <ul className="flex justify-left mx-32 space-x-8 text-xl text-black">
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;