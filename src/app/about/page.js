import React from 'react';

export const metadata = {
  title: "About Us | RealCgpa2Percentage",
  description: "Learn more about RealCgpa2Percentage. We build high-speed, statically pre-rendered grading conversion tools for students and universities worldwide.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutUs() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-w-0 py-16 px-4 bg-zinc-950 border-b border-zinc-900 text-center">
        <div className="w-full max-w-4xl mx-auto space-y-4">
          <nav className="text-sm font-semibold text-zinc-500 flex items-center justify-center gap-2 mb-2">
            <a href="/" className="hover:text-indigo-400 transition-colors">Home</a>
            <span>/</span>
            <span className="text-zinc-400">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            About <span className="text-indigo-400">Our Platform</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            Simplifying academic grading and conversions for students, job applicants, and recruiters globally.
          </p>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="w-full min-w-0 py-16 px-4 bg-zinc-950">
        <div className="w-full max-w-4xl mx-auto space-y-16">
          
          {/* Main Story Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Our Mission & Story
              </h2>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                RealCgpa2Percentage was founded with a single, clear objective: to build the most accurate, fast, and accessible grade conversion calculator on the web. 
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Many educational boards and technical universities across the globe use distinct grade evaluation parameters (such as the standard 10-point scale, WES 4.0 GPA scale, SGPA, and CPI). Converting these scores to a traditional percentage for job applications or higher studies is often confusing due to conflicting formulas.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                We compiled the official guidelines of major educational institutions into one programmatically optimized suite, making it easy for students to check their equivalents in real time.
              </p>
            </div>
            
            {/* Visual Callout Box */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-6">
              <div className="space-y-2">
                <span className="text-indigo-400 font-extrabold text-3xl block">10+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Official University Formulations</span>
              </div>
              <div className="h-px bg-zinc-800" />
              <div className="space-y-2">
                <span className="text-purple-400 font-extrabold text-3xl block">&lt; 100ms</span>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Static Loading Performance</span>
              </div>
              <div className="h-px bg-zinc-800" />
              <div className="space-y-2">
                <span className="text-emerald-400 font-extrabold text-3xl block">100%</span>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Client-Side Calculations (Offline Capable)</span>
              </div>
            </div>
          </div>

          {/* Three Pillars Cards */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight text-center">
              Why Choose RealCgpa2Percentage?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Card 1: Absolute Precision */}
              <div className="p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl space-y-3 hover:border-zinc-700/80 transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white">Official Formulations</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We don't use arbitrary estimates. Our system implements official circular conversion factors from CBSE, AICTE, VTU, MAKAUT, Mumbai University, SPPU, GTU, and KTU.
                </p>
              </div>

              {/* Card 2: Performance Pre-rendered */}
              {/* <div className="p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl space-y-3 hover:border-zinc-700/80 transition-all">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white">SSG Optimization</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Built using Next.js static site generation. Pages are pre-rendered into static HTML so they load instantly on any connection speed and are easily read by web crawlers.
                </p>
              </div> */}

              {/* Card 3: Privacy First */}
              <div className="p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl space-y-3 hover:border-zinc-700/80 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white">100% Client-Side</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  No academic grades or personal info are ever sent to a database. Everything is calculated in memory inside your browser, keeping your details fully private.
                </p>
              </div>
            </div>
          </div>

          {/* Quick CTA to return to home */}
          <div className="pt-12 border-t border-zinc-900 text-center space-y-4">
            <h3 className="text-lg font-bold text-white">Ready to perform a calculation?</h3>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-white text-sm shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 transition-all duration-200"
            >
              Start Converting
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
