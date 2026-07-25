import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock3,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const contactCards = [
  {
    title: "WhatsApp",
    description: "Fastest way to speak with our team.",
    value: "+258 85 802 9205",
    href: "https://wa.me/258858029205?text=Hello!%20I%20would%20like%20more%20information.",
    cta: "Chat on WhatsApp",
    icon: Phone,
    iconWrap:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    button:
      "bg-green-600 hover:bg-green-700 text-white shadow-green-900/20",
  },
  {
    title: "Email",
    description: "Send us your enquiry and we will respond as soon as possible.",
    value: "info@certipm.com",
    href: "mailto:info@certipm.com",
    cta: "Send Email",
    icon: Mail,
    iconWrap:
      "bg-red-100 text-[#8b0d0d] dark:bg-red-900/20 dark:text-red-300",
    button:
      "bg-[#8b0d0d] hover:bg-[#a11212] text-white shadow-red-900/20",
  },
  {
    title: "Location",
    description: "Visit or connect with us locally.",
    value: "Maputo, Mozambique",
    href: "https://maps.google.com/?q=Maputo,Mozambique",
    cta: "Open Map",
    icon: MapPin,
    iconWrap:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300",
    button:
      "bg-gray-900 hover:bg-black text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200",
  },
];

const trustPoints = [
  {
    icon: Clock3,
    title: "Quick Responses",
    text: "We aim to respond promptly to all enquiries during working hours.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Support",
    text: "Our team is ready to guide you with clear information and assistance.",
  },
  {
    icon: MessageCircle,
    title: "Multiple Contact Options",
    text: "Reach us by form, email, WhatsApp, or direct visit.",
  },
];

const Enquiry: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f7f6] text-gray-900 dark:bg-gray-950 dark:text-white">
      <section className="relative overflow-hidden">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-red-200/30 blur-3xl dark:bg-red-900/10" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl dark:bg-orange-900/10" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white blur-3xl dark:bg-white/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24">
          {/* Hero */}
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b0d0d] shadow-sm dark:border-red-900/40 dark:bg-gray-900 dark:text-red-300">
              <CheckCircle2 className="h-4 w-4" />
              Contact & Support
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Let’s <span className="text-[#b81414]">Connect</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg dark:text-gray-300">
              Have a question, need support, or want more information about our
              services? Send us a message and our team will get back to you as
              soon as possible.
            </p>
          </div>

          {/* Top info blocks */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:gap-5 md:mb-12 md:grid-cols-3">
            {trustPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-200/80 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/80"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#8b0d0d] text-white shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Main layout */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-12 xl:gap-8">
            {/* Form */}
            <div className="xl:col-span-7">
              <div className="rounded-3xl border border-gray-200/80 bg-white/95 p-5 shadow-xl sm:p-7 lg:p-9 dark:border-gray-800 dark:bg-gray-900/90">
                <div className="mb-8 flex flex-col gap-3 border-b border-gray-200 pb-6 dark:border-gray-800">
                  <h2 className="text-2xl font-bold sm:text-3xl">Send us a message</h2>
                  <p className="max-w-2xl text-sm leading-6 text-gray-600 sm:text-base dark:text-gray-400">
                    Fill in the form below and we will respond as soon as possible.
                  </p>
                </div>

                <form
                  action="https://formsubmit.co/patricioinaciodba@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New website enquiry" />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="hidden"
                    name="_autoresponse"
                    value="Thank you for contacting us. We have received your message and will get back to you soon."
                  />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://example.com/thank-you"
                  />

                  <input
                    type="text"
                    name="_honey"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="Full Name"
                        type="text"
                        placeholder="Your full name"
                        className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#8b0d0d] focus:bg-white focus:ring-4 focus:ring-red-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-red-900/30"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="Email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#8b0d0d] focus:bg-white focus:ring-4 focus:ring-red-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-red-900/30"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="Phone"
                        type="tel"
                        placeholder="+258 ..."
                        className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#8b0d0d] focus:bg-white focus:ring-4 focus:ring-red-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-red-900/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="Subject"
                        type="text"
                        placeholder="How can we help?"
                        className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#8b0d0d] focus:bg-white focus:ring-4 focus:ring-red-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-red-900/30"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="Message"
                      placeholder="Write your message here..."
                      rows={6}
                      className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#8b0d0d] focus:bg-white focus:ring-4 focus:ring-red-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-red-900/30"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-4 rounded-2xl border border-green-200 bg-green-50 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-green-900/30 dark:bg-green-900/10">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Need a faster response?
                      </p>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Contact us directly on WhatsApp for quicker assistance.
                      </p>
                    </div>

                    <a
                      href="https://wa.me/258858029205?text=Hello!%20I%20would%20like%20more%20information."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                    >
                      WhatsApp
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#8b0d0d] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a11212] disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="xl:col-span-5">
              <div className="flex h-full flex-col gap-6">
                <div className="rounded-3xl border border-gray-200/80 bg-white/95 p-5 shadow-xl sm:p-7 dark:border-gray-800 dark:bg-gray-900/90">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold">Contact Details</h2>
                    <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base dark:text-gray-400">
                      Reach us through the channel that works best for you.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactCards.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4 transition duration-300 hover:border-gray-300 hover:bg-white hover:shadow-md dark:border-gray-800 dark:bg-gray-950/60 dark:hover:bg-gray-950"
                        >
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                            <div
                              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.iconWrap}`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-col gap-1">
                                <h3 className="text-base font-bold sm:text-lg">
                                  {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {item.description}
                                </p>
                                <p className="break-words pt-1 text-sm font-medium text-gray-900 dark:text-gray-200 sm:text-base">
                                  {item.value}
                                </p>
                              </div>

                              <a
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={
                                  item.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className={`mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-md transition ${item.button}`}
                              >
                                {item.cta}
                                <ArrowRight className="h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-[#8b0d0d] via-[#7a0b0b] to-[#4e0606] p-6 text-white shadow-2xl shadow-red-900/20 sm:p-7">
                  <h3 className="text-xl font-bold sm:text-2xl">Why contact us?</h3>
                  <p className="mt-3 text-sm leading-6 text-red-50/90 sm:text-base">
                    We are ready to assist with enquiries, support, pricing, and
                    general information.
                  </p>

                  <ul className="mt-6 space-y-4 text-sm sm:text-base">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-100" />
                      <span>Enquire about services, pricing, or support.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-100" />
                      <span>Request more information before making a decision.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-100" />
                      <span>Get quick assistance through WhatsApp for urgent matters.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;