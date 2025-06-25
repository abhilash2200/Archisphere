import React from "react";
import Layout from "../components/Layout.Jsx";
import { assets } from "../assets/assets";
import {
  FaRegLightbulb,
  FaDraftingCompass,
  FaTools,
  FaPeopleCarry,
  FaCheckCircle,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      img: assets.service1,
      title: "Design Consultation",
      number: "01",
    },
    {
      img: assets.service2,
      title: "Interior Planning",
      number: "02",
    },
    {
      img: assets.service3,
      title: "Project Execution",
      number: "03",
    },
  ];

  return (
    <Layout>
      {/* Section 1: Introduction */}
      <section className="container mx-auto px-4 py-20 mt-10">
        <div className="relative mb-4">
          <h2 className="text-[25px] font-normal tracking-[5px] uppercase text-[#D1BAA2] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-[#495944]">
            What we do
          </h2>
        </div>
        <h3 className="text-[#495944] text-4xl font-semibold uppercase mb-12 font-nunito">
          Build for everyone, with everyone.
        </h3>

        {/* Section 2: Services Grid */}
        <div className="flex flex-wrap justify-between gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-[32%] group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg sm:text-xl font-semibold text-[#495944] capitalize">
                      {service.title}
                    </h4>
                    <h3 className="text-4xl font-bold text-[#495944]/30">
                      {service.number}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Our Process */}
      <section className="bg-[#F5F5F5] py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl font-bold text-[#495944] uppercase mb-12 text-center">
            Our Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: <FaRegLightbulb />,
                title: "Discovery",
                desc: "Understanding your goals & vision.",
              },
              {
                icon: <FaDraftingCompass />,
                title: "Planning",
                desc: "Creating tailored strategies & layouts.",
              },
              {
                icon: <FaTools />,
                title: "Execution",
                desc: "Turning plans into precise, real-world results.",
              },
              {
                icon: <FaPeopleCarry />,
                title: "Delivery",
                desc: "Seamless handover & post-project support.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex flex-col justify-center items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <div className="text-4xl text-[#D1BAA2] mb-4">{step.icon}</div>
                <h4 className="text-xl font-semibold text-[#495944] mb-2">
                  {step.title}
                </h4>
                <p className="text-[#555] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="container mx-auto text-center max-w-5xl">
          <h3 className="text-3xl font-bold text-[#495944] uppercase mb-6 tracking-wide">
            Why Choose Archisphere?
          </h3>
          <p className="text-[#666] mb-12 text-base leading-relaxed">
            We don’t just design spaces — we design experiences. Our work blends
            creativity, sustainability, and precision to deliver architectural
            excellence that endures.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: "Client-Centric Design",
                desc: "Every design reflects your goals, lifestyle, and vision — not just our creativity.",
              },
              {
                title: "Sustainability First",
                desc: "Green design isn’t an option — it’s integrated into every stage of our work.",
              },
              {
                title: "Experienced Team",
                desc: "Led by experts with global exposure, our team delivers unmatched innovation.",
              },
              {
                title: "On-Time Delivery",
                desc: "We respect your deadlines without compromising creativity or quality.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow hover:shadow-lg p-6 border-l-4 border-[#D1BAA2] transition duration-300 flex items-start gap-4"
              >
                <FaCheckCircle className="text-[#D1BAA2] text-xl mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-[#495944] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[#555] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-[#495944] py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold uppercase mb-4">
            Let’s Build Something Meaningful
          </h3>
          <p className="max-w-xl mx-auto mb-8 text-lg text-[#E0E0E0]">
            From concept to construction, we’re with you at every step. Let’s
            collaborate to bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#495944] px-8 py-3 rounded-full text-sm font-semibold uppercase hover:bg-[#D1BAA2] hover:text-white transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
