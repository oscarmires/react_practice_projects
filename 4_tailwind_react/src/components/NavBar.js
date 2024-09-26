import React from "react";

const Navbar = () => {
    return (
        <header className="border border-b-1">
            <nav className="flex flex-row w-100 justify-between mx-10 py-5">
                <a href="/" className="font-bold text-xl">
                    Bantura
                </a>
                <ul className="flex flex-row space-x-4">
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/config">Configuración</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
