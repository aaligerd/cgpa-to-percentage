'use client';

import React, { useState, useMemo } from 'react';
import { universities, getPerformanceBadge } from '../lib/universities';

export default function Calculator({ initialPreset = 'standard' }) {
  const [activeTab, setActiveTab] = useState('quick'); // 'quick' | 'semester'
  const [presetKey, setPresetKey] = useState(initialPreset);
  
  // Custom Factor (only active if custom standard/engineering is allowed, or just let users modify the multiplier)
  const [customMultiplier, setCustomMultiplier] = useState('9.5');
  const [isCustomFactor, setIsCustomFactor] = useState(false);

  // Quick Calculator state
  const [cgpaInput, setCgpaInput] = useState('8.0');
  const [quickError, setQuickError] = useState('');

  // Semester Calculator state
  const [semesters, setSemesters] = useState([
    { id: 1, name: 'Semester 1', sgpa: '', credits: '' },
    { id: 2, name: 'Semester 2', sgpa: '', credits: '' },
  ]);
  const [semErrors, setSemErrors] = useState({});

  // Active university config
  const activePreset = useMemo(() => {
    return universities[presetKey] || universities.standard;
  }, [presetKey]);

  const activeScale = activePreset.scale;

  // Handle preset change
  const handlePresetChange = (e) => {
    const key = e.target.value;
    setPresetKey(key);
    
    // Auto-adjust scale bounds for existing inputs
    const targetScale = universities[key]?.scale || 10;
    const currentVal = parseFloat(cgpaInput);
    if (!isNaN(currentVal) && currentVal > targetScale) {
      setCgpaInput(targetScale.toString());
      setQuickError(`Value clamped to max scale of ${targetScale}`);
    } else {
      setQuickError('');
    }
  };

  // Validate and handle Quick CGPA Input
  const handleCgpaChange = (e) => {
    const val = e.target.value;
    
    // Allow empty input for typing experience
    if (val === '') {
      setCgpaInput('');
      setQuickError('Please enter a CGPA score.');
      return;
    }

    // RegEx validation for numbers/decimal
    if (!/^\d*\.?\d*$/.test(val)) {
      setQuickError('Please enter a valid positive number.');
      return;
    }

    const numVal = parseFloat(val);
    if (isNaN(numVal)) {
      setCgpaInput(val);
      setQuickError('Invalid number format.');
      return;
    }

    if (numVal < 0) {
      setQuickError('CGPA cannot be negative.');
      return;
    }

    if (numVal > activeScale) {
      setQuickError(`CGPA cannot exceed the maximum scale of ${activeScale}.`);
      return;
    }

    setQuickError('');
    setCgpaInput(val);
  };

  // Quick Converter Calculation
  const quickResult = useMemo(() => {
    const cgpa = parseFloat(cgpaInput);
    if (isNaN(cgpa) || cgpa < 0 || cgpa > activeScale || quickError) {
      return null;
    }

    let percentage = 0;
    let stepExplanation = '';

    if (presetKey === 'standard' && isCustomFactor) {
      const factor = parseFloat(customMultiplier) || 9.5;
      percentage = parseFloat((cgpa * factor).toFixed(2));
      stepExplanation = `Percentage = ${cgpa} × ${factor} = ${percentage}%`;
    } else if (presetKey === 'for-engineering' && isCustomFactor) {
      const factor = parseFloat(customMultiplier) || 10;
      percentage = parseFloat(((cgpa - 0.75) * factor).toFixed(2));
      stepExplanation = `Percentage = (${cgpa} - 0.75) × ${factor} = ${percentage}%`;
    } else {
      percentage = activePreset.calculate(cgpa);
      // Generate step-by-step description
      if (presetKey === 'mumbai-university') {
        if (cgpa < 7) {
          stepExplanation = `Since CGPA ${cgpa} < 7:\nPercentage = (${cgpa} × 7.1) + 12 = ${percentage}%`;
        } else {
          stepExplanation = `Since CGPA ${cgpa} ≥ 7:\nPercentage = (${cgpa} × 7.25) + 11 = ${percentage}%`;
        }
      } else if (presetKey === 'sppu') {
        if (cgpa >= 5.0 && cgpa < 6.25) {
          stepExplanation = `Range [5.0 - 6.25]:\nPercentage = (${cgpa} × 8.8) + 12 = ${percentage}%`;
        } else if (cgpa >= 6.25 && cgpa < 6.75) {
          stepExplanation = `Range [6.25 - 6.75]:\nPercentage = (${cgpa} × 9.0) + 10.75 = ${percentage}%`;
        } else if (cgpa >= 6.75 && cgpa < 8.25) {
          stepExplanation = `Range [6.75 - 8.25]:\nPercentage = (${cgpa} × 10.0) - 7.5 = ${percentage}%`;
        } else if (cgpa >= 8.25 && cgpa < 9.5) {
          stepExplanation = `Range [8.25 - 9.5]:\nPercentage = (${cgpa} × 8.5) + 5.0 = ${percentage}%`;
        } else if (cgpa >= 9.5 && cgpa <= 10.0) {
          stepExplanation = `Range [9.5 - 10.0]:\nPercentage = (${cgpa} × 9.5) + 1.25 = ${percentage}%`;
        } else {
          stepExplanation = `Below SPPU scale threshold (< 5.0):\nPercentage = ${cgpa} × 8.0 = ${percentage}%`;
        }
      } else {
        stepExplanation = `Applying ${activePreset.shortName} formula:\n${activePreset.formulaDisplay.replace('CGPA', cgpa)} = ${percentage}%`;
      }
    }

    const badge = getPerformanceBadge(percentage);

    return {
      percentage,
      explanation: stepExplanation,
      badge
    };
  }, [cgpaInput, presetKey, activePreset, activeScale, quickError, isCustomFactor, customMultiplier]);

  // Semester functions
  const addSemester = () => {
    if (semesters.length >= 8) return;
    const nextId = semesters.length > 0 ? Math.max(...semesters.map(s => s.id)) + 1 : 1;
    setSemesters([...semesters, { id: nextId, name: `Semester ${nextId}`, sgpa: '', credits: '' }]);
  };

  const removeSemester = (id) => {
    setSemesters(semesters.filter((s) => s.id !== id));
    const newErrors = { ...semErrors };
    delete newErrors[id];
    setSemErrors(newErrors);
  };

  const handleSemesterChange = (id, field, value) => {
    // Validate character formats
    if (value !== '' && !/^\d*\.?\d*$/.test(value)) {
      return;
    }

    const updated = semesters.map((sem) => {
      if (sem.id === id) {
        return { ...sem, [field]: value };
      }
      return sem;
    });
    setSemesters(updated);

    // Validation
    const newErrors = { ...semErrors };
    const numVal = parseFloat(value);

    if (value === '') {
      delete newErrors[`${id}-${field}`];
    } else if (isNaN(numVal)) {
      newErrors[`${id}-${field}`] = 'Invalid number';
    } else if (numVal < 0) {
      newErrors[`${id}-${field}`] = 'Cannot be negative';
    } else if (field === 'sgpa' && numVal > activeScale) {
      newErrors[`${id}-${field}`] = `Max scale is ${activeScale}`;
    } else if (field === 'credits' && numVal > 100) {
      newErrors[`${id}-${field}`] = 'Max credits is 100';
    } else {
      delete newErrors[`${id}-${field}`];
    }

    setSemErrors(newErrors);
  };

  // Cumulative Calculator calculation
  const aggregateResult = useMemo(() => {
    let totalWeightedSgpa = 0;
    let totalCredits = 0;
    let hasSgpa = false;
    let errorsExist = Object.keys(semErrors).length > 0;

    if (errorsExist) return null;

    for (let sem of semesters) {
      const sgpa = parseFloat(sem.sgpa);
      // If user provided a credit, calculate weighted average, else fall back to equal weight (1)
      const credits = sem.credits !== '' ? parseFloat(sem.credits) : 1.0;

      if (!isNaN(sgpa)) {
        if (sgpa < 0 || sgpa > activeScale) return null;
        totalWeightedSgpa += sgpa * credits;
        totalCredits += credits;
        hasSgpa = true;
      }
    }

    if (!hasSgpa || totalCredits === 0) return null;

    const cumulativeCgpa = parseFloat((totalWeightedSgpa / totalCredits).toFixed(2));
    
    // Convert to percentage
    let percentage = 0;
    if (presetKey === 'standard' && isCustomFactor) {
      const factor = parseFloat(customMultiplier) || 9.5;
      percentage = parseFloat((cumulativeCgpa * factor).toFixed(2));
    } else if (presetKey === 'for-engineering' && isCustomFactor) {
      const factor = parseFloat(customMultiplier) || 10;
      percentage = parseFloat(((cumulativeCgpa - 0.75) * factor).toFixed(2));
    } else {
      percentage = activePreset.calculate(cumulativeCgpa);
    }
    
    const badge = getPerformanceBadge(percentage);

    return {
      cgpa: cumulativeCgpa,
      percentage,
      badge
    };
  }, [semesters, semErrors, presetKey, activePreset, activeScale, isCustomFactor, customMultiplier]);

  const resetAll = () => {
    // Reset inputs
    setCgpaInput('8.0');
    setQuickError('');
    setSemesters([
      { id: 1, name: 'Semester 1', sgpa: '', credits: '' },
      { id: 2, name: 'Semester 2', sgpa: '', credits: '' },
    ]);
    setSemErrors({});
    setIsCustomFactor(false);
    setCustomMultiplier('9.5');
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Top Banner with Presets */}
      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 border-b border-zinc-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-zinc-100 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Select Grading Standard
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">Automatically maps mathematical logic and bounds</p>
          </div>
          <div className="w-full md:w-80">
            <select
              value={presetKey}
              onChange={handlePresetChange}
              className="w-full h-11 sm:h-12 px-4 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-all text-sm"
              id="university-preset-select"
            >
              {Object.keys(universities).map((key) => (
                <option key={key} value={key} className="bg-zinc-950 text-zinc-100">
                  {universities[key].name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Custom multiplier config display */}
        {(presetKey === 'standard' || presetKey === 'for-engineering') && (
          <div className="mt-4 p-4 rounded-xl bg-zinc-950/60 border border-indigo-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all animate-fadeIn">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="custom-factor-checkbox"
                checked={isCustomFactor}
                onChange={(e) => {
                  setIsCustomFactor(e.target.checked);
                  setCustomMultiplier(presetKey === 'for-engineering' ? '10' : '9.5');
                }}
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-zinc-900 border-zinc-800 cursor-pointer"
              />
              <label htmlFor="custom-factor-checkbox" className="text-sm font-medium text-zinc-300 cursor-pointer select-none">
                Customize conversion factor / multiplier
              </label>
            </div>
            {isCustomFactor && (
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs text-zinc-400">Multiplier:</span>
                <input
                  type="text"
                  value={customMultiplier}
                  onChange={(e) => {
                    const v = e.target.value;
                    if (/^\d*\.?\d*$/.test(v)) setCustomMultiplier(v);
                  }}
                  className="w-20 h-8 text-center bg-zinc-900 text-indigo-400 font-bold border border-zinc-800 rounded-lg focus:outline-none focus:border-indigo-500 text-sm"
                  maxLength="4"
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Calculator Tab Headers */}
      <div className="flex border-b border-zinc-800 bg-zinc-900/60 p-1.5 sm:p-2 gap-1">
        <button
          onClick={() => setActiveTab('quick')}
          className={`flex-1 py-2.5 sm:py-4 text-xs sm:text-sm font-semibold transition-all cursor-pointer flex justify-center items-center gap-1.5 sm:gap-2 rounded-xl ${
            activeTab === 'quick'
              ? 'bg-zinc-800 text-indigo-400 shadow-sm border-t border-zinc-700/50'
              : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30'
          }`}
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Quick Converter
        </button>
        <button
          onClick={() => setActiveTab('semester')}
          className={`flex-1 py-2.5 sm:py-4 text-xs sm:text-sm font-semibold transition-all cursor-pointer flex justify-center items-center gap-1.5 sm:gap-2 rounded-xl ${
            activeTab === 'semester'
              ? 'bg-zinc-800 text-indigo-400 shadow-sm border-t border-zinc-700/50'
              : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30'
          }`}
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <span>Semester <span className="hidden xs:inline">Aggregate</span></span>
        </button>
      </div>

      {/* Main Body */}
      <div className="p-4 sm:p-6 md:p-8">
        
        {/* TAB 1: QUICK CONVERTER */}
        {activeTab === 'quick' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Input Side */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80">
                <div className="flex justify-between items-center mb-4">
                  <label htmlFor="quick-cgpa-input" className="block text-sm font-semibold text-zinc-300">
                    Enter CGPA / SGPA
                  </label>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-900">
                    Scale: {activeScale}.0
                  </span>
                </div>
                
                <div className="relative mt-2">
                  <input
                    type="text"
                    id="quick-cgpa-input"
                    value={cgpaInput}
                    onChange={setCgpaInput ? handleCgpaChange : undefined}
                    placeholder={`e.g. ${(activeScale * 0.8).toFixed(1)}`}
                    className="w-full h-14 sm:h-16 pl-4 pr-16 text-xl sm:text-2xl font-bold bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-zinc-100 placeholder-zinc-600 transition-all"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-zinc-500 font-bold">
                    / {activeScale}.0
                  </div>
                </div>

                {quickError && (
                  <p className="mt-3 text-sm text-rose-400 flex items-center gap-1.5 animate-pulse">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {quickError}
                  </p>
                )}

                {/* Range Slider for UX */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-zinc-500 font-medium">
                    <span>0.0</span>
                    <span>{activeScale}.0</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={activeScale}
                    step="0.01"
                    value={parseFloat(cgpaInput) || 0}
                    onChange={(e) => {
                      setCgpaInput(e.target.value);
                      setQuickError('');
                    }}
                    className="w-full h-2 mt-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                </div>
              </div>

              {/* Guide Note Box */}
              <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/60 text-xs text-zinc-400 space-y-2">
                <p className="font-semibold text-zinc-300">Active Formula Policy:</p>
                <div className="font-mono text-indigo-400/90 text-sm font-semibold">{isCustomFactor && (presetKey === 'standard' || presetKey === 'for-engineering') ? `Percentage = CGPA × ${customMultiplier}` : activePreset.formulaDisplay}</div>
                <p className="leading-relaxed">{activePreset.formulaNote}</p>
              </div>
            </div>

            {/* Results Side */}
            <div className="flex flex-col justify-center items-center bg-gradient-to-b from-zinc-950 to-zinc-900 border border-zinc-800/80 p-8 rounded-2xl relative overflow-hidden">
              {quickResult ? (
                <div className="text-center w-full flex flex-col justify-between h-full py-4 space-y-6">
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-zinc-500 tracking-wider uppercase">Equivalent Percentage</span>
                    <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mt-2 tracking-tight transition-all font-sans bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-400">
                      {quickResult.percentage}%
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className={`px-4 py-1.5 rounded-full text-xs font-bold ${quickResult.badge.color}`}>
                      {quickResult.badge.text}
                    </div>
                  </div>

                  <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/50 text-left">
                    <span className="text-xs font-bold text-zinc-500 block uppercase mb-1">Step-by-Step Proof</span>
                    <pre className="text-xs font-mono text-zinc-300 whitespace-pre-line leading-relaxed">
                      {quickResult.explanation}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-zinc-500">
                  <svg className="w-12 h-12 mx-auto text-zinc-700 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm font-medium">Waiting for valid CGPA input...</p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 2: SEMESTER AGGREGATE CALCULATOR */}
        {activeTab === 'semester' && (
          <div className="space-y-6">
            
            {/* Top explanation */}
            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/40 text-sm text-zinc-300 flex items-start gap-3">
              <svg className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold text-indigo-300">Weighted Average System</p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Allows weighting each semester based on credit hours. If credits are left blank, semesters are calculated with equal weight. Conversions will map automatically to the active preset: <strong className="text-indigo-300">{activePreset.name}</strong>.
                </p>
              </div>
            </div>

            {/* Semester Rows */}
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {semesters.map((sem, idx) => (
                <div
                  key={sem.id}
                  className="grid grid-cols-12 gap-3 items-center p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all"
                >
                  <div className="col-span-12 sm:col-span-4 flex items-center gap-2">
                    <span className="text-xs font-semibold text-zinc-500 w-6">#{idx + 1}</span>
                    <input
                      type="text"
                      value={sem.name}
                      onChange={(e) => {
                        const updated = semesters.map((s) => s.id === sem.id ? { ...s, name: e.target.value } : s);
                        setSemesters(updated);
                      }}
                      className="bg-transparent border-b border-transparent hover:border-zinc-800 focus:border-indigo-500 focus:outline-none text-sm font-semibold text-zinc-200 py-0.5 w-full transition-all"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4 relative">
                    <input
                      type="text"
                      placeholder={`SGPA (Max ${activeScale})`}
                      value={sem.sgpa}
                      onChange={(e) => handleSemesterChange(sem.id, 'sgpa', e.target.value)}
                      className={`w-full h-11 px-3 text-sm font-semibold bg-zinc-900 border rounded-lg focus:outline-none focus:ring-1 text-zinc-100 ${
                        semErrors[`${sem.id}-sgpa`]
                          ? 'border-rose-500/50 focus:ring-rose-500'
                          : 'border-zinc-800 focus:ring-indigo-500'
                      }`}
                    />
                    {semErrors[`${sem.id}-sgpa`] && (
                      <span className="absolute -bottom-5 left-1 text-[10px] text-rose-400 font-bold">
                        {semErrors[`${sem.id}-sgpa`]}
                      </span>
                    )}
                  </div>

                  <div className="col-span-4 sm:col-span-3 relative">
                    <input
                      type="text"
                      placeholder="Credits (Optional)"
                      value={sem.credits}
                      onChange={(e) => handleSemesterChange(sem.id, 'credits', e.target.value)}
                      className={`w-full h-11 px-3 text-sm font-semibold bg-zinc-900 border rounded-lg focus:outline-none focus:ring-1 text-zinc-100 ${
                        semErrors[`${sem.id}-credits`]
                          ? 'border-rose-500/50 focus:ring-rose-500'
                          : 'border-zinc-800 focus:ring-indigo-500'
                      }`}
                    />
                    {semErrors[`${sem.id}-credits`] && (
                      <span className="absolute -bottom-5 left-1 text-[10px] text-rose-400 font-bold">
                        {semErrors[`${sem.id}-credits`]}
                      </span>
                    )}
                  </div>

                  <div className="col-span-2 sm:col-span-1 flex justify-end">
                    <button
                      onClick={() => removeSemester(sem.id)}
                      disabled={semesters.length <= 1}
                      className="p-2.5 rounded-lg border border-zinc-800 text-zinc-500 hover:text-rose-400 hover:bg-rose-950/20 hover:border-rose-900/30 disabled:opacity-30 disabled:hover:text-zinc-500 disabled:hover:bg-transparent cursor-pointer transition-all"
                      title="Remove row"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions for semesters */}
            <div className="flex justify-between items-center pt-2">
              <button
                onClick={addSemester}
                disabled={semesters.length >= 8}
                className="h-11 px-5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-zinc-300 font-semibold flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-800/50 transition-all text-sm"
              >
                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Add Semester ({semesters.length}/8)
              </button>
            </div>

            {/* Semester Calculator Outputs */}
            <div className="mt-8 p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              {aggregateResult ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Weighted CGPA</span>
                    <div className="text-4xl font-extrabold text-white">
                      {aggregateResult.cgpa} <span className="text-sm font-semibold text-zinc-500">/ {activeScale}.0</span>
                    </div>
                  </div>

                  <div className="space-y-1 border-y md:border-y-0 md:border-x border-zinc-800/80 py-4 md:py-0 md:px-6">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Aggregate Percentage</span>
                    <div className="text-4xl font-extrabold text-indigo-400">
                      {aggregateResult.percentage}%
                    </div>
                  </div>

                  <div className="flex flex-col items-center md:items-end justify-center h-full">
                    <div className={`px-4.5 py-2 rounded-full text-xs font-bold inline-block ${aggregateResult.badge.color}`}>
                      {aggregateResult.badge.text}
                    </div>
                    <span className="text-[10px] text-zinc-500 mt-2 text-right">
                      Calculated using {activePreset.name} conversion scale.
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 text-zinc-500 text-sm font-medium">
                  Please add values to semesters above to view cumulative calculation.
                </div>
              )}
            </div>

          </div>
        )}

        {/* Global Reset Button & Preset Display */}
        <div className="flex justify-between items-center border-t border-zinc-800/60 mt-8 pt-6">
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-semibold">
            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Client-Side Computation Secured
          </div>
          <button
            onClick={resetAll}
            className="h-10 px-4 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800/30 text-zinc-400 hover:text-zinc-200 font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3m-3-3v12" />
            </svg>
            Reset Form
          </button>
        </div>

      </div>
    </div>
  );
}
