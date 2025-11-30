// Updated Enquiry Component (English UK)
import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";

const Enquiry: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 800);
  };

  return (
    <div className="min-h-screen bg-[#f3f1f1] dark:bg-gray-900 transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#7a0b0b] dark:text-[#e8dddd] tracking-tight mb-3">
            Get in <span className="text-[#b81414]">Touch</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Send us a message or use our direct contact methods to reach us.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Left – Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 border border-gray-200 dark:border-gray-700">
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold text-[#7a0b0b] dark:text-white mb-10">
                  Contact Form
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 outline-none"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 outline-none"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 outline-none"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Your message here..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 outline-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#8b0d0d] hover:bg-[#a11212] text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center text-center space-y-6 py-10">
                <CheckCircle className="w-20 h-20 text-green-600" />
                <h2 className="text-3xl font-bold text-[#7a0b0b] dark:text-white">
                  Message Sent!
                </h2>
                <p className="text-gray-700 dark:text-gray-300 max-w-md">
                  Your message has been successfully sent. For faster assistance, use WhatsApp.
                </p>
                <a
                  href="https://wa.me/258841234567?text=Hello!%20I%20would%20like%20more%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition"
                >
                  Chat on WhatsApp
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            )}
          </div>

          {/* Right – Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#7a0b0b] dark:text-white mb-4">
                Contact Details
              </h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-lg">
                You can reach us directly through the channels below.
              </p>
            </div>

            {/* Contact Blocks */}
            <div className="space-y-8">
              {/* WhatsApp */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#8b0d0d] text-white shadow-lg">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    WhatsApp
                  </h4>
                  <p className="text-gray-700 dark:text-gray-400">+258 84 123 4567</p>
                  <a
                    href="https://wa.me/258841234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md transition"
                  >
                    Send Message
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#8b0d0d] text-white shadow-lg">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-700 dark:text-gray-400">help@certipm.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#8b0d0d] text-white shadow-lg">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-700 dark:text-gray-400">Maputo, Mozambique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
