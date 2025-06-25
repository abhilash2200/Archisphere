import React from "react";
import Layout from "../components/Layout";
import { assets } from "../assets/assets";
import { FaSearch, FaInstagram } from "react-icons/fa";

const AmmanRotanaHotel2019 = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <div className="relative h-[400px] md:h-[700px] overflow-hidden">
          <img
            src={assets.ammanrotanahotel}
            alt="Amman Rotana Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
            <p className="text-sm md:text-base tracking-[6px] text-[#D1BAA2] uppercase mb-2">
              Interior · Hospitality
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase drop-shadow-md px-4 py-2">
              Amman Rotana Hotel
            </h2>
          </div>
        </div>
      </div>

      {/* Content + Gallery Section */}
      <div className="container mx-auto px-4 py-24">
        {/* Content */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-[#D1BAA2] text-sm uppercase tracking-[6px] mb-3 text-center">
            Project Insight
          </h3>
          <h2 className="text-[#495944] text-4xl md:text-5xl font-bold text-center mb-10 leading-tight">
            Redefining Luxury Hospitality
          </h2>
          <div className="border-l-1 border-[#495944] pl-6 text-[#444] text-lg leading-relaxed space-y-6">
            <p>
              Situated in the heart of Amman, the Rotana Hotel reflects Jordan’s
              modern urban ambitions with timeless elegance. It stands as a
              statement of architectural precision and luxury.
            </p>
            <p>
              Every interior space is curated with custom-made furniture, soft
              indirect lighting, and natural material palettes that promote both
              calmness and sophistication — ideal for both business and leisure
              guests.
            </p>
            <p>
              This 30-floor vertical hospitality landmark includes world-class
              amenities: an infinity pool, rooftop sky lounge, fitness and
              wellness centers, and tech-enhanced smart rooms — all integrated
              within an architectural shell that emphasizes verticality and
              glass transparency.
            </p>
          </div>
        </div>

        {/* Project Highlights */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-24">
          {[
            { label: "Floors", value: "30" },
            { label: "Suites", value: "412" },
            { label: "Rating", value: "5★" },
          ].map((item, idx) => (
            <div key={idx}>
              <h4 className="text-4xl font-extrabold text-[#495944]">
                {item.value}
              </h4>
              <p className="text-sm text-[#666] uppercase tracking-widest mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <h3 className="text-[#495944] text-2xl md:text-3xl font-semibold mb-10 text-center uppercase tracking-wider">
          Project Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            assets.proin1,
            assets.proin2,
            assets.proin3,
            assets.proin4,
            assets.proin5,
            assets.proin6,
            assets.proin7,
            assets.proin8,
            assets.proin9,
            assets.proin10,
            assets.proin11,
            assets.proin12,
          ].map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={img}
                alt={`Amman Rotana view ${index + 1}`}
                className="w-full h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-[#49594480] bg-opacity-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-x-4 text-white text-xl">
                  <a
                    href={img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D1BAA2] transition-all duration-300"
                  >
                    <FaSearch />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#D1BAA2] transition-all duration-300"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Summary Section */}
        <div className="max-w-5xl mx-auto mt-24 bg-[#F8F8F8] rounded-xl shadow-md p-10">
          <h3 className="text-[#495944] text-2xl md:text-3xl font-semibold mb-6 uppercase tracking-wider text-center">
            Project Summary
          </h3>
          <div className="space-y-6 text-[#505050] text-center text-lg leading-relaxed">
            <p>
              Amman Rotana Hotel sets a benchmark for five-star hospitality
              experiences in the region. With a bold architectural silhouette
              and thoughtfully designed interiors, the hotel attracts luxury
              travelers, international business delegates, and city dwellers
              seeking refined comfort.
            </p>
            <p>
              The project's success lies in the collaboration between
              architects, designers, and engineers who envisioned not just a
              building — but a lifestyle. Every detail, from acoustic privacy in
              rooms to light-responsive façades, reflects intentionality and
              innovation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AmmanRotanaHotel2019;
