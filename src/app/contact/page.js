import React from 'react';

export const metadata = {
  title: "Contact Us | RealCgpa2Percentage",
  description: "Get in touch with the RealCgpa2Percentage team. For formula feedback, inquiries, or presets, email us at workingsubhro@gmail.com.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactUs() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-w-0 py-16 px-4 bg-zinc-950 border-b border-zinc-900 text-center">
        <div className="w-full max-w-4xl mx-auto space-y-4">
          <nav className="text-sm font-semibold text-zinc-500 flex items-center justify-center gap-2 mb-2">
            <a href="/" className="hover:text-indigo-400 transition-colors">Home</a>
            <span>/</span>
            <span className="text-zinc-400">Contact Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Get in <span className="text-indigo-400">Touch</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto">
            Have questions about a university formula? Found a bug? Reach out to us.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="w-full min-w-0 py-16 px-4 bg-zinc-950">
        <div className="w-full max-w-3xl mx-auto space-y-8">
          
          {/* Main Email Card */}
          <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <div className="space-y-3 max-w-md mx-auto">
              <h2 className="text-2xl font-extrabold text-white tracking-tight">Email Us Directly</h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                For formula corrections, feedback, feature requests, or university preset proposals, send us an email:
              </p>
            </div>

            <div className="w-full max-w-full px-2">
              <a
                href="mailto:workingsubhro@gmail.com"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-indigo-500/50 text-indigo-300 hover:text-indigo-200 transition-all font-mono font-bold text-xs sm:text-base md:text-lg shadow-lg shadow-black/40 group max-w-full"
              >
                <span className="break-all">workingsubhro@gmail.com</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500 group-hover:text-indigo-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 00-2 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <p className="text-xs text-zinc-500">
              We read every email and aim to respond within 24 to 48 hours.
            </p>
          </div>

          {/* Quick Help / Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: Check Presets */}
            <div className="p-6 bg-zinc-900/20 border border-zinc-800/50 rounded-2xl space-y-3 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mx-auto sm:mx-0 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white">Looking for a specific preset?</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Check if your university is already supported. We have official calculator presets for VTU, MAKAUT, Mumbai University, SPPU, GTU, KTU, CBSE, and more.
              </p>
              <a href="/#calculator-section" className="inline-block text-xs font-semibold text-purple-400 hover:text-purple-300 hover:underline pt-1">
                Go to Calculator &rarr;
              </a>
            </div>

            {/* Card 2: Reporting Formula Errors */}
            <div className="p-6 bg-zinc-900/20 border border-zinc-800/50 rounded-2xl space-y-3 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto sm:mx-0 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white">How to report formula issues?</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Please attach or link to the official university circular or guidelines when emailing us. This helps our team verify and deploy the fix rapidly.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
