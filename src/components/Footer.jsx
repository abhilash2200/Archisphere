import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={assets.footer}
          alt="footer background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-12 justify-between">
          {/* Logo & Description */}
          <div className="w-full md:w-[48%] lg:w-[25%] space-y-4 md:space-y-5">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#D1BAA2] tracking-widest uppercase">
              archisphere
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Far far away, behind the word mountains, far from the countries
              where dreams meet design.
            </p>
            <div className="flex gap-4 text-lg md:text-xl text-white">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#D1BAA2] transition-all duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#D1BAA2] transition-all duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#D1BAA2] transition-all duration-200"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {[
            {
              heading: "Community",
              links: [
                { label: "Home", path: "/" },
                { label: "Projects", path: "/projects" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ],
            },
            {
              heading: "Company",
              links: [
                { label: "Terms", path: "/terms" },
                { label: "Careers", path: "/careers" },
                { label: "Support", path: "/support" },
                { label: "Privacy", path: "/privacy" },
              ],
            },
            {
              heading: "Contact Us",
              links: [
                { label: "Email", path: "/contact/email" },
                { label: "Phone", path: "/contact/phone" },
                { label: "Office", path: "/contact/office" },
                { label: "Feedback", path: "/contact/feedback" },
              ],
            },
          ].map((section, i) => (
            <div key={i} className="w-full sm:w-[45%] md:w-[48%] lg:w-[20%] space-y-4 md:space-y-5">
              <h3 className="text-base md:text-lg font-semibold text-[#D1BAA2] uppercase">
                {section.heading}
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="hover:text-[#D1BAA2] transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + Copyright */}
        <div className="mt-10 md:mt-14 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Archisphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;