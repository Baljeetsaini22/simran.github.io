import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <p>Email: <a href="mailto:simran.uiux@example.com" className="text-cyan-400">simran.uiux@example.com</a></p>
            <p>Phone: <a href="tel:+919876543210" className="text-cyan-400">+91 98765 43210</a></p>
            <p>Location: Chandigarh, India</p>
            <p className="text-sm text-gray-400">
              I’m always open to discussing new projects, design challenges, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white outline-none focus:ring-2 ring-cyan-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white outline-none focus:ring-2 ring-pink-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white outline-none focus:ring-2 ring-fuchsia-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black px-6 py-2 rounded font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
