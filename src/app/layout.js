import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://realcgpatopercentage.com"),
  title: "CGPA to Percentage Calculator | Official University Formulas",
  description: "Convert your CGPA to percentage using official conversion formulas. Online tool covering VTU, MAKAUT, Mumbai University, SPPU, GTU, Anna University, and KTU. Statically pre-rendered for instant calculations.",
  keywords: "cgpa to percentage calculator, vtu cgpa to percentage, makaut cgpa to percentage, mumbai university cgpa to percentage, sppu cgpa to percentage, gtu, ktu, gpa to percentage out of 4",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CGPA to Percentage Calculator | Official University Formulas",
    description: "Convert your CGPA to percentage using official conversion formulas. Online tool covering VTU, MAKAUT, Mumbai University, SPPU, GTU, Anna University, and KTU.",
    url: "https://realcgpatopercentage.com",
    siteName: "RealCgpa2Percentage",
    images: [
      {
        url: "/ogcard.webp",
        width: 1200,
        height: 630,
        alt: "CGPA to Percentage Calculator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CGPA to Percentage Calculator | Official University Formulas",
    description: "Convert your CGPA to percentage using official conversion formulas.",
    images: ["/ogcard.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200">
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E7V1PDK4X9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E7V1PDK4X9');
          `}
        </Script>

        {/* Navigation Header */}
        <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-bold text-sm sm:text-base md:text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-300">
                RealCgpa2<span className="text-indigo-400">Percentage</span>
              </span>
            </a>
            
            <div className="flex items-center gap-4">
              <a 
                href="/#calculator-section" 
                className="hidden sm:inline-block text-sm font-semibold text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                Use Calculator
              </a>
              <span className="hidden sm:inline-block text-zinc-800">|</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 rounded-lg transition-all"
                title="Documentation"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 flex flex-col min-w-0">{children}</main>

        {/* SEO-Friendly Indexation Footer */}
        <footer className="border-t border-zinc-900 bg-zinc-950 py-12 mt-auto">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
              <div className="col-span-2 space-y-4">
                <a href="/" className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-bold text-base tracking-tight text-white">
                    RealCgpa2Percentage
                  </span>
                </a>
                <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
                  A programmatically optimized suite of grading calculators. Pre-rendered as static HTML pages for instant loading speeds and crawlability.
                </p>
                <div className="text-xs text-zinc-600">
                  © 2026 RealCgpa2Percentage. All rights reserved. Made for engineering and university students globally.
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase text-zinc-400 tracking-wider mb-4">University Presets</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/vtu" className="text-zinc-500 hover:text-indigo-400 transition-colors">VTU Calculator</a></li>
                  <li><a href="/makaut" className="text-zinc-500 hover:text-indigo-400 transition-colors">MAKAUT Calculator</a></li>
                  <li><a href="/mumbai-university" className="text-zinc-500 hover:text-indigo-400 transition-colors">Mumbai University</a></li>
                  <li><a href="/sppu" className="text-zinc-500 hover:text-indigo-400 transition-colors">SPPU (Pune)</a></li>
                  <li><a href="/gtu" className="text-zinc-500 hover:text-indigo-400 transition-colors">GTU (Gujarat)</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase text-zinc-400 tracking-wider mb-4">Additional Standards</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/anna-university" className="text-zinc-500 hover:text-indigo-400 transition-colors">Anna University</a></li>
                  <li><a href="/jntuk" className="text-zinc-500 hover:text-indigo-400 transition-colors">JNTUK (Kakinada)</a></li>
                  <li><a href="/srm" className="text-zinc-500 hover:text-indigo-400 transition-colors">SRM University</a></li>
                  <li><a href="/ktu" className="text-zinc-500 hover:text-indigo-400 transition-colors">KTU (Kerala)</a></li>
                  <li><a href="/out-of-4" className="text-zinc-500 hover:text-indigo-400 transition-colors">US Scale (Out of 4)</a></li>
                  <li><a href="/for-engineering" className="text-zinc-500 hover:text-indigo-400 transition-colors">For Engineering</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase text-zinc-400 tracking-wider mb-4">Company & Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="text-zinc-500 hover:text-indigo-400 transition-colors">About Us</a></li>
                  <li><a href="/contact" className="text-zinc-500 hover:text-indigo-400 transition-colors">Contact Us</a></li>
                  <li><a href="/privacy" className="text-zinc-500 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-zinc-500 hover:text-indigo-400 transition-colors">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
