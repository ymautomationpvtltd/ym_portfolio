import React, { useState } from 'react';
import { X, FileText, CheckCircle2, Send, Download, ShieldCheck, Sparkles, Building } from 'lucide-react';

export default function InvestorModal({ isOpen, onClose, theme }) {
  const [submitted, setSubmitted] = useState(false);
  const isDark = theme === 'dark';

  const [investorForm, setInvestorForm] = useState({
    name: '',
    firm: '',
    email: '',
    ticketSize: '₹50 Lakhs - ₹2 Crores (Angel / Pre-Seed)',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md animate-fadeIn ${
      isDark ? 'bg-slate-950/80' : 'bg-slate-900/60'
    }`}>
      
      {/* Modal Card */}
      <div className={`relative w-full max-w-xl rounded-3xl p-6 sm:p-8 border shadow-2xl space-y-6 ${
        isDark 
          ? 'glass-card border-slate-700/80 shadow-slate-950/50' 
          : 'bg-white border-blue-200 shadow-blue-900/20'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-xl border transition-colors ${
            isDark 
              ? 'bg-slate-900 text-slate-400 hover:text-white border-slate-800' 
              : 'bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 border-slate-200'
          }`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className={`w-16 h-16 rounded-full border flex items-center justify-center mx-auto ${
              isDark ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-emerald-100 text-emerald-600 border-emerald-300'
            }`}>
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Investor Deck Access Granted!</h3>
            
            <p className={`text-sm max-w-md mx-auto ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Thank you, <strong className={isDark ? 'text-white' : 'text-slate-900'}>{investorForm.name}</strong> ({investorForm.firm || 'Investor'}). The YM Automation Investor Deck & Financial Overview package has been sent to <span className={`font-mono font-bold ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`}>{investorForm.email}</span>.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#contact"
                onClick={onClose}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-white ${
                  isDark ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950' : 'bg-[#015CCF] hover:bg-[#014ea4]'
                }`}
              >
                <span>Schedule Founder Call</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl border text-xs font-semibold ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white' 
                    : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                }`}
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-bold ${
                isDark 
                  ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' 
                  : 'bg-[#015CCF]/10 border-[#015CCF]/30 text-[#015CCF]'
              }`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>CONFIDENTIAL INVESTOR DECK</span>
              </div>
              <h3 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Request YM Automation Pitch Deck
              </h3>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
                Direct access to financial projections, market expansion strategy, and technical IP summary.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className={`block text-xs font-mono font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Full Name <span className={isDark ? 'text-cyan-400' : 'text-[#015CCF]'}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={investorForm.name}
                  onChange={(e) => setInvestorForm({ ...investorForm, name: e.target.value })}
                  placeholder="e.g. Alexander Vance"
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none ${
                    isDark 
                      ? 'bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500' 
                      : 'bg-slate-50 border border-blue-200 text-slate-900 placeholder-slate-400 focus:border-[#015CCF] focus:bg-white'
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-mono font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Venture / Firm Name
                  </label>
                  <input
                    type="text"
                    value={investorForm.firm}
                    onChange={(e) => setInvestorForm({ ...investorForm, firm: e.target.value })}
                    placeholder="e.g. Catalyst Ventures"
                    className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none ${
                      isDark 
                        ? 'bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500' 
                        : 'bg-slate-50 border border-blue-200 text-slate-900 placeholder-slate-400 focus:border-[#015CCF] focus:bg-white'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Work Email <span className={isDark ? 'text-cyan-400' : 'text-[#015CCF]'}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={investorForm.email}
                    onChange={(e) => setInvestorForm({ ...investorForm, email: e.target.value })}
                    placeholder="e.g. alex@catalyst.com"
                    className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none ${
                      isDark 
                        ? 'bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500' 
                        : 'bg-slate-50 border border-blue-200 text-slate-900 placeholder-slate-400 focus:border-[#015CCF] focus:bg-white'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-mono font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Investment Ticket Size Range (INR)
                </label>
                <select
                  value={investorForm.ticketSize}
                  onChange={(e) => setInvestorForm({ ...investorForm, ticketSize: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none font-medium ${
                    isDark 
                      ? 'bg-slate-900 border border-slate-800 text-white focus:border-cyan-500' 
                      : 'bg-slate-50 border border-blue-200 text-slate-900 focus:border-[#015CCF] focus:bg-white'
                  }`}
                >
                  <option value="₹50 Lakhs - ₹2 Crores (Angel / Pre-Seed)">₹50 Lakhs - ₹2 Crores (Angel / Pre-Seed)</option>
                  <option value="₹2 Crores - ₹10 Crores (Seed Expansion)">₹2 Crores - ₹10 Crores (Seed Expansion)</option>
                  <option value="₹10 Crores+ (Series A)">₹10 Crores+ (Strategic / Series A)</option>
                  <option value="Commercial Partnership">Commercial Partnership / Client Project</option>
                </select>
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded-xl text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-cyan-500/25 hover:shadow-cyan-500/40' 
                    : 'bg-[#015CCF] hover:bg-[#014ea4] shadow-[#015CCF]/25 hover:shadow-[#015CCF]/40'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Receive Pitch Deck & Financial Summary</span>
              </button>

              <div className={`flex items-center justify-center gap-1.5 text-[11px] font-mono font-medium ${
                isDark ? 'text-slate-500' : 'text-slate-500'
              }`}>
                <ShieldCheck className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span>Encrypted transmission to Founder Inbox</span>
              </div>

            </form>
          </>
        )}

      </div>

    </div>
  );
}
