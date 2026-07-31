import React from 'react';
import { 
  Award, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  ExternalLink, 
  Zap,
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function Hero({ onOpenInvestorModal, theme }) {
  const isDark = theme === 'dark';

  const credentials = [
    { title: "Bachelor's in Mechatronics", subtitle: "Core Robotics & Systems" },
    { title: "Master's in IoT & Sensor Systems", subtitle: "IIoT Networks & Smart Hardware" },
    { title: "Postgraduate in Industrial Automation", subtitle: "PLC, SCADA & Robotics" },
    { title: "L&T Certified Automation Engineer", subtitle: "Larsen & Toubro Endorsed Expert" }
  ];

  return (
    <section className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors duration-300 ${
      isDark 
        ? 'bg-[#090d16] bg-hero-gradient-dark text-slate-100' 
        : 'bg-[#ebf7ff] bg-hero-gradient-light text-slate-900'
    }`}>
      {/* Background Cyber Grid */}
      <div className={`absolute inset-0 pointer-events-none ${
        isDark ? 'bg-grid-pattern-dark opacity-40' : 'bg-grid-pattern-light opacity-60'
      }`} />
      
      {/* Glow Accent Circle */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] blur-[120px] rounded-full pointer-events-none ${
        isDark ? 'bg-cyan-500/10' : 'bg-[#015CCF]/12'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Founder Credentials */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Investor Status Badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono shadow-sm ${
              isDark 
                ? 'bg-slate-900/90 border-cyan-500/40 text-cyan-300' 
                : 'bg-white border-blue-200 text-slate-800 shadow-blue-900/5'
            }`}>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className={isDark ? 'text-slate-300 font-medium' : 'text-slate-700 font-semibold'}>Investor Showcase</span>
              <span className={isDark ? 'text-slate-600' : 'text-slate-300'}>|</span>
              <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`}>YM Automation Pvt Ltd</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans leading-[1.1] ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Yogeshwaran <br />
                <span className={isDark ? 'text-gradient-cyan' : 'text-gradient-primary'}>
                  Muralidharan
                </span>
              </h1>
              <p className={`text-lg sm:text-xl font-bold font-sans tracking-wide ${
                isDark ? 'text-slate-300' : 'text-slate-800'
              }`}>
                Managing Director & Founder, <span className={isDark ? 'text-cyan-400 font-extrabold' : 'text-[#015CCF] font-extrabold'}>YM Automation</span>
              </p>
            </div>

            {/* Bio summary */}
            <p className={`text-sm sm:text-base leading-relaxed font-normal max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              A visionary young tech entrepreneur with advanced specialization across mechatronics, sensor architectures, and industrial automation. Having worked with top-tier automation corporations, he created <strong className={isDark ? 'text-white font-bold' : 'text-slate-900 font-bold'}>YM Automation Private Limited</strong> to deliver Industry 4.0 IoT solutions, intelligent sensors, and automated mechatronic infrastructure to global industrial enterprises.
            </p>

            {/* Quick Credentials Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {credentials.map((cred, idx) => (
                <div key={idx} className={`flex items-start gap-2.5 p-3 rounded-xl border transition-all ${
                  isDark 
                    ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/30' 
                    : 'bg-white border-blue-200/90 hover:border-[#015CCF]/40 shadow-sm'
                }`}>
                  <div className={`mt-0.5 p-1.5 rounded-lg ${
                    isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-[#015CCF]/10 text-[#015CCF]'
                  }`}>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>{cred.title}</h4>
                    <p className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>{cred.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenInvestorModal}
                className={`px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2 group text-white ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-cyan-500/25 hover:shadow-cyan-500/40' 
                    : 'bg-[#015CCF] hover:bg-[#014ea4] shadow-[#015CCF]/25 hover:shadow-[#015CCF]/40'
                }`}
              >
                <span>Request Investor Pitch Deck</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#contact"
                className={`px-6 py-3.5 rounded-xl border font-bold text-sm transition-all flex items-center gap-2 ${
                  isDark 
                    ? 'bg-slate-900 border-slate-700/80 hover:border-cyan-500/60 text-slate-200 hover:text-white' 
                    : 'bg-white border-blue-300 hover:border-[#015CCF] text-slate-800 hover:text-[#015CCF] shadow-sm'
                }`}
              >
                <span>Schedule Meeting</span>
                <Zap className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`} />
              </a>

              <a
                href="https://www.ymautomation.com/"
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-3.5 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors ${
                  isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-[#015CCF]'
                }`}
              >
                <span>ymautomation.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Founder Tech Card Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Tech Card Background Glow */}
            <div className={`absolute -inset-1 rounded-3xl opacity-20 blur-xl animate-pulse-slow ${
              isDark ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gradient-to-r from-[#015CCF] to-blue-500'
            }`} />

            <div className={`relative rounded-3xl p-6 sm:p-8 space-y-6 border shadow-2xl ${
              isDark 
                ? 'bg-slate-900/90 border-slate-800 text-white shadow-slate-950/40' 
                : 'bg-white border-blue-200 text-slate-900 shadow-xl shadow-blue-900/10'
            }`}>
              
              {/* Profile Avatar & Header */}
              <div className={`flex items-center gap-4 pb-6 border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl p-0.5 shadow-lg ${
                    isDark ? 'bg-gradient-to-br from-cyan-400 to-blue-600' : 'bg-gradient-to-br from-[#015CCF] to-blue-600'
                  }`}>
                    <div className={`w-full h-full rounded-[14px] flex items-center justify-center font-extrabold text-2xl font-mono ${
                      isDark ? 'bg-slate-950 text-cyan-400' : 'bg-white text-[#015CCF]'
                    }`}>
                      YM
                    </div>
                  </div>
                  <span className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 flex items-center justify-center text-[10px] text-white font-bold ${
                    isDark ? 'border-slate-900' : 'border-white'
                  }`}>
                    ✓
                  </span>
                </div>

                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Yogeshwaran M.</h3>
                  <p className={`text-xs font-mono font-bold ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`}>Industrial Mechatronics & IIoT Founder</p>
                  <p className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>Managing Director @ YM Automation Pvt Ltd</p>
                </div>
              </div>

              {/* Key Credentials Badges */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={`font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>QUALIFICATION SNAPSHOT</span>
                  <span className={isDark ? 'text-emerald-400 font-semibold' : 'text-emerald-600 font-bold'}>100% Verified</span>
                </div>

                <div className="space-y-2">
                  <div className={`p-2.5 rounded-lg border flex items-center justify-between text-xs ${
                    isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-blue-50/70 border-blue-200/80'
                  }`}>
                    <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>B.E. Mechatronics Engineering</span>
                    <span className={`font-mono text-[11px] font-bold ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`}>Core Robotics</span>
                  </div>
                  <div className={`p-2.5 rounded-lg border flex items-center justify-between text-xs ${
                    isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-blue-50/70 border-blue-200/80'
                  }`}>
                    <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>M.S. IoT & Sensor Systems</span>
                    <span className={`font-mono text-[11px] font-bold ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`}>Sensor Hardware</span>
                  </div>
                  <div className={`p-2.5 rounded-lg border flex items-center justify-between text-xs ${
                    isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-blue-50/70 border-blue-200/80'
                  }`}>
                    <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>PG Industrial Automation</span>
                    <span className={`font-mono text-[11px] font-bold ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`}>PLC & SCADA</span>
                  </div>
                  <div className={`p-2.5 rounded-lg border flex items-center justify-between text-xs ${
                    isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-emerald-50 border-emerald-200'
                  }`}>
                    <span className={`font-bold ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>L&T Certified Automation Engineer</span>
                    <span className={`font-mono text-[11px] font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>L&T Endorsed</span>
                  </div>
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className={`p-3 rounded-xl border text-center ${
                  isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`text-xl font-extrabold font-mono ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`}>IIoT + Smart</div>
                  <div className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>Factory Tech Stack</div>
                </div>
                <div className={`p-3 rounded-xl border text-center ${
                  isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`text-xl font-extrabold font-mono ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Coimbatore</div>
                  <div className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>Headquarters (TN)</div>
                </div>
              </div>

              {/* Contact Ready Alert */}
              <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                isDark ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-blue-50 border-blue-200'
              }`}>
                <FileText className={`w-5 h-5 shrink-0 ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`} />
                <div className="text-xs">
                  <p className={`font-bold ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>Ready for Investor Dialogue</p>
                  <p className={isDark ? 'text-slate-400 text-[11px]' : 'text-slate-600 text-[11px]'}>ZeptoMail integrated contact direct to MD inbox.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
