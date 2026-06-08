import React from 'react';
import { notFound } from 'next/navigation';
import Calculator from '../../components/Calculator';
import { generateScaleTable, universities } from '../../lib/universities';

// Generate static routes at build time for pSEO optimization
export async function generateStaticParams() {
  return Object.keys(universities).map((key) => ({
    university: key,
  }));
}

// Generate dynamic metadata for search engines
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { university } = resolvedParams;
  const config = universities[university];
  
  if (!config) {
    return {
      title: "GPA Conversion Standard",
      description: "Convert GPA to percentage using various official rules."
    };
  }

  return {
    title: config.title,
    description: config.metaDescription,
    keywords: `${config.shortName} cgpa to percentage, convert ${config.shortName} cgpa, ${config.name} formula, cgpa calculator`,
    alternates: {
      canonical: `/${university}`,
    },
    openGraph: {
      title: config.title,
      description: config.metaDescription,
      url: `https://realcgpatopercentage.com/${university}`,
      images: [
        {
          url: "/ogcard.webp",
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.metaDescription,
      images: ["/ogcard.webp"],
    },
  };
}

export default async function UniversityPage({ params }) {
  const resolvedParams = await params;
  const { university } = resolvedParams;
  const config = universities[university];

  if (!config) {
    notFound();
  }

  // Pre-generate scale mapping table for search engine rich snippets
  const scaleTableData = generateScaleTable(university);

  // JSON-LD Schemas
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": config.heading,
    "operatingSystem": "All",
    "applicationCategory": "EducationalApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": config.metaDescription,
    "browserRequirements": "Requires JavaScript. Requires HTML5."
  };

  // Convert custom FAQ config format to Schema format
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": config.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Dynamic JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="w-full min-w-0 py-16 px-4 bg-zinc-950 border-b border-zinc-900 text-center">
        <div className="w-full max-w-4xl mx-auto space-y-6">
          <nav className="text-sm font-semibold text-zinc-500 flex items-center justify-center gap-2 mb-2">
            <a href="/" className="hover:text-indigo-400 transition-colors">Home</a>
            <span>/</span>
            <span className="text-zinc-400">{config.shortName}</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            {config.heading}
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {config.metaDescription} Calculate equivalent percentage, semester aggregates, and performance divisions instantly.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator-section" className="w-full min-w-0 py-12 px-4 bg-zinc-950">
        <div className="w-full max-w-6xl mx-auto">
          <Calculator initialPreset={university} />
        </div>
      </section>

      {/* SEO Article & Localized Context */}
      <section className="w-full min-w-0 py-16 px-4 bg-zinc-950 border-t border-zinc-900">
        <div className="w-full max-w-4xl mx-auto space-y-12">

          {/* Formula explanation */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              About the {config.name} CGPA Formula
            </h2>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              The academic board of {config.shortName} outlines a specific mathematical process to convert students' grade points to marks. This converter integrates the exact parameters designated in their official guidelines.
            </p>
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2 max-w-lg">
              <span className="text-zinc-500 block uppercase font-bold tracking-wider text-[10px]">Official Formula</span>
              <span className="text-white text-xl font-mono font-bold block">{config.formulaDisplay}</span>
              <p className="text-xs text-zinc-400 leading-relaxed">{config.formulaNote}</p>
            </div>
          </div>

          {/* Specific FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-4">
              {config.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl space-y-2">
                  <h3 className="text-base font-bold text-white flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-sm text-zinc-400 pl-6 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dedicated scale table */}
          <div className="space-y-6 w-full max-w-full">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {config.shortName} CGPA to Percentage Conversion Table
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                Equivalency values computed using the official {config.shortName} guidelines:
              </p>
            </div>

            <div className="w-full overflow-x-auto border border-zinc-800 rounded-2xl bg-zinc-900/60 backdrop-blur-sm shadow-xl">
              <table className="w-full border-collapse text-left text-sm text-zinc-300">
                <thead className="bg-zinc-900/80 text-xs font-bold uppercase text-zinc-200 border-b border-zinc-800">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">
                      CGPA <span className="hidden sm:inline">({config.scale}.0 Scale)</span>
                    </th>
                    <th className="py-3.5 px-4 sm:px-6">
                      <span className="sm:hidden">Percentage</span>
                      <span className="hidden sm:inline">Equivalent Percentage</span>
                    </th>
                    <th className="py-3.5 px-4 sm:px-6">
                      <span className="sm:hidden">Badge</span>
                      <span className="hidden sm:inline">Performance Badge</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {scaleTableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-900/30 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-bold text-white text-sm sm:text-base">{row.cgpa}</td>
                      <td className="py-3 px-4 sm:px-6 text-indigo-300 font-bold text-sm sm:text-base">{row.percentage}</td>
                      <td className="py-3 px-4 sm:px-6 text-xs sm:text-sm">
                        <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] sm:text-xs border ${
                          row.badge === 'First Class with Distinction' ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25' :
                          row.badge === 'First Class' ? 'bg-blue-500/10 text-blue-300 border-blue-500/25' :
                          row.badge === 'Second Class' ? 'bg-amber-500/10 text-amber-300 border-amber-500/25' :
                          row.badge === 'Pass Class' ? 'bg-zinc-500/10 text-zinc-300 border-zinc-500/25' :
                          'bg-rose-500/10 text-rose-300 border-rose-500/25'
                        }`}>
                          <span className="sm:hidden">
                            {row.badge === 'First Class with Distinction' ? 'Distinction' :
                             row.badge === 'First Class' ? '1st Class' :
                             row.badge === 'Second Class' ? '2nd Class' :
                             row.badge === 'Pass Class' ? 'Pass' : 'Fail'}
                          </span>
                          <span className="hidden sm:inline">{row.badge}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick back navigation link */}
          <div className="pt-6 text-center border-t border-zinc-900">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-indigo-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Universal Converter
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
