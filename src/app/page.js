import React from 'react';
import Calculator from '../components/Calculator';
import { generateScaleTable, universities } from '../lib/universities';

export default function Home() {
  const standardPreset = universities.standard;
  const scaleTableData = generateScaleTable('standard');

  // JSON-LD Schemas
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CGPA to Percentage Calculator",
    "operatingSystem": "All",
    "applicationCategory": "EducationalApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "A free educational utility tool to convert CGPA to percentage using standard CBSE (9.5 multiplier) and various official Indian university formulas.",
    "browserRequirements": "Requires JavaScript. Requires HTML5."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to convert CGPA to percentage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To convert CGPA to percentage, you multiply your CGPA by a specific factor. Under the standard CBSE board guidelines, the formula is: Percentage = CGPA × 9.5. For example, a CGPA of 9.0 equates to 9.0 × 9.5 = 85.5%."
        }
      },
      {
        "@type": "Question",
        "name": "Why do Indian universities subtract 0.75 or multiply by 9.5?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Indian universities subtract 0.75 (e.g. VTU, MAKAUT) or multiply by 9.5 (CBSE) to align grade distributions with conventional mark lists. Subtracting 0.75 ensures that a student achieving a standard passing CGPA is equivalent to traditional percentage thresholds required for first-class classifications."
        }
      },
      {
        "@type": "Question",
        "name": "How to calculate semester aggregate percentage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate the semester aggregate percentage, first sum up the SGPA/GPA scores across all semesters and divide by the total semesters. Alternatively, perform a credits-weighted cumulative average (sum of (SGPA × Credits) / total credits) to obtain your final CGPA. Lastly, apply your university's conversion multiplier."
        }
      }
    ]
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* JSON-LD Structured Data */}
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
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-900 text-zinc-400 border border-zinc-800 tracking-wide uppercase inline-block">
            Universal CGPA Converter
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            CGPA to Percentage <span className="text-indigo-400">Calculator</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Convert standard 10.0 and 4.0 scale CGPA/SGPA to equivalent percentage instantly. Supports CBSE, VTU, MAKAUT, Mumbai University, SPPU, GTU, and KTU official formulas.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator-section" className="w-full min-w-0 py-12 px-4 bg-zinc-950">
        <div className="w-full max-w-6xl mx-auto">
          <Calculator initialPreset="standard" />
        </div>
      </section>

      {/* SEO Content: Explanation, Comparison Tables & Presets */}
      <section className="w-full min-w-0 py-16 px-4 bg-zinc-950 border-t border-zinc-900">
        <div className="w-full max-w-4xl mx-auto space-y-12">
          
          {/* Quick Nav for Universities */}
          <div className="p-6 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl space-y-4">
            <h3 className="text-sm font-bold uppercase text-zinc-400 tracking-wider">Select Regional University Calculators</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {Object.keys(universities).filter(k => k !== 'standard').map((key) => (
                <a
                  key={key}
                  href={`/${key}`}
                  className="px-3 py-2 text-xs font-semibold text-center bg-zinc-950 hover:bg-indigo-950/20 text-zinc-300 hover:text-indigo-400 border border-zinc-800/80 hover:border-indigo-900/40 rounded-xl transition-all"
                >
                  {universities[key].shortName} Formula
                </a>
              ))}
            </div>
          </div>

          {/* FAQ / How to Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                How to Convert CGPA to Percentage?
              </h2>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                To calculate the percentage equivalent of your CGPA, the mathematical multiplier is defined by the academic board. For standard CBSE schools, you simply multiply your CGPA score by <strong>9.5</strong>. 
              </p>
              <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-sm max-w-md">
                <span className="text-zinc-500 block uppercase font-bold tracking-wider text-[10px] mb-1">Standard Formula</span>
                <span className="text-white text-lg font-bold">Percentage (%) = CGPA × 9.5</span>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Example: If your CBSE CGPA is <strong>8.8</strong>, the percentage conversion works as follows:<br />
                <code className="text-indigo-400 font-bold bg-zinc-900 px-2 py-0.5 rounded">8.8 × 9.5 = 83.6%</code>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Why do Indian Universities Subtract 0.75 or Multiply by 9.5?
              </h2>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Many engineering universities affiliated with the AICTE (such as VTU, MAKAUT, and JNTU) apply the formula <code className="text-indigo-400 font-bold font-mono">(CGPA - 0.75) × 10</code>.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                The subtraction of <strong>0.75</strong> acts as an offset. In standard grading systems, achieving a 10.0 CGPA represents perfect marks (100%), but achieving the minimum passing grade (e.g. 5.0) shouldn't translate directly to a linear percentage mapping. Subtracting 0.75 maps mid-range CGPAs more accurately to the traditional grading boundaries (where 60% represents a First Class division).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                How to Calculate Semester Aggregate Percentage?
              </h2>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                To calculate aggregate percentage across multiple semesters, you cannot simply average the percentages. Instead, calculate the <strong>weighted cumulative CGPA</strong>:
              </p>
              <ul className="list-disc pl-5 text-zinc-400 space-y-2 text-sm">
                <li>Multiply each semester's SGPA/GPA by its respective credits.</li>
                <li>Add up all the weighted products.</li>
                <li>Divide this total by the sum of all semester credits.</li>
                <li>Convert this final aggregate CGPA to a percentage using your university's multiplier.</li>
              </ul>
            </div>
          </div>

          {/* Reference Data Table */}
          <div className="space-y-6 w-full max-w-full">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Standard CGPA (10.0 Scale) to Percentage Conversion Table
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                Quick conversion chart using the standard CBSE 9.5 multiplier:
              </p>
            </div>

            <div className="w-full overflow-x-auto border border-zinc-800 rounded-2xl bg-zinc-900/60 backdrop-blur-sm shadow-xl">
              <table className="w-full border-collapse text-left text-sm text-zinc-300">
                <thead className="bg-zinc-900/80 text-xs font-bold uppercase text-zinc-200 border-b border-zinc-800">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">
                      CGPA <span className="hidden sm:inline">(10.0 Scale)</span>
                    </th>
                    <th className="py-3.5 px-4 sm:px-6">
                      <span className="sm:hidden">Percentage</span>
                      <span className="hidden sm:inline">Percentage (CBSE Formula)</span>
                    </th>
                    <th className="py-3.5 px-4 sm:px-6">
                      <span className="sm:hidden">Class</span>
                      <span className="hidden sm:inline">Performance Class</span>
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

        </div>
      </section>
    </div>
  );
}
