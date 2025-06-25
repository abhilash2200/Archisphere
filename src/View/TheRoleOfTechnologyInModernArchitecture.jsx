import React from "react";
import Layout from "../components/Layout";
import { assets } from "../assets/assets";

const TheRoleOfTechnologyInModernArchitecture = () => {
  return (
    <Layout>
      <section className="py-24 px-4 text-center bg-[#F5F5F5]">
        <div className="container mx-auto max-w-3xl">
          <h1 className="relative inline-block text-[#495944] text-2xl md:text-4xl font-bold uppercase tracking-wide mb-6">
            The Role of Technology in Modern Architecture
            <span className="block h-0.5 w-16 bg-[#D1BAA2] mx-auto mt-3"></span>
          </h1>
          <p className="text-base md:text-lg text-[#505050] leading-relaxed">
            Discover how cutting-edge innovations are transforming the world of
            architecture. From digital tools to sustainable solutions, explore
            what the future holds.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F5F5] pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:flex-nowrap gap-12">
            {/* Left Column: Blog Content */}
            <div className="lg:w-[70%] w-full">
              {/* Blog Image */}
              <img
                src={assets.blog1}
                alt="The Role of Technology in Modern Architecture"
                className="rounded-xl shadow-lg mb-10 w-full h-[400px] object-cover"
              />

              {/* Blog Text Content */}
              <article className="prose lg:prose-lg max-w-none prose-headings:text-[#495944] prose-p:text-[#333] prose-li:marker:text-[#D1BAA2] prose-blockquote:border-l-[#D1BAA2] prose-blockquote:text-[#495944]">
                <p>
                  Technology has become a driving force in redefining the
                  possibilities of modern architecture. From digital design
                  tools to cutting-edge materials, technological advancements
                  are shaping the way architects conceptualize, construct, and
                  refine their creations.
                </p>

                <h2>1. Digital Design & Simulation</h2>
                <p>
                  With the rise of BIM (Building Information Modeling),
                  parametric design, and real-time rendering tools, architects
                  can now explore complex forms, simulate environmental impact,
                  and collaborate more efficiently than ever before. These tools
                  enable precision, reduce human error, and bring concepts to
                  life before ground is even broken.
                </p>

                <h2>2. Smart Materials</h2>
                <p>
                  The integration of smart materials — such as electrochromic
                  glass, self-healing concrete, and responsive building skins —
                  is revolutionizing architectural performance. These materials
                  adapt to external conditions, enhancing energy efficiency,
                  comfort, and longevity in both residential and commercial
                  buildings.
                </p>

                <h2>3. Automation & Construction Tech</h2>
                <p>
                  Robotics, 3D printing, and automated construction equipment
                  are transforming the building process. From prefabricated
                  modular components to on-site robotic arms, automation
                  accelerates timelines, ensures consistency, and minimizes
                  waste — all while opening doors to previously unbuildable
                  forms.
                </p>

                <h2>4. Sustainability through Technology</h2>
                <p>
                  Architectural sustainability is no longer optional — it's
                  essential. Green technologies like solar facades, rainwater
                  harvesting systems, and intelligent HVAC solutions empower
                  architects to design buildings that are environmentally
                  responsible and future-ready.
                </p>

                <blockquote>
                  “The future of architecture is intertwined with the evolution
                  of technology. Embracing these tools empowers architects to
                  dream bigger and build smarter.”
                </blockquote>

                <p>
                  As we move forward, the fusion of technology and architecture
                  will continue to break traditional boundaries. By embracing
                  innovation, architects are not only improving functionality
                  but also redefining the aesthetics and impact of the spaces we
                  inhabit.
                </p>
              </article>
            </div>

            {/* Right Column: Sidebar */}
            <aside className="lg:w-[30%] w-full bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-[#495944] mb-4 border-b pb-2">
                Recent Posts
              </h3>

              {/* Placeholder items — replace with dynamic content */}
              <ul className="space-y-4 text-[#333] text-sm">
                <li className="hover:text-[#D1BAA2] transition">
                  <a href="/blogs/sustainable-design-building-a-greener-future-in-architecture">
                    Sustainable Design: Building a Greener Future
                  </a>
                </li>
                <li className="hover:text-[#D1BAA2] transition">
                  <a href="/blogs/architecture-in-extreme-climates-designing-for-resilience">
                    Architecture in Extreme Climates
                  </a>
                </li>
                <li className="hover:text-[#D1BAA2] transition">
                  <a href="/blogs/material-innovation-the-future-of-construction">
                    Material Innovation: The Future of Construction
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TheRoleOfTechnologyInModernArchitecture;
