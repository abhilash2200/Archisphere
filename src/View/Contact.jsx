import React from "react";
import Layout from "../components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.info("Sending...");

    const formData = new FormData(form);
    formData.append("access_key", "d3b0d272-61a3-4165-81ec-97e7da885b61");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully!");
      form.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message || "Submission failed!");
    }
  };


  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#495944] py-12 md:py-20 text-white text-center mt-20">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-3 md:mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h1>

          <motion.p
            className="text-base md:text-lg max-w-2xl mx-auto text-[#E6E6E6]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you're planning your next project or have inquiries about
            our services, we're here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-8 md:py-16 px-4 bg-[#F5F5F5]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#495944] mb-4 md:mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-[#333]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-[#D1BAA2]"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-[#333]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-[#D1BAA2]"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-[#333]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-[#D1BAA2]"
                  placeholder="Tell us about your project or question"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#495944] text-white px-6 py-2 md:py-3 rounded-full font-semibold uppercase hover:bg-[#374636] hover:cursor-pointer transition duration-300 text-sm md:text-base"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center text-[#333] p-4 md:p-0"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#495944] mb-4 md:mb-6">
              Contact Details
            </h2>
            <div className="space-y-3 md:space-y-4">
              <p>
                <span className="font-semibold">Email:</span> info@archisphere.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +91 98765 43210
              </p>
              <p>
                <span className="font-semibold">Office:</span> 123 Architectural
                Blvd, Sector 45, Mumbai, India
              </p>
            </div>
            <p className="mt-4 md:mt-6 text-xs md:text-sm text-[#666]">
              We respond to inquiries within 24 hours on business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-64 md:h-96">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609841124!2d72.74109833954708!3d19.08219783870251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63fdf14f4ff%3A0xe81f06a2b6d49e96!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719314000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full border-0"
        ></iframe>
      </section>

      <ToastContainer position="top-right" autoClose={3000} />
    </Layout>
  );
};

export default Contact;
