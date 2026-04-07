"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    projectType: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const res = await fetch("https://formspree.io/f/mjgplwey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      // Fire Google Ads conversion event
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-18069630827",
        });
      }
    }
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <header className="bg-blue-600 text-white py-3 px-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight">
            RoofQuotes<span className="text-yellow-400">LA</span>
          </span>
          <span className="text-sm hidden sm:block">
            Trusted by Los Angeles homeowners
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-600 text-white pb-16 pt-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Get Free Roofing Quotes
              <br />
              <span className="text-yellow-400">in Los Angeles</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-50 mb-8 max-w-lg">
              Compare quotes from top-rated local roofers. No obligation, no
              cost, no hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-blue-50">
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-lg">&#10003;</span>
                100% Free
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-lg">&#10003;</span>
                Licensed &amp; Insured Roofers
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-lg">&#10003;</span>
                Get Quotes in 24 Hours
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full max-w-md">
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
                <div className="text-green-500 text-5xl mb-4">&#10003;</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  You&apos;re All Set!
                </h2>
                <p className="text-gray-600">
                  A local roofing expert will reach out to you within 24 hours
                  with your free quote.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center">
                  Get Your Free Quote
                </h2>
                <p className="text-gray-500 text-sm mb-6 text-center">
                  Takes 30 seconds. No obligation.
                </p>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone{" "}
                      <span className="text-gray-400 font-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(310) 555-1234"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="zip"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      ZIP Code *
                    </label>
                    <input
                      id="zip"
                      type="text"
                      required
                      placeholder="90001"
                      pattern="[0-9]{5}"
                      maxLength={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      value={formData.zip}
                      onChange={(e) =>
                        setFormData({ ...formData, zip: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none appearance-none bg-white"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                    >
                      <option value="" disabled>
                        Select one...
                      </option>
                      <option value="repair">Roof Repair</option>
                      <option value="replacement">Roof Replacement</option>
                      <option value="inspection">Roof Inspection</option>
                      <option value="not-sure">Not Sure</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {submitting ? "Submitting..." : "Get My Free Quotes"}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    No spam. Your info is only shared with local roofing
                    professionals.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tell Us What You Need
              </h3>
              <p className="text-gray-500">
                Fill out the quick form above with your project details. Takes
                30 seconds.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Get Matched With Roofers
              </h3>
              <p className="text-gray-500">
                We connect you with licensed, insured roofing professionals in
                your area.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Compare &amp; Save
              </h3>
              <p className="text-gray-500">
                Review your free quotes and choose the best roofer for your
                budget and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why LA Homeowners Trust Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                500+
              </div>
              <p className="text-gray-500 text-sm">Homeowners Served</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                100%
              </div>
              <p className="text-gray-500 text-sm">Free, No Obligation</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                Licensed
              </div>
              <p className="text-gray-500 text-sm">Vetted Local Roofers</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                24 hrs
              </div>
              <p className="text-gray-500 text-sm">Average Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is this really free?
              </h3>
              <p className="text-gray-500">
                Yes, 100% free. Roofing companies pay us to connect them with
                homeowners — you never pay a dime.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How many quotes will I get?
              </h3>
              <p className="text-gray-500">
                You&apos;ll typically receive 1-3 quotes from local roofing
                professionals within 24 hours.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Am I obligated to hire someone?
              </h3>
              <p className="text-gray-500">
                No obligation at all. Compare your quotes and decide what&apos;s
                best for you.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What areas do you cover?
              </h3>
              <p className="text-gray-500">
                We cover all of Los Angeles County including Downtown LA, the
                Valley, South Bay, Westside, and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Your Free Quote?
          </h2>
          <p className="text-blue-50 mb-8">
            Join hundreds of LA homeowners who saved money by comparing roofing
            quotes.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-lg transition-colors"
          >
            Get My Free Quotes
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} RoofQuotesLA. All rights
            reserved.
          </p>
          <p className="mt-2">
            Serving Los Angeles County &mdash; Connecting homeowners with
            trusted roofing professionals.
          </p>
        </div>
      </footer>
    </div>
  );
}
