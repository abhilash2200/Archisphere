import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h2
          className={`text-xl md:text-2xl font-bold ${
            scrolled ? "text-white" : "text-[#D1BAA2]"
          }`}
        >
          <NavLink to="/">Archisphere</NavLink>
        </h2>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 lg:gap-6">
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
                    `uppercase tracking-wider md:tracking-widest text-xs md:text-sm transition-colors duration-300 ${
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FiX className={scrolled ? "text-white" : "text-[#D1BAA2]"} />
          ) : (
            <FiMenu className={scrolled ? "text-white" : "text-[#D1BAA2]"} />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/90 z-40 transition-all duration-300 md:hidden ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Mobile Navigation */}
        <nav
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#1a1a1a] z-40 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-8">
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
                    `uppercase tracking-wider text-lg transition-colors duration-300 ${
                      isActive ? "text-[#D1BAA2]" : "text-white hover:text-[#D1BAA2]"
                    }`
                  }
                  onClick={closeMobileMenu}
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