import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-12 justify-between">

          {/* Logo & Description */}
          <div className="w-full md:w-[48%] lg:w-[25%] space-y-5">
            <h2 className="text-3xl font-extrabold text-[#D1BAA2] tracking-widest uppercase">archisphere</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Far far away, behind the word mountains, far from the countries where dreams meet design.
            </p>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-[#D1BAA2] transition-all duration-200">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#D1BAA2] transition-all duration-200">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-[#D1BAA2] transition-all duration-200">
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
            <div key={i} className="w-full md:w-[48%] lg:w-[20%] space-y-5">
              <h3 className="text-lg font-semibold text-[#D1BAA2] uppercase">{section.heading}</h3>
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
        <div className="mt-14 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Archisphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
