// University configurations, formulas, and FAQs for programmatic SEO pages.

export const universities = {
  vtu: {
    slug: "vtu",
    name: "Visvesvaraya Technological University (VTU)",
    shortName: "VTU",
    title: "VTU CGPA to Percentage Calculator | Official Formula",
    heading: "Official VTU CGPA to Percentage Calculator",
    metaDescription: "Convert VTU CGPA to percentage using the official Visvesvaraya Technological University formula. Fast, free, and accurate B.E/B.Tech grade calculator.",
    scale: 10,
    formulaDisplay: "Percentage (%) = (CGPA - 0.75) × 10",
    formulaNote: "As per the official VTU guidelines, students must subtract 0.75 from their CGPA and then multiply the result by 10.",
    calculate: (cgpa) => {
      if (cgpa < 0.75) return 0;
      return parseFloat(((cgpa - 0.75) * 10).toFixed(2));
    },
    faqs: [
      {
        q: "What is the official VTU CGPA to percentage conversion formula?",
        a: "The official VTU formula is Percentage (%) = (CGPA - 0.75) × 10. For example, if your CGPA is 8.25, the calculation is (8.25 - 0.75) × 10 = 75%."
      },
      {
        q: "Why does VTU subtract 0.75 from CGPA?",
        a: "VTU subtracts 0.75 to adjust for grading variations and align the 10-point CGPA scale with traditional percentage marks, where a 60% standard represents a first class."
      },
      {
        q: "Is VTU conversion formula the same for all semesters?",
        a: "Yes, this conversion formula is used for computing the cumulative percentage for all engineering and technical courses under VTU."
      }
    ]
  },
  makaut: {
    slug: "makaut",
    name: "Maulana Abul Kalam Azad University of Technology (MAKAUT)",
    shortName: "MAKAUT",
    title: "MAKAUT CGPA to Percentage Calculator | Official WBUT",
    heading: "Official MAKAUT CGPA to Percentage Calculator",
    metaDescription: "Convert MAKAUT SGPA or CGPA to percentage online. Official Maulana Abul Kalam Azad University of Technology (formerly WBUT) conversion formula.",
    scale: 10,
    formulaDisplay: "Percentage (%) = (CGPA - 0.75) × 10",
    formulaNote: "MAKAUT uses a standard subtraction of 0.75 followed by multiplication by 10 to convert the cumulative grade point average to equivalent percentage.",
    calculate: (cgpa) => {
      if (cgpa < 0.75) return 0;
      return parseFloat(((cgpa - 0.75) * 10).toFixed(2));
    },
    faqs: [
      {
        q: "What is the MAKAUT formula for CGPA to percentage conversion?",
        a: "The MAKAUT conversion formula is: Percentage (%) = (CGPA - 0.75) × 10. If your CGPA is 7.75, your percentage is (7.75 - 0.75) × 10 = 70%."
      },
      {
        q: "Does MAKAUT use the same formula for SGPA?",
        a: "Yes, the same formula (SGPA - 0.75) × 10 is widely used to convert individual semester SGPA to percentage."
      },
      {
        q: "How to calculate semester aggregate percentage in MAKAUT?",
        a: "Add the SGPA of all semesters, divide by the number of semesters to get your average CGPA, and then apply the formula: (CGPA - 0.75) × 10."
      }
    ]
  },
  "mumbai-university": {
    slug: "mumbai-university",
    name: "Mumbai University (MU)",
    shortName: "Mumbai University",
    title: "Mumbai University CGPA to Percentage Calculator | MU CBCS",
    heading: "Official Mumbai University CGPA to Percentage Calculator",
    metaDescription: "Convert Mumbai University CGPA to percentage using the official CBCS 10-point scale formula. Accurate, quick, and compliant with MU circular guidelines.",
    scale: 10,
    formulaDisplay: "CGPA < 7: (CGPA × 7.1) + 12 | CGPA ≥ 7: (CGPA × 7.25) + 11",
    formulaNote: "Mumbai University uses a dual-range formula. For CGPA less than 7, the multiplier is 7.1 and 12 is added. For CGPA 7 or higher, the multiplier is 7.25 and 11 is added.",
    calculate: (cgpa) => {
      if (cgpa <= 0) return 0;
      if (cgpa < 7) {
        return parseFloat(((cgpa * 7.1) + 12).toFixed(2));
      } else {
        return parseFloat(((cgpa * 7.25) + 11).toFixed(2));
      }
    },
    faqs: [
      {
        q: "What is the formula to convert Mumbai University CGPA to percentage?",
        a: "Mumbai University uses two formulas: if CGPA is less than 7, Percentage = (CGPA × 7.1) + 12. If CGPA is 7 or more, Percentage = (CGPA × 7.25) + 11."
      },
      {
        q: "Does Mumbai University use a 10-point grading system?",
        a: "Yes, Mumbai University uses the Choice Based Credit System (CBCS) which grades students on a standard 10-point scale."
      },
      {
        q: "What is a 7.0 CGPA in Mumbai University in percentage?",
        a: "Using the formula for CGPA ≥ 7: (7 × 7.25) + 11 = 50.75 + 11 = 61.75%."
      }
    ]
  },
  sppu: {
    slug: "sppu",
    name: "Savitribai Phule Pune University (SPPU)",
    shortName: "SPPU",
    title: "SPPU CGPA to Percentage Calculator | Pune University",
    heading: "Official SPPU CGPA to Percentage Calculator",
    metaDescription: "Calculate Pune University (SPPU) CGPA to percentage with the official range-based formula. Supports CBCS engineering, arts, and science streams.",
    scale: 10,
    formulaDisplay: "Range-Based Formula (e.g. CGPA × 10 - 7.5 for range 6.75 - 8.25)",
    formulaNote: "Pune University (SPPU) uses a highly precise range-based formula depending on your exact CGPA score.",
    calculate: (cgpa) => {
      if (cgpa <= 0) return 0;
      if (cgpa >= 5.0 && cgpa < 6.25) {
        return parseFloat(((cgpa * 8.8) + 12).toFixed(2));
      } else if (cgpa >= 6.25 && cgpa < 6.75) {
        return parseFloat(((cgpa * 9.0) + 10.75).toFixed(2));
      } else if (cgpa >= 6.75 && cgpa < 8.25) {
        return parseFloat(((cgpa * 10.0) - 7.5).toFixed(2));
      } else if (cgpa >= 8.25 && cgpa < 9.5) {
        return parseFloat(((cgpa * 8.5) + 5.0).toFixed(2));
      } else if (cgpa >= 9.5 && cgpa <= 10.0) {
        return parseFloat(((cgpa * 9.5) + 1.25).toFixed(2));
      } else {
        // Fallback for CGPA < 5
        return parseFloat((cgpa * 8.0).toFixed(2));
      }
    },
    faqs: [
      {
        q: "What is the SPPU CGPA to percentage conversion formula?",
        a: "SPPU uses dynamic range-based formulas: 5.0-6.25: CGPA*8.8 + 12; 6.25-6.75: CGPA*9 + 10.75; 6.75-8.25: CGPA*10 - 7.5; 8.25-9.5: CGPA*8.5 + 5; 9.5-10: CGPA*9.5 + 1.25."
      },
      {
        q: "What is 8.0 CGPA in SPPU percentage?",
        a: "An 8.0 CGPA falls in the 6.75–8.25 range, so Percentage = (8.0 × 10) - 7.5 = 72.5%."
      },
      {
        q: "How does Pune University handle credit weightage?",
        a: "SPPU calculates the semester SGPA using credit weightages and then averages it to compute CGPA for final degree evaluation."
      }
    ]
  },
  gtu: {
    slug: "gtu",
    name: "Gujarat Technological University (GTU)",
    shortName: "GTU",
    title: "GTU CGPA to Percentage Calculator | CPI/SPI to %",
    heading: "Official GTU CGPA to Percentage Calculator",
    metaDescription: "Convert GTU CGPA, CPI, or SPI to equivalent percentage. Free tool based on the official Gujarat Technological University conversion formula.",
    scale: 10,
    formulaDisplay: "Percentage (%) = (CGPA - 0.5) × 10",
    formulaNote: "GTU guidelines state that the equivalent percentage is computed by subtracting 0.5 from SPI/CPI/CGPA and multiplying the result by 10.",
    calculate: (cgpa) => {
      if (cgpa < 0.5) return 0;
      return parseFloat(((cgpa - 0.5) * 10).toFixed(2));
    },
    faqs: [
      {
        q: "How to convert GTU CGPA/CPI to percentage?",
        a: "Use the official formula: Percentage (%) = (CGPA - 0.5) × 10. If your CPI is 7.5, your percentage is (7.5 - 0.5) × 10 = 70%."
      },
      {
        q: "Are CPI and CGPA the same in GTU?",
        a: "CPI (Cumulative Performance Index) covers all semesters, whereas CGPA (Cumulative Grade Point Average) is calculated for specific final semesters. Both use the same conversion multiplier."
      }
    ]
  },
  "anna-university": {
    slug: "anna-university",
    name: "Anna University",
    shortName: "Anna University",
    title: "Anna University CGPA to Percentage Calculator | Official B.E",
    heading: "Official Anna University CGPA to Percentage Calculator",
    metaDescription: "Convert Anna University CGPA to percentage using the official regulations conversion system. Free and optimized online conversion calculator.",
    scale: 10,
    formulaDisplay: "Percentage (%) = CGPA × 10",
    formulaNote: "Anna University specifies that the equivalent percentage is simply CGPA multiplied by 10 for standard assessments.",
    calculate: (cgpa) => {
      return parseFloat((cgpa * 10).toFixed(2));
    },
    faqs: [
      {
        q: "What is the Anna University CGPA to percentage formula?",
        a: "The standard formula used by Anna University is Percentage (%) = CGPA × 10. A CGPA of 8.5 equals 85%."
      },
      {
        q: "Does Anna University subtract any factor like 0.75?",
        a: "No, Anna University uses a direct multiplier of 10 without subtracting a constant value, unlike VTU or MAKAUT."
      }
    ]
  },
  jntuk: {
    slug: "jntuk",
    name: "Jawaharlal Nehru Technological University, Kakinada (JNTUK)",
    shortName: "JNTUK",
    title: "JNTUK CGPA to Percentage Calculator | JNTU Kakinada",
    heading: "Official JNTUK CGPA to Percentage Calculator",
    metaDescription: "Convert your JNTU Kakinada (JNTUK) CGPA to percentage instantly. Official university formula, optimized for all B.Tech and B.Pharm regulations.",
    scale: 10,
    formulaDisplay: "Percentage (%) = (CGPA - 0.75) × 10",
    formulaNote: "JNTUK implements the standard engineering formula of subtracting 0.75 from CGPA and multiplying by 10.",
    calculate: (cgpa) => {
      if (cgpa < 0.75) return 0;
      return parseFloat(((cgpa - 0.75) * 10).toFixed(2));
    },
    faqs: [
      {
        q: "What formula does JNTUK use for CGPA to percentage?",
        a: "JNTUK uses the formula: Percentage (%) = (CGPA - 0.75) × 10. For a CGPA of 8.0, the percentage is (8.0 - 0.75) × 10 = 72.5%."
      },
      {
        q: "Is JNTUK conversion formula same for JNTUH and JNTUA?",
        a: "Yes, most JNTU campuses (Kakinada, Hyderabad, Anantapur) share this standard (CGPA - 0.75) × 10 conversion scale."
      }
    ]
  },
  srm: {
    slug: "srm",
    name: "SRM Institute of Science and Technology (SRM)",
    shortName: "SRM University",
    title: "SRM University CGPA to Percentage Calculator | Official",
    heading: "Official SRM CGPA to Percentage Calculator",
    metaDescription: "Convert SRM CGPA to percentage instantly. Accurate converter tool matching the official SRM Institute of Science and Technology grading guidelines.",
    scale: 10,
    formulaDisplay: "Percentage (%) = CGPA × 10",
    formulaNote: "SRM University converts CGPA to percentage directly by multiplying the CGPA score by 10.",
    calculate: (cgpa) => {
      return parseFloat((cgpa * 10).toFixed(2));
    },
    faqs: [
      {
        q: "How do you convert SRM CGPA to percentage?",
        a: "SRM CGPA is converted to percentage by multiplying it by 10. For example, a CGPA of 9.2 yields 92%."
      },
      {
        q: "What is first class division at SRM University?",
        a: "A CGPA of 8.0 or above with no standing backlogs is generally awarded First Class with Distinction, while 6.5 to 7.9 gets First Class."
      }
    ]
  },
  ktu: {
    slug: "ktu",
    name: "APJ Abdul Kalam Technological University (KTU)",
    shortName: "KTU",
    title: "KTU CGPA to Percentage Calculator | Kerala Tech University",
    heading: "Official KTU CGPA to Percentage Calculator",
    metaDescription: "Official KTU CGPA to percentage converter. Designed for Kerala Technological University students with the exact official formula.",
    scale: 10,
    formulaDisplay: "Percentage (%) = (CGPA × 10) - 3.75",
    formulaNote: "KTU regulations declare that the percentage equivalent of CGPA is calculated as (CGPA × 10) - 3.75.",
    calculate: (cgpa) => {
      if (cgpa < 0.375) return 0;
      return parseFloat(((cgpa * 10) - 3.75).toFixed(2));
    },
    faqs: [
      {
        q: "What is the official KTU CGPA to percentage conversion formula?",
        a: "The official Kerala Technological University (KTU) formula is Percentage (%) = (CGPA × 10) - 3.75."
      },
      {
        q: "How to convert 7.5 CGPA in KTU?",
        a: "Using the formula: (7.5 × 10) - 3.75 = 75 - 3.75 = 71.25%."
      }
    ]
  },
  "out-of-4": {
    slug: "out-of-4",
    name: "Standard US 4.0 Scale",
    shortName: "4.0 GPA Scale",
    title: "CGPA to Percentage Calculator Out of 4 | 4.0 GPA Converter",
    heading: "CGPA to Percentage Calculator - 4.0 GPA Scale",
    metaDescription: "Convert 4.0 GPA scale to percentage. Perfect for international students, WES evaluations, and applying to universities in the US, Canada, and Europe.",
    scale: 4,
    formulaDisplay: "Percentage (%) = (GPA / 4.0) × 100",
    formulaNote: "This calculator converts grades on a 4.0 maximum GPA scale directly to percentage values out of 100.",
    calculate: (cgpa) => {
      return parseFloat(((cgpa / 4) * 100).toFixed(2));
    },
    faqs: [
      {
        q: "How to convert GPA out of 4 to percentage?",
        a: "To convert a GPA on a 4.0 scale to a percentage, divide the GPA by 4 and multiply by 100. Formula: (GPA / 4) × 100. For instance, a 3.6 GPA is 90%."
      },
      {
        q: "What is a 3.0 GPA on the percentage scale?",
        a: "A 3.0 GPA corresponds to (3.0 / 4) × 100 = 75%."
      }
    ]
  },
  "for-engineering": {
    slug: "for-engineering",
    name: "Engineering CGPA to Percentage",
    shortName: "Engineering",
    title: "CGPA to Percentage Calculator for Engineering Students",
    heading: "CGPA to Percentage Calculator for Engineering",
    metaDescription: "Statically convert CGPA to percentage for engineering programs. Matches AICTE guidelines and VTU, MAKAUT, and Mumbai University standards.",
    scale: 10,
    formulaDisplay: "Percentage (%) = (CGPA - 0.75) × 10 (Standard Engineering Formula)",
    formulaNote: "Most engineering colleges in India affiliated with AICTE follow the (CGPA - 0.75) × 10 calculation rule.",
    calculate: (cgpa) => {
      if (cgpa < 0.75) return 0;
      return parseFloat(((cgpa - 0.75) * 10).toFixed(2));
    },
    faqs: [
      {
        q: "What is the standard CGPA to percentage formula for engineering?",
        a: "Under AICTE guidelines, the default formula for B.Tech/B.E. engineering streams is: Percentage (%) = (CGPA - 0.75) × 10."
      },
      {
        q: "Why do engineering colleges subtract 0.75?",
        a: "Subtracting 0.75 standardizes the passing average and honors-level divisions relative to conventional aggregate percentages."
      }
    ]
  },
  standard: {
    slug: "standard",
    name: "Standard CBSE 10.0 Scale",
    shortName: "Standard (CBSE)",
    title: "CGPA to Percentage Calculator | Standard 9.5 Formula",
    heading: "CGPA to Percentage Calculator (10-Point Scale)",
    metaDescription: "Convert 10.0 scale CGPA to percentage using the standard CBSE 9.5 multiplier. Instantly get equivalent percentage, performance badges, and division categories.",
    scale: 10,
    formulaDisplay: "Percentage (%) = CGPA × 9.5",
    formulaNote: "This standard formula is widely used by CBSE and other universities, multiplying the overall CGPA score by 9.5.",
    calculate: (cgpa) => {
      return parseFloat((cgpa * 9.5).toFixed(2));
    },
    faqs: [
      {
        q: "How to convert CGPA to percentage on a 10.0 scale?",
        a: "By default, multiply your CGPA by 9.5. Formula: Percentage (%) = CGPA × 9.5. E.g., for an 8.6 CGPA, the percentage is 8.6 × 9.5 = 81.7%."
      },
      {
        q: "Why is the multiplier exactly 9.5?",
        a: "Statistically analyzed scoring distributions from previous boards show that 9.5 maps the average of top scorers to 95%, aligning the grading scale fairly with percentiles."
      },
      {
        q: "How do I calculate semester aggregate percentage?",
        a: "Add up your CGPAs or SGPAs for all semesters and divide by the total semesters. Then multiply the resulting average CGPA by your school/university's conversion factor."
      }
    ]
  }
};

// Generates a performance badge text and class based on the percentage
export function getPerformanceBadge(percentage) {
  if (percentage >= 75) {
    return {
      text: "First Class with Distinction",
      color: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
    };
  } else if (percentage >= 60) {
    return {
      text: "First Class",
      color: "bg-blue-500/10 text-blue-400 border border-blue-500/20"
    };
  } else if (percentage >= 50) {
    return {
      text: "Second Class",
      color: "bg-amber-500/10 text-amber-400 border border-amber-500/20"
    };
  } else if (percentage >= 35) {
    return {
      text: "Pass Class",
      color: "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20"
    };
  } else {
    return {
      text: "Fail",
      color: "bg-rose-500/10 text-rose-400 border border-rose-500/20"
    };
  }
}

// Generate values for static table output
export function generateScaleTable(presetKey) {
  const preset = universities[presetKey] || universities.standard;
  const scale = preset.scale;
  const rows = [];

  if (scale === 4) {
    // Generate rows from 1.0 to 4.0 with 0.2 increments
    for (let gpa = 4.0; gpa >= 1.0; gpa -= 0.2) {
      const activeGpa = parseFloat(gpa.toFixed(1));
      rows.push({
        cgpa: activeGpa.toFixed(1),
        percentage: preset.calculate(activeGpa).toFixed(1) + "%",
        badge: getPerformanceBadge(preset.calculate(activeGpa)).text
      });
    }
  } else {
    // Generate rows from 10.0 to 4.0 with 0.5 increments
    for (let cgpa = 10.0; cgpa >= 4.0; cgpa -= 0.5) {
      const activeCgpa = parseFloat(cgpa.toFixed(1));
      rows.push({
        cgpa: activeCgpa.toFixed(1),
        percentage: preset.calculate(activeCgpa).toFixed(1) + "%",
        badge: getPerformanceBadge(preset.calculate(activeCgpa)).text
      });
    }
  }
  return rows;
}
