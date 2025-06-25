import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#495944] py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4">Get in Touch</h1>
          <p className="text-lg max-w-2xl mx-auto text-[#E6E6E6]">
            Whether you're planning your next project or have inquiries about our services, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 px-4 bg-[#F5F5F5]">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-[#495944] mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-[#333]">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D1BAA2]"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-[#333]">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D1BAA2]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-[#333]">Message</label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D1BAA2]"
                  placeholder="Tell us about your project or question"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#495944] text-white px-6 py-3 rounded-full font-semibold uppercase hover:bg-[#374636] hover:cursor-pointer transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center text-[#333]">
            <h2 className="text-2xl font-semibold text-[#495944] mb-6">Contact Details</h2>
            <p className="mb-4">
              <span className="font-semibold">Email:</span> info@archisphere.com
            </p>
            <p className="mb-4">
              <span className="font-semibold">Phone:</span> +91 98765 43210
            </p>
            <p className="mb-4">
              <span className="font-semibold">Office:</span> 123 Architectural Blvd, Sector 45, Mumbai, India
            </p>
            <p className="mt-6 text-sm text-[#666]">
              We respond to inquiries within 24 hours on business days.
            </p>
          </div>
        </div>
      </section>


      {/* Map Section */}
      <section className="w-full">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609841124!2d72.74109833954708!3d19.08219783870251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63fdf14f4ff%3A0xe81f06a2b6d49e96!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719314000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full border-0"
        ></iframe>
      </section>

    </Layout>
  );
};

export default Contact;
