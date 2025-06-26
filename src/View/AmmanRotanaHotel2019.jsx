import React from "react";
import Layout from "../components/Layout";
import { assets } from "../assets/assets";
import { FaSearch, FaInstagram, FaArrowRight } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const AmmanRotanaHotel2019 = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <div className="relative h-[60vh] min-h-[400px] md:h-[80vh] overflow-hidden">
          <img
            src={assets.ammanrotanahotel}
            alt="Amman Rotana Hotel"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>

          <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 pb-16 md:pb-24">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs md:text-sm tracking-[4px] md:tracking-[6px] text-[#D1BAA2] uppercase mb-2 md:mb-3">
                Interior · Hospitality
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-4 drop-shadow-lg">
                Amman Rotana Hotel
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto">
                A vertical hospitality marvel redefining luxury in Jordan's capital
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        {/* Project Insight */}
        <div className="max-w-5xl mx-auto mb-16 md:mb-24">
          <div className="text-center mb-10">
            <span className="inline-block text-xs md:text-sm uppercase tracking-[4px] text-[#D1BAA2] mb-3">
              Project Insight
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#495944] mb-6 leading-tight">
              Redefining Luxury Hospitality
            </h2>
            <div className="w-16 h-1 bg-[#D1BAA2] mx-auto"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-[#444] space-y-6">
            <p>
              Situated in the heart of Amman, the Rotana Hotel reflects Jordan's
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
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 md:gap-10 text-center mb-16 md:mb-24">
          {[
            { label: "Floors", value: "30", detail: "levels of luxury" },
            { label: "Suites", value: "412", detail: "rooms & suites" },
            { label: "Rating", value: "5★", detail: "luxury standard" },
          ].map((item, idx) => (
            <div key={idx} className="border-b border-[#D1BAA2] pb-4">
              <h3 className="text-3xl md:text-4xl font-bold text-[#495944] mb-1">
                {item.value}
              </h3>
              <p className="text-xs md:text-sm text-[#666] uppercase tracking-widest">
                {item.label}
              </p>
              <p className="text-xs text-[#999] mt-1 hidden md:block">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-[#495944] uppercase tracking-wider mb-2">
              Project Gallery
            </h3>
            <p className="text-[#666] text-sm max-w-2xl mx-auto">
              Explore the architectural details and interior spaces of this luxury hospitality landmark
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              assets.proin1, assets.proin2, assets.proin3,
              assets.proin4, assets.proin5, assets.proin6,
              assets.proin7, assets.proin8, assets.proin9,
              assets.proin10, assets.proin11, assets.proin12
            ].map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`Amman Rotana view ${index + 1}`}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 text-[#495944] p-3 rounded-full hover:bg-[#D1BAA2] hover:text-white transition-all"
                    aria-label="View image"
                  >
                    <FaSearch size={14} />
                  </a>
                  <button className="bg-white/90 text-[#495944] p-3 rounded-full hover:bg-[#D1BAA2] hover:text-white transition-all"
                    aria-label="Share">
                    <FiShare2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Summary */}
        <div className="max-w-5xl mx-auto bg-[#F8F8F8] rounded-lg md:rounded-xl shadow-sm p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-[#495944] uppercase tracking-wider mb-2">
              Project Summary
            </h3>
            <div className="w-16 h-1 bg-[#D1BAA2] mx-auto"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-[#505050] text-center space-y-6">
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
          
          <div className="mt-10 text-center">
            <a
              href="/projects"
              className="inline-flex items-center text-[#495944] font-medium hover:text-[#D1BAA2] transition-colors"
            >
              View all projects <FaArrowRight className="ml-2" size={14} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AmmanRotanaHotel2019;