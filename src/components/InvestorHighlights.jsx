import React from 'react';
import { 
  TrendingUp, 
  Target, 
  ShieldCheck, 
  IndianRupee, 
  Zap, 
  Layers, 
  FileText, 
  ArrowRight, 
  PieChart,
  BarChart3,
  Award,
  Globe2
} from 'lucide-react';

export default function InvestorHighlights({ onOpenInvestorModal, theme }) {
  const isDark = theme === 'dark';

  const investorPillars = [
    {
      title: "Huge Market Opportunity",
      metric: "₹25 Lakh Cr+",
      sub: "Global & Indian Industry 4.0 Market",
      desc: "India's rapid manufacturing sector modernization creates massive demand for retrofitting existing plant machinery with wireless IoT sensors and smart mechatronic controls.",
      icon: Globe2,
      badge: "High Growth Market"
    },
    {
      title: "Strong Technical Moat",
      metric: "L&T Certified",
      sub: "Technical Excellence",
      desc: "Founder's unique academic quad-degree (Mechatronics B.E. + M.S. IoT & Sensor Systems + PG Automation + L&T Certification) ensures top 1% engineering standards.",
      icon: Award,
      badge: "Defensible IP & Skills"
    },
    {
      title: "Dual Revenue Model",
      metric: "CAPEX + OPEX",
      sub: "High Margin & Recurring",
      desc: "Combines high-margin initial turnkey automation deployment (CAPEX) with recurring IIoT sensor telemetry monitoring, diagnostics, and SLA maintenance (OPEX).",
      icon: IndianRupee,
      badge: "Scalable Model"
    },
    {
      title: "Hub Location Advantage",
      metric: "Coimbatore, TN",
      sub: "Industrial Automation Epicenter",
      desc: "Strategically located in Tamil Nadu's industrial manufacturing powerhouse, surrounded by thousands of textile, automotive, and precision engineering plants.",
      icon: Target,
      badge: "Strategic Base"
    }
  ];

  const growthPhases = [
    {
      phase: "Phase 1",
      title: "Specialized IIoT & Custom Automation Cells",
      focus: "Deploy custom sensor suites, PLC integrations, and IIoT gateways across tier-1 & tier-2 regional manufacturing plants.",
      status: "Active Deployment"
    },
    {
      phase: "Phase 2",
      title: "Proprietary Plug-and-Play IIoT Hardware",
      focus: "Standardize modular wireless sensor nodes and edge gateways designed for instant industrial zero-downtime installation.",
      status: "In Development"
    },
    {
      phase: "Phase 3",
      title: "Cloud Predictive Maintenance AI Platform",
      focus: "Scale subscription-based cloud analytics software predicting machine breakdowns using machine learning models.",
      status: "Expansion Vision"
    }
  ];

  return (
    <section id="investor" className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
      isDark ? 'bg-[#14161d] border-[#2e3342]' : 'bg-[#ebf7ff] border-blue-200/60'
    }`}>
      
      {/* Radial Background Accent */}
      <div className={`absolute top-1/3 right-0 w-[500px] h-[500px] blur-[140px] rounded-full pointer-events-none ${
        isDark ? 'bg-[#ffb700]/10' : 'bg-[#015CCF]/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono font-bold shadow-sm ${
            isDark 
              ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' 
              : 'bg-emerald-100 border-emerald-300 text-emerald-800'
          }`}>
            <TrendingUp className="w-3.5 h-3.5" />
            <span>INVESTOR PITCH HIGHLIGHTS</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Why Invest in <span className={isDark ? 'text-gradient-gold' : 'text-gradient-primary'}>YM Automation</span>?
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Positioned at the intersection of Mechatronics, Wireless Sensor Telemetry, and Industrial IoT, YM Automation is built for rapid enterprise scalability.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {investorPillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className={`rounded-3xl p-6 border transition-all flex flex-col justify-between space-y-4 ${
                  isDark 
                    ? 'bg-[#1e212b] hover:bg-[#242834] border-[#2e3342] hover:border-[#ffb700]/40 shadow-lg' 
                    : 'bg-white hover:bg-white border-blue-200/90 hover:border-[#015CCF]/40 shadow-md hover:shadow-xl'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl ${
                      isDark ? 'bg-[#ffb700]/15 text-[#ffb700] border border-[#ffb700]/30' : 'bg-[#015CCF]/10 text-[#015CCF]'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                      isDark 
                        ? 'bg-[#14161d] text-emerald-400 border-[#2e3342]' 
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <div className={`text-2xl font-black font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.metric}</div>
                    <div className={`text-xs font-mono font-bold ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>{item.sub}</div>
                  </div>

                  <h3 className={`text-base font-bold leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                </div>

                <div className={`pt-3 border-t text-[11px] font-mono flex items-center justify-between ${
                  isDark ? 'border-[#2e3342] text-slate-400' : 'border-slate-100 text-slate-500 font-medium'
                }`}>
                  <span>Investment Grade</span>
                  <span className={`font-bold ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>✓ Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Growth Roadmap & Investment Banner */}
        <div className={`rounded-3xl p-8 border space-y-8 mb-12 ${
          isDark 
            ? 'bg-[#1e212b] border-[#2e3342] shadow-2xl' 
            : 'bg-white/95 border-blue-200 shadow-xl shadow-blue-900/10'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 ${
            isDark ? 'border-[#2e3342]' : 'border-slate-100'
          }`}>
            <div>
              <span className={`text-xs font-mono uppercase tracking-widest font-bold ${
                isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'
              }`}>STRATEGIC GROWTH ROADMAP</span>
              <h3 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>Scaling Smart Industrial Infrastructure</h3>
            </div>

            <button
              onClick={onOpenInvestorModal}
              className={`px-5 py-3 rounded-xl font-bold text-xs shadow-lg transition-all flex items-center gap-2 ${
                isDark 
                  ? 'bg-gradient-to-r from-[#ffb700] to-amber-500 text-slate-950 shadow-[#ffb700]/20 font-extrabold' 
                  : 'bg-[#015CCF] hover:bg-[#014ea4] text-white shadow-[#015CCF]/20'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Get Full Financial Model</span>
            </button>
          </div>

          {/* 3 Phase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {growthPhases.map((phase, i) => (
              <div key={i} className={`p-6 rounded-2xl border space-y-3 relative ${
                isDark ? 'bg-[#14161d] border-[#2e3342]' : 'bg-blue-50/50 border-blue-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold border ${
                    isDark 
                      ? 'bg-[#ffb700]/15 text-[#ffb700] border-[#ffb700]/40' 
                      : 'bg-[#015CCF]/10 text-[#015CCF] border-[#015CCF]/30'
                  }`}>
                    {phase.phase}
                  </span>
                  <span className={`text-[10px] font-mono font-bold ${
                    isDark ? 'text-emerald-400' : 'text-emerald-700'
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{phase.title}</h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{phase.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Investor Call to Action Banner */}
        <div className={`relative rounded-3xl p-8 sm:p-10 border shadow-2xl overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-r from-[#1c1e26] via-[#242733] to-[#1e212b] border-[#ffb700]/40 text-white' 
            : 'bg-gradient-to-r from-[#015CCF] via-blue-700 to-blue-800 border-blue-400 text-white'
        }`}>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-left">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                isDark ? 'bg-[#ffb700]/20 text-[#ffb700] border-[#ffb700]/40' : 'bg-white/20 text-white border-white/30'
              }`}>
                SEED / EARLY STAGE CAPITAL DIALOGUE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Interested in Partnering or Investing in YM Automation?
              </h3>
              <p className={`text-sm max-w-2xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-blue-100'}`}>
                Connect directly with Founder & Managing Director Yogeshwaran Muralidharan to explore equity investment, commercial partnerships, or strategic advisory.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenInvestorModal}
                className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-xs text-center flex items-center justify-center gap-2 shadow-lg transition-all ${
                  isDark 
                    ? 'bg-[#ffb700] text-slate-950 hover:bg-[#ffa000] shadow-[#ffb700]/20' 
                    : 'bg-white text-[#015CCF] hover:bg-blue-50'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Request Investor Deck</span>
              </button>

              <a
                href="#contact"
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-xs text-center flex items-center justify-center gap-2 transition-all ${
                  isDark 
                    ? 'bg-[#14161d] border border-[#2e3342] hover:border-[#ffb700] text-slate-200' 
                    : 'bg-[#013e84] border border-blue-400 text-white hover:bg-[#04356c]'
                }`}
              >
                <Zap className={`w-4 h-4 ${isDark ? 'text-[#ffb700]' : 'text-cyan-300'}`} />
                <span>Schedule 1-on-1 Founder Call</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
