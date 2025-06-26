import React from "react";
import Layout from "../components/Layout";
import { assets } from "../assets/assets";
import { FaCalendarAlt, FaShareAlt, FaBookmark } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const TheRoleOfTechnologyInModernArchitecture = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-[#F5F5F5]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-4 flex justify-center items-center space-x-4 text-sm text-[#666]">
            <span className="flex items-center">
              <FaCalendarAlt className="mr-2 text-[#D1BAA2]" />
              June 15, 2023
            </span>
            <span>•</span>
            <span>5 min read</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#495944] mb-6 leading-tight">
            The Role of Technology in Modern Architecture
          </h1>
          
          <div className="w-20 h-1 bg-[#D1BAA2] mx-auto mb-6"></div>
          
          <p className="text-lg text-[#505050] max-w-2xl mx-auto leading-relaxed">
            Discover how cutting-edge innovations are transforming the world of
            architecture and what this means for the future of our built environment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
            {/* Article Content */}
            <article className="lg:w-[70%]">
              {/* Featured Image */}
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-10">
                <img
                  src={assets.blog1}
                  alt="The Role of Technology in Modern Architecture"
                  className="w-full h-auto md:h-[500px] object-cover"
                  loading="eager"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-sm">Image: Digital rendering of futuristic architecture</p>
                </div>
              </div>

              {/* Article Meta */}
              <div className="flex justify-between items-center mb-8 text-sm text-[#666]">
                <div className="flex space-x-4">
                  <button className="flex items-center hover:text-[#D1BAA2] transition">
                    <FaBookmark className="mr-2" /> Save
                  </button>
                  <button className="flex items-center hover:text-[#D1BAA2] transition">
                    <FaShareAlt className="mr-2" /> Share
                  </button>
                </div>
              </div>

              {/* Article Body */}
              <div className="prose lg:prose-xl max-w-none">
                <p className="lead">
                  Technology has become the cornerstone of innovation in modern architecture, 
                  revolutionizing how we design, construct, and interact with built environments.
                </p>

                <h2 className="text-2xl md:text-3xl text-[#495944] mt-12 mb-6 border-b pb-2">
                  Digital Design & Simulation
                </h2>
                <p>
                  The architectural landscape has been transformed by tools like BIM (Building Information Modeling), 
                  which allows for comprehensive digital representations of physical and functional characteristics. 
                  Parametric design enables architects to manipulate complex geometries with mathematical precision, 
                  while real-time rendering provides instant visualization of concepts.
                </p>

                <div className="my-8 p-6 bg-[#F8F8F8] rounded-lg border-l-4 border-[#D1BAA2]">
                  <p className="font-medium italic">
                    "With these tools, we're not just designing buildings—we're simulating entire ecosystems 
                    before construction begins, reducing errors and optimizing performance."
                  </p>
                </div>

                <h2 className="text-2xl md:text-3xl text-[#495944] mt-12 mb-6 border-b pb-2">
                  Smart Materials Revolution
                </h2>
                <p>
                  Today's architects have access to materials that were once science fiction:
                </p>
                <ul className="space-y-2 my-4">
                  <li className="flex items-start">
                    <span className="text-[#D1BAA2] mr-2">•</span>
                    <span>Electrochromic glass that adjusts transparency based on sunlight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D1BAA2] mr-2">•</span>
                    <span>Self-healing concrete that repairs its own cracks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D1BAA2] mr-2">•</span>
                    <span>Phase-changing materials that regulate temperature</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl text-[#495944] mt-12 mb-6 border-b pb-2">
                  Construction Technology Advancements
                </h2>
                <p>
                  The building process itself is undergoing radical transformation:
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-lg mb-2">3D Printing</h3>
                    <p className="text-sm">Creating complex structural components with precision and minimal waste</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-lg mb-2">Robotic Assembly</h3>
                    <p className="text-sm">Automated systems for faster, safer construction processes</p>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl text-[#495944] mt-12 mb-6 border-b pb-2">
                  Sustainable Tech Integration
                </h2>
                <p>
                  Modern architecture increasingly incorporates technologies that reduce environmental impact:
                </p>
                <ul className="space-y-2 my-4">
                  <li className="flex items-start">
                    <span className="text-[#D1BAA2] mr-2">•</span>
                    <span>Building-integrated photovoltaics (BIPV)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D1BAA2] mr-2">•</span>
                    <span>Smart water management systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D1BAA2] mr-2">•</span>
                    <span>AI-powered energy optimization</span>
                  </li>
                </ul>
              </div>

              {/* Conclusion */}
              <div className="mt-16 p-8 bg-[#495944] text-white rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Looking Ahead</h3>
                <p>
                  As we stand at the intersection of architecture and technology, the possibilities 
                  are limitless. The buildings of tomorrow will be more responsive, sustainable, 
                  and human-centric than ever before, thanks to these technological advancements.
                </p>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-[30%]">
              <div className="sticky top-8 space-y-8">
                {/* Author Bio */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                      <img src={assets.author1} alt="Author" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Chen</h4>
                      <p className="text-sm text-[#666]">Lead Architect & Technology Specialist</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#505050]">
                    With 15 years at the forefront of architectural technology, Sarah explores how innovation shapes our built environment.
                  </p>
                </div>

                {/* Recent Posts */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-lg mb-4 pb-2 border-b">More Articles</h3>
                  <ul className="space-y-4">
                    {[
                      {
                        title: "Sustainable Design: Building a Greener Future",
                        date: "May 28, 2023",
                        url: "/blogs/sustainable-design"
                      },
                      {
                        title: "The Psychology of Space in Residential Design",
                        date: "April 15, 2023",
                        url: "/blogs/psychology-of-space"
                      },
                      {
                        title: "Adaptive Reuse: Giving Old Buildings New Life",
                        date: "March 3, 2023",
                        url: "/blogs/adaptive-reuse"
                      }
                    ].map((post, index) => (
                      <li key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <a href={post.url} className="group">
                          <h4 className="font-medium text-[#495944] group-hover:text-[#D1BAA2] transition mb-1">
                            {post.title}
                          </h4>
                          <p className="text-xs text-[#666]">{post.date}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-[#F8F8F8] p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-3">Stay Updated</h3>
                  <p className="text-sm text-[#505050] mb-4">
                    Get the latest architecture insights delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 rounded border border-gray-300 text-sm"
                    />
                    <button 
                      type="submit"
                      className="w-full bg-[#495944] text-white py-2 rounded text-sm font-medium hover:bg-[#374636] transition"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12 md:py-16 px-4 bg-[#F5F5F5]">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#495944] mb-8 text-center">
            Continue Reading
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: assets.blog2,
                title: "Biophilic Design Principles",
                excerpt: "How integrating nature improves wellbeing in built environments",
                url: "/blogs/biophilic-design"
              },
              {
                img: assets.blog3,
                title: "The Future of Smart Cities",
                excerpt: "Urban planning in the age of IoT and AI integration",
                url: "/blogs/smart-cities"
              },
              {
                img: assets.blog4,
                title: "Material Innovations 2023",
                excerpt: "Emerging materials changing the face of construction",
                url: "/blogs/material-innovations"
              }
            ].map((post, index) => (
              <a key={index} href={post.url} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <img 
                    src={post.img} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-[#D1BAA2] transition">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#505050] mb-3">{post.excerpt}</p>
                    <span className="inline-flex items-center text-sm text-[#495944] font-medium group-hover:text-[#D1BAA2] transition">
                      Read more <FiArrowRight className="ml-1" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TheRoleOfTechnologyInModernArchitecture;