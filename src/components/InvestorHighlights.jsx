import React from 'react';
import { 
  Briefcase, 
  Target, 
  ShieldCheck, 
  Zap, 
  FileText, 
  Award, 
  CheckCircle2,
  Calendar,
  Building2,
  Cpu
} from 'lucide-react';

export default function InvestorHighlights({ onOpenResumeModal, theme }) {
  const isDark = theme === 'dark';

  const careerPillars = [
    {
      title: "50+ Telemetry Nodes Deployed",
      metric: "50+ Systems",
      sub: "Smart IIoT & Telemetry",
      desc: "Engineered and deployed high-reliability wireless telemetry gateways, vibration monitoring arrays, and environmental sensor nodes across manufacturing plants.",
      icon: Cpu,
      badge: "IIoT Telemetry"
    },
    {
      title: "L&T Endorsed Standards",
      metric: "L&T Certified",
      sub: "Heavy Automation Mastery",
      desc: "Rigorous certification in heavy industrial automation safety, motor control centers (MCC), variable frequency drives (VFD), and plant SCADA logic.",
      icon: Award,
      badge: "Industry Standard"
    },
    {
      title: "Multi-Disciplinary Mastery",
      metric: "Dual Degrees",
      sub: "B.E. Mechatronics + M.S. IoT",
      desc: "Synergistic domain knowledge spanning mechanical robotics, sensor hardware, microcontrollers, embedded firmware, and enterprise software integration.",
      icon: ShieldCheck,
      badge: "Quad Credentials"
    },
    {
      title: "End-to-End Leadership",
      metric: "Founder & MD",
      sub: "YM Automation Pvt Ltd",
      desc: "Hands-on experience directing technical projects from initial sensor selection and circuit design to on-site commissioning and live client delivery.",
      icon: Building2,
      badge: "Engineering Lead"
    }
  ];

  const workHistory = [
    {
      role: "Founder & Managing Director / Principal Automation Lead",
      company: "YM Automation Private Limited • Coimbatore, TN",
      period: "Aug 2020 – Present",
      status: "Active Leadership",
      responsibilities: [
        "Architected custom mechatronics cells, robotic pick-and-place automation, and pneumatic actuation systems for industrial clients.",
        "Programmed Siemens S7 & Rockwell Allen-Bradley PLCs, custom HMI screens, and SCADA monitoring networks.",
        "Built low-latency wireless IIoT gateways connecting shop-floor machinery (OPC-UA / MQTT) directly to enterprise IT analytics.",
        "Managed cross-disciplinary teams, project timelines, vendor relationships, and client technical support."
      ]
    },
    {
      role: "Industrial Automation & IIoT Solutions Specialist",
      company: "Industrial Automation Projects • India",
      period: "2018 – 2020",
      status: "Proven Execution",
      responsibilities: [
        "Executed plant automation audits and retrofitted legacy shop-floor machinery with modern sensory feedback loops.",
        "Implemented fail-safe emergency shutdown systems and calibrated high-precision analog/digital sensors.",
        "Designed custom Node-RED and Python telemetry scripts for real-time machine data visualization."
      ]
    },
    {
      role: "Mechatronics & Sensor Systems Engineer",
      company: "Academic & Specialized Research Institutions",
      period: "2015 – 2018",
      status: "Academic Foundation",
      responsibilities: [
        "Researched wireless sensor telemetry algorithms and embedded hardware prototyping (STM32 / ESP32).",
        "Earned B.E. Mechatronics, M.S. IoT & Sensor Systems, and Postgraduate Diploma in Industrial Automation with honors."
      ]
    }
  ];

  return (
    <section id="experience" className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER HIGHLIGHTS & WORK HISTORY</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Professional Experience & <span className={isDark ? 'text-gradient-gold' : 'text-gradient-primary'}>Impact Track Record</span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Proven engineering expertise bridging Mechatronics, IIoT Telemetry, PLC/SCADA Automation, and Technical Leadership.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {careerPillars.map((item, idx) => {
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
                  <span>Verified Competency</span>
                  <span className={`font-bold ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>✓ 100% Certified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Work Experience Timeline */}
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
              }`}>CAREER CHRONOLOGY</span>
              <h3 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>Professional Timeline & Responsibilities</h3>
            </div>

            <button
              onClick={onOpenResumeModal}
              className={`px-5 py-3 rounded-xl font-bold text-xs shadow-lg transition-all flex items-center gap-2 ${
                isDark 
                  ? 'bg-gradient-to-r from-[#ffb700] to-amber-500 text-slate-950 shadow-[#ffb700]/20 font-extrabold' 
                  : 'bg-[#015CCF] hover:bg-[#014ea4] text-white shadow-[#015CCF]/20'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume Summary</span>
            </button>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {workHistory.map((item, i) => (
              <div key={i} className={`p-6 rounded-2xl border space-y-4 ${
                isDark ? 'bg-[#14161d] border-[#2e3342]' : 'bg-blue-50/50 border-blue-200'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.role}</h4>
                    <p className={`text-xs font-mono font-bold ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>{item.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border flex items-center gap-1.5 ${
                      isDark ? 'bg-[#1e212b] text-slate-300 border-[#2e3342]' : 'bg-white text-slate-700 border-blue-200'
                    }`}>
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {item.responsibilities.map((resp, idx) => (
                    <div key={idx} className={`flex items-start gap-2 text-xs leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recruiter Call to Action Banner */}
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
                RECRUITER & LEADERSHIP INQUIRIES
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Looking for a Senior Mechatronics & IIoT Lead for your Team?
              </h3>
              <p className={`text-sm max-w-2xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-blue-100'}`}>
                Connect directly with Yogeshwaran to review detailed project portfolios, discuss technical requirements, or schedule an interview.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenResumeModal}
                className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-xs text-center flex items-center justify-center gap-2 shadow-lg transition-all ${
                  isDark 
                    ? 'bg-[#ffb700] text-slate-950 hover:bg-[#ffa000] shadow-[#ffb700]/20' 
                    : 'bg-white text-[#015CCF] hover:bg-blue-50'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>View Interactive Resume</span>
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
                <span>Contact Yogeshwaran Directly</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
