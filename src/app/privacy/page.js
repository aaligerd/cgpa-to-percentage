import React from 'react';

export const metadata = {
  title: "Privacy Policy | RealCgpa2Percentage",
  description: "Read our privacy policy. Learn how RealCgpa2Percentage ensures absolute data privacy by performing 100% of grade and CGPA calculations locally in your browser.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-w-0 py-16 px-4 bg-zinc-950 border-b border-zinc-900 text-center">
        <div className="w-full max-w-4xl mx-auto space-y-4">
          <nav className="text-sm font-semibold text-zinc-500 flex items-center justify-center gap-2 mb-2">
            <a href="/" className="hover:text-indigo-400 transition-colors">Home</a>
            <span>/</span>
            <span className="text-zinc-400">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Privacy <span className="text-indigo-400">Policy</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto">
            Last Updated: June 9, 2026. Your privacy is our utmost priority.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full min-w-0 py-16 px-4 bg-zinc-950">
        <div className="w-full max-w-3xl mx-auto space-y-12 text-zinc-300 leading-relaxed">
          
          {/* Critical Client-Side Guarantee Callout */}
          <div className="p-6 rounded-2xl bg-indigo-950/10 border border-indigo-500/20 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-white">Our 100% Client-Side Privacy Guarantee</h2>
            </div>
            <p className="text-sm text-zinc-400">
              RealCgpa2Percentage is architected as a static web application. All calculations, grade inputs, and conversions are processed locally inside your web browser. <strong>We do not collect, transmit, store, or share your academic grades, CGPA, or GPA calculations on any server.</strong>
            </p>
          </div>

          {/* Section 1: Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">1. Overview</h2>
            <p className="text-sm sm:text-base">
              Welcome to RealCgpa2Percentage. This Privacy Policy details the types of information we collect (or choose not to collect) when you use our website at <a href="https://realcgpatopercentage.com" className="text-indigo-400 hover:underline">realcgpatopercentage.com</a>. We believe in complete transparency and aim to keep our system as minimal and secure as possible.
            </p>
          </div>

          {/* Section 2: Information We Do Not Collect */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">2. Information We Do Not Collect</h2>
            <p className="text-sm sm:text-base">
              Unlike traditional web calculators, we do not require any registration, sign-up, or login. You do not need to provide:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-zinc-400">
              <li>Your name, email address, or contact details (except when you voluntarily contact us for support).</li>
              <li>Your university registration number, roll number, or academic record.</li>
              <li>Any values you input into our calculators (e.g., SGPA, CGPA, semester marks). All calculations run in memory on your local machine and disappear the moment you close the tab.</li>
            </ul>
          </div>

          {/* Section 3: Technical Logs and Analytics */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">3. Technical Logs and Analytics</h2>
            <p className="text-sm sm:text-base">
              To keep our website fast, reliable, and optimized for different device form factors, we may collect anonymous, aggregated technical metrics.
            </p>
            <p className="text-sm sm:text-base text-zinc-400">
              This includes general diagnostic information such as your browser type, device type (desktop, tablet, mobile), operating system, referring pages, and timestamp. This data is collected solely to monitor page loading speeds, site errors, and traffic volume. It is completely anonymized and cannot be linked to any individual user.
            </p>
          </div>

          {/* Section 4: Cookies and Advertising */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">4. Cookies and Advertising</h2>
            <p className="text-sm sm:text-base">
              We may utilize standard cookies or local storage to save your selected calculator preferences (such as your chosen university preset) so you don't have to re-select them on your next visit.
            </p>
            <p className="text-sm sm:text-base text-zinc-400">
              Additionally, we may display third-party advertisements or use analytics services (such as Google Analytics). These providers may use cookies or web beacons to serve ads based on your visits to this and other websites. You can choose to disable or selectively turn off our cookies or third-party cookies in your browser settings.
            </p>
          </div>

          {/* Section 5: Data Security */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">5. Data Security</h2>
            <p className="text-sm sm:text-base">
              We implement industry-standard HTTPS security protocols to encrypt all traffic between your browser and our CDN servers. Since we do not host a central user database or store personal data, there is no risk of database credential leaks or security breaches exposing your academic data.
            </p>
          </div>

          {/* Section 6: Contact Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">6. Contacting Us</h2>
            <p className="text-sm sm:text-base">
              If you have any questions about this Privacy Policy, our data practices, or would like to provide feedback, please contact us at:
            </p>
            <p className="text-indigo-400 font-bold font-mono text-sm">
              workingsubhro@gmail.com
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
