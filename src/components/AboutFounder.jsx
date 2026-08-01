import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  Cpu, 
  Compass, 
  CheckCircle, 
  Sparkles, 
  Settings,
  Target
} from 'lucide-react';

export default function AboutFounder({ theme }) {
  const isDark = theme === 'dark';

  const educationList = [
    {
      degree: "Master's Degree in IoT and Sensor Systems",
      institution: "Specialized Advanced Engineering",
      focus: "Industrial IoT Edge Computing, Wireless Sensor Networks, Embedded Hardware & Data Telemetry.",
      tag: "Postgraduate Master's",
      icon: Cpu
    },
    {
      degree: "Postgraduate in Industrial Automation",
      institution: "Advanced Automation Institute",
      focus: "Siemens/Rockwell PLC programming, SCADA infrastructure, HMI interfaces, and Motion Control.",
      tag: "Advanced Specialization",
      icon: Settings
    },
    {
      degree: "Bachelor's Degree in Mechatronics",
      institution: "Bachelor of Engineering",
      focus: "Synergistic integration of Mechanical Engineering, Electronics, Computer Control, and Robotics.",
      tag: "Core Engineering",
      icon: GraduationCap
    },
    {
      degree: "L&T Certified Automation Engineer",
      institution: "Larsen & Toubro Certified Program",
      focus: "Rigorous industrial validation in heavy automation standards, power control, and plant deployment.",
      tag: "Industry Standard Certification",
      icon: Award
    }
  ];

  const experiencePoints = [
    "Diverse hands-on experience working directly with top-tier Industrial Automation corporations across India.",
    "Engineered complex PLC-SCADA architectures, sensory feedback loops, and automated assembly line cells.",
    "Architected end-to-end IIoT data pipelines connecting shop-floor machinery directly to cloud enterprise software.",
    "Pioneered high-precision mechatronics solutions designed to minimize industrial downtime and maximize operational safety."
  ];

  return (
    <section id="about" className={`py-24 relative overflow-hidden border-t border-b transition-colors duration-300 ${
      isDark ? 'bg-[#14161d] border-[#2e3342]' : 'bg-[#ebf7ff] border-blue-200/60'
    }`}>
      
      {/* Ambient background glow */}
      <div className={`absolute top-1/2 left-0 w-96 h-96 blur-[120px] rounded-full pointer-events-none ${
        isDark ? 'bg-[#ffb700]/10' : 'bg-[#015CCF]/10'
      }`} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffb700]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono font-bold shadow-sm ${
            isDark 
              ? 'bg-[#ffb700]/15 border-[#ffb700]/40 text-[#ffb700]' 
              : 'bg-white border-[#015CCF]/30 text-[#015CCF]'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>FOUNDER PROFILE & CREDENTIALS</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-sans ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            The Mastermind Behind <span className={isDark ? 'text-gradient-gold' : 'text-gradient-primary'}>YM Automation</span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Yogeshwaran Muralidharan combines academic mastery with deep industrial execution experience to build future-ready mechatronics and IoT infrastructure.
          </p>
        </div>

        {/* Story & Background Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: Vision & Leadership */}
          <div className={`lg:col-span-7 rounded-3xl p-8 border flex flex-col justify-between space-y-6 ${
            isDark 
              ? 'bg-[#1e212b] border-[#2e3342] shadow-2xl' 
              : 'bg-white/90 border-blue-200 shadow-xl shadow-blue-900/5'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl border ${
                  isDark ? 'bg-[#ffb700]/15 text-[#ffb700] border-[#ffb700]/30' : 'bg-[#015CCF]/10 text-[#015CCF] border-[#015CCF]/20'
                }`}>
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Engineering Excellence & Entrepreneurial Drive</h3>
                  <p className={`text-xs font-mono font-bold ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>Managing Director, YM Automation Pvt Ltd</p>
                </div>
              </div>

              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Yogeshwaran Muralidharan is a young techie who earned his Bachelor's in Mechatronics and subsequently pursued a Master's in IoT and Sensor Systems. Recognized for his technical depth, he completed a Postgraduate program in Industrial Automation and earned prestigious certification as an <strong className={isDark ? 'text-white font-bold' : 'text-slate-900 font-bold'}>L&T Certified Automation Engineer</strong>.
              </p>

              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Before founding YM Automation, Yogeshwaran accumulated extensive practical experience working alongside top-notch industrial automation organizations. Harnessing this multi-disciplinary expertise, his mastermind birthed YM Automation Private Limited—an active, pioneer venture dedicated to bridging hardware, sensors, and intelligent software for modern smart manufacturing.
              </p>
            </div>

            {/* Experience Checklist */}
            <div className={`space-y-3 pt-4 border-t ${isDark ? 'border-[#2e3342]' : 'border-slate-100'}`}>
              <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Industrial Track Record</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {experiencePoints.map((point, index) => (
                  <div key={index} className={`flex items-start gap-2 text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Certified Badge Showcase */}
          <div className={`lg:col-span-5 rounded-3xl p-8 border flex flex-col justify-between space-y-6 ${
            isDark 
              ? 'bg-[#1e212b] border-[#2e3342] shadow-2xl' 
              : 'bg-white/90 border-blue-200 shadow-xl shadow-blue-900/5'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl border ${
                  isDark ? 'bg-[#ffb700]/15 text-[#ffb700] border-[#ffb700]/30' : 'bg-blue-100 text-[#015CCF] border-blue-200'
                }`}>
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Certifications & Honors</h3>
                  <p className={`text-xs font-mono font-bold ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>Industrial Endorsement</p>
                </div>
              </div>

              <div className={`p-5 rounded-2xl border space-y-3 ${
                isDark 
                  ? 'bg-[#14161d] border-[#2e3342]' 
                  : 'bg-gradient-to-br from-blue-50 via-white to-blue-100/50 border-blue-200 shadow-inner'
              }`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>LARSEN & TOUBRO</span>
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold border ${
                    isDark ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                  }`}>Verified Credentials</span>
                </div>
                <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>L&T Certified Automation Engineer</h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Certified by Larsen & Toubro's premier automation division, reflecting mastery in industrial safety protocols, motor control centers, drive systems, and heavy industrial automation deployments.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className={`p-4 rounded-xl border text-center ${
                  isDark ? 'bg-[#14161d] border-[#2e3342]' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`text-2xl font-extrabold font-mono ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>B.E. + M.S.</div>
                  <div className={`text-[11px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>Dual Technical Degrees</div>
                </div>
                <div className={`p-4 rounded-xl border text-center ${
                  isDark ? 'bg-[#14161d] border-[#2e3342]' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`text-2xl font-extrabold font-mono ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>4+ Domains</div>
                  <div className={`text-[11px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>Mechatronics, IoT, PLC, Sensors</div>
                </div>
              </div>

            </div>

            <div className={`p-4 rounded-xl border flex items-center justify-between text-xs font-mono ${
              isDark ? 'bg-[#14161d] border-[#2e3342]' : 'bg-blue-50 border-blue-200'
            }`}>
              <span className={isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}>COMPANY REGISTRATION</span>
              <span className={`font-bold ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>Coimbatore, Tamil Nadu</span>
            </div>

          </div>

        </div>

        {/* Education Timeline Grid */}
        <div className="space-y-6">
          <h3 className={`text-xl font-bold text-center font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Academic Foundation & Specializations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationList.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={index}
                  className={`rounded-2xl p-6 border transition-all space-y-4 flex flex-col justify-between ${
                    isDark 
                      ? 'bg-[#1e212b] hover:bg-[#242834] border-[#2e3342] hover:border-[#ffb700]/40 shadow-lg' 
                      : 'bg-white/90 hover:bg-white border-blue-200/80 hover:border-[#015CCF]/40 shadow-md hover:shadow-xl'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl border ${
                        isDark ? 'bg-[#ffb700]/15 text-[#ffb700] border-[#ffb700]/30' : 'bg-[#015CCF]/10 text-[#015CCF] border-[#015CCF]/20'
                      }`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                        isDark ? 'bg-[#14161d] text-[#ffb700] border-[#2e3342]' : 'bg-blue-50 text-[#015CCF] border-blue-200'
                      }`}>
                        {item.tag}
                      </span>
                    </div>

                    <h4 className={`text-base font-bold leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.degree}
                    </h4>

                    <p className={`text-xs font-mono font-bold ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>
                      {item.institution}
                    </p>

                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.focus}
                    </p>
                  </div>

                  <div className={`pt-3 border-t text-[11px] font-mono flex items-center gap-1.5 ${
                    isDark ? 'border-[#2e3342] text-slate-300' : 'border-slate-100 text-slate-700 font-medium'
                  }`}>
                    <CheckCircle className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <span>Completed & Endorsed</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
