import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#FFF]">
                    <NavLink to="/" className="">Archisphere</NavLink>
                </h2>
                <nav>
                    <ul className="flex gap-4 space-x-6">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/about", label: "About" },
                            { to: "/blog", label: "Blog" },
                            { to: "/contact", label: "Contact" },
                            { to: "/project", label: "Project" },
                            { to: "/services", label: "Services" },
                        ].map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `uppercase tracking-widest transition-colors duration-300 transform underline-offset-8 ${isActive
                                            ? "text-[#495944] underline underline-[#FFF]"
                                            : "text-white tracking-widest hover:text-[#495944] hover:underline underline-[#FFF]"
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;



