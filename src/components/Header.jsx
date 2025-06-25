import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h2
          className={`text-2xl font-bold ${
            scrolled ? "text-white" : "text-[#D1BAA2]"
          }`}
        >
          <NavLink to="/">Archisphere</NavLink>
        </h2>
        <nav>
          <ul className="flex gap-6">
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
                    `uppercase tracking-widest text-sm transition-colors duration-300 ${
                      isActive
                        ? "text-[#D1BAA2] underline underline-offset-8"
                        : scrolled
                        ? "text-white hover:text-[#D1BAA2]"
                        : "text-[#D1BAA2] hover:text-white"
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
