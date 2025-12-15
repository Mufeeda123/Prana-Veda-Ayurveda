import React, { useState } from "react";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_NUMBER } from "../constants";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later you can add API / WhatsApp / Email logic here

    setSuccess(true);

    // Auto hide message after 3 seconds
    setTimeout(() => setSuccess(false), 10000);

    // Reset form fields
    e.target.reset();
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-stone-800 text-stone-200 py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
          Contact Us
        </h1>
        <p className="text-lg">
          We are here to help you on your wellness journey.
        </p>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                Get in Touch
              </h2>
              <p className="text-stone-600 mb-8">
                Whether you want to book a consultation, ask about a treatment,
                or just say hello, we'd love to hear from you.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-cream rounded-lg">
                <Phone className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg text-primary mb-1">
                    Call Us
                  </h3>
                  <p className="text-stone-700 mb-2">{CONTACT_PHONE}</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      "Namaste, I would like to book an appointment."
                    )}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={16} /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-cream rounded-lg">
                <Mail className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg text-primary mb-1">
                    Email Us
                  </h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-stone-700 hover:text-primary transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-6 bg-cream rounded-lg">
                <Clock className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg text-primary mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-stone-700">
                    Monday - Saturday: 9:00 AM - 7:00 PM
                  </p>
                  <p className="text-stone-700">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-100">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                Send a Message
              </h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-primary outline-none"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-primary outline-none"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-primary outline-none"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Success Message */}
                {success && (
                  <div className="bg-green-100 text-green-800 p-3 rounded-md text-sm text-center">
                    ✅ Your inquiry has been sent successfully.
                    <br></br>
                    We will get in touch with you soon!
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-green-900 transition-colors"
                >
                  Send Inquiry
                </button>

                <p className="text-xs text-center text-stone-500 mt-2">
                  *We will contact you shortly via Phone or WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
