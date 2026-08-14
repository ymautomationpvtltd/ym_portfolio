import React, { useState } from 'react';
import { 
  Building2, 
  Cpu, 
  Wifi, 
  Activity, 
  MonitorCheck, 
  Radio, 
  Layers, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Server,
  Workflow
} from 'lucide-react';

export default function VentureShowcase({ theme }) {
  const [activeTab, setActiveTab] = useState(0);
  const isDark = theme === 'dark';

  const venturePillars = [
    {
      id: "iiot",
      title: "IIoT & Edge Sensor Networks",
      subtitle: "Smart Shop-Floor Telemetry",
      description: "Custom sensor deployment measuring temperature, vibration, energy consumption, and pneumatic pressures with wireless edge gateways transmitting high-frequency industrial telemetry.",
      features: [
        "Multi-sensor array integration",
        "Edge data preprocessing & filtering",
        "Low-latency MQTT & OPC-UA protocols",
        "Real-time anomaly detection"
      ],
      icon: Wifi,
      color: isDark ? "from-[#ffb700] to-amber-600" : "from-[#015CCF] to-blue-500"
    },
    {
      id: "mechatronics",
      title: "Mechatronic Engineering & Robotics",
      subtitle: "Custom Automation Machinery",
      description: "Precision robotics cell design, pneumatic/hydraulic actuation, pick-and-place gantry systems, and custom automated jigs crafted specifically for high-throughput manufacturing lines.",
      features: [
        "Multi-axis motion control",
        "Pneumatic & Servo integration",
        "Robotic end-of-arm tooling",
        "Automated optical alignment"
      ],
      icon: Cpu,
      color: isDark ? "from-amber-500 to-[#ffb700]" : "from-blue-600 to-indigo-600"
    },
    {
      id: "plc",
      title: "PLC & SCADA Architecture",
      subtitle: "Heavy Industrial Control",
      description: "Robust programmable logic controller logic, safety interlocks, human-machine interfaces (HMI), and plant-wide supervisory control and data acquisition systems.",
      features: [
        "L&T / Siemens / Allen-Bradley PLCs",
        "Custom HMI dashboard design",
        "Fail-safe emergency shutdown systems",
        "Historical trend logging & alarm management"
      ],
      icon: Activity,
      color: isDark ? "from-[#ffb700] to-yellow-600" : "from-indigo-600 to-blue-700"
    },
    {
      id: "itot",
      title: "IT-OT Convergence & Analytics",
      subtitle: "Factory to Cloud Data Bridge",
      description: "Seamless bridge connecting shop-floor Operational Technology (OT) hardware directly to Enterprise IT software (ERP, MES, and predictive analytics dashboards).",
      features: [
        "Secure IT-OT firewalls & gateways",
        "Predictive maintenance models",
        "Overall Equipment Effectiveness (OEE) tracking",
        "Executive KPI visualizer"
      ],
      icon: Server,
      color: isDark ? "from-emerald-500 to-[#ffb700]" : "from-emerald-600 to-[#015CCF]"
    }
  ];

  const architectureSteps = [
    { name: "1. Sensor Layer", desc: "Vibration, Thermal & Current Sensors", status: "Active Real-Time", icon: Radio, color: isDark ? "border-[#ffb700] text-[#ffb700]" : "border-[#015CCF] text-[#015CCF]" },
    { name: "2. Edge PLC / Micro", desc: "Siemens/Rockwell Logic Controllers", status: "Sub-millisecond", icon: Cpu, color: isDark ? "border-amber-400 text-amber-400" : "border-blue-600 text-blue-600" },
    { name: "3. IIoT Gateway", desc: "OPC-UA & MQTT Security Bus", status: "Encrypted Stream", icon: Wifi, color: isDark ? "border-[#ffb700] text-[#ffb700]" : "border-indigo-600 text-indigo-600" },
    { name: "4. Cloud Analytics", desc: "OEE, Predictive Insights & Alerts", status: "Live Dashboard", icon: MonitorCheck, color: isDark ? "border-emerald-400 text-emerald-400" : "border-emerald-600 text-emerald-600" },
  ];

  return (
    <section id="venture" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#14161d]' : 'bg-[#ebf7ff]'
    }`}>
      
      {/* Background Mesh */}
      <div className={`absolute inset-0 bg-grid-mesh pointer-events-none ${isDark ? 'opacity-40' : 'opacity-50'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono font-bold shadow-sm ${
            isDark ? 'bg-[#ffb700]/15 border-[#ffb700]/40 text-[#ffb700]' : 'bg-white border-[#015CCF]/30 text-[#015CCF]'
          }`}>
            <Building2 className="w-3.5 h-3.5" />
            <span>ENGINEERING PROJECTS & SYSTEMS BUILT</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Enterprise Systems & Industrial Solutions
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Key industrial solutions engineered and deployed under YM Automation Pvt Ltd (Coimbatore, Tamil Nadu), delivering mechatronics, IIoT telemetry, and smart factory control.
          </p>
        </div>

        {/* Company Quick Facts Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className={`p-5 rounded-2xl border text-center space-y-1 ${
            isDark ? 'bg-[#1e212b] border-[#2e3342] shadow-md' : 'bg-white border-blue-200 shadow-sm'
          }`}>
            <p className={`text-[11px] font-mono uppercase font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Entity Status</p>
            <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Active Pvt Ltd</p>
            <p className={`text-[10px] font-mono font-bold ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>Inc. Aug 31, 2020</p>
          </div>

          <div className={`p-5 rounded-2xl border text-center space-y-1 ${
            isDark ? 'bg-[#1e212b] border-[#2e3342] shadow-md' : 'bg-white border-blue-200 shadow-sm'
          }`}>
            <p className={`text-[11px] font-mono uppercase font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Headquarters</p>
            <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Coimbatore</p>
            <p className={`text-[10px] font-mono font-bold ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>Tamil Nadu, India</p>
          </div>

          <div className={`p-5 rounded-2xl border text-center space-y-1 ${
            isDark ? 'bg-[#1e212b] border-[#2e3342] shadow-md' : 'bg-white border-blue-200 shadow-sm'
          }`}>
            <p className={`text-[11px] font-mono uppercase font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>My Role</p>
            <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Yogeshwaran M.</p>
            <p className={`text-[10px] font-mono font-bold ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>Founder & MD</p>
          </div>

          <div className={`p-5 rounded-2xl border text-center space-y-1 ${
            isDark ? 'bg-[#1e212b] border-[#2e3342] shadow-md' : 'bg-white border-blue-200 shadow-sm'
          }`}>
            <p className={`text-[11px] font-mono uppercase font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Domain</p>
            <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Mechatronics & IIoT</p>
            <p className={`text-[10px] font-mono font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Industry 4.0 Solutions</p>
          </div>
        </div>

        {/* Interactive Technological Offerings Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Left Side: Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className={`text-xs font-mono uppercase tracking-wider font-bold mb-2 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Our Core Technical Offerings
            </h3>

            {venturePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between group ${
                    isSelected 
                      ? isDark 
                        ? 'bg-[#1e212b] border-[#ffb700] shadow-lg shadow-[#ffb700]/15' 
                        : 'bg-white border-[#015CCF] shadow-lg shadow-[#015CCF]/15'
                      : isDark
                        ? 'bg-[#1e212b]/60 border-[#2e3342] hover:bg-[#1e212b] hover:border-slate-700'
                        : 'bg-white/60 border-blue-200/80 hover:bg-white hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${isDark ? 'text-slate-950 font-bold bg-[#ffb700]' : 'text-white bg-gradient-to-br from-[#015CCF] to-blue-500'} shadow-md`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold transition-colors ${
                        isSelected 
                          ? isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'
                          : isDark ? 'text-white group-hover:text-[#ffb700]' : 'text-slate-900 group-hover:text-[#015CCF]'
                      }`}>
                        {pillar.title}
                      </h4>
                      <p className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isSelected 
                      ? isDark ? 'text-[#ffb700] translate-x-1' : 'text-[#015CCF] translate-x-1' 
                      : isDark ? 'text-slate-600' : 'text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Side: Selected Detail Card */}
          <div className="lg:col-span-7">
            {venturePillars[activeTab] && (
              <div className={`rounded-3xl p-8 border space-y-6 relative overflow-hidden ${
                isDark 
                  ? 'bg-[#1e212b] border-[#2e3342] shadow-2xl' 
                  : 'bg-white/95 border-blue-200 shadow-xl shadow-blue-900/10'
              }`}>
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${venturePillars[activeTab].color} opacity-10 blur-3xl rounded-full pointer-events-none`} />

                <div className={`flex items-center justify-between border-b pb-4 ${
                  isDark ? 'border-[#2e3342]' : 'border-slate-100'
                }`}>
                  <div>
                    <span className={`text-xs font-mono uppercase tracking-widest font-extrabold ${
                      isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'
                    }`}>
                      CAPABILITY 0{activeTab + 1}
                    </span>
                    <h3 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {venturePillars[activeTab].title}
                    </h3>
                  </div>
                  <div className={`p-3 rounded-2xl border ${
                    isDark ? 'bg-[#ffb700]/15 text-[#ffb700] border-[#ffb700]/30' : 'bg-[#015CCF]/10 text-[#015CCF] border-[#015CCF]/20'
                  }`}>
                    {React.createElement(venturePillars[activeTab].icon, { className: "w-6 h-6" })}
                  </div>
                </div>

                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {venturePillars[activeTab].description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className={`text-xs font-mono uppercase font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Key Implementation Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {venturePillars[activeTab].features.map((feat, i) => (
                      <div key={i} className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-medium ${
                        isDark 
                          ? 'bg-[#14161d] border-[#2e3342] text-slate-200' 
                          : 'bg-blue-50/60 border-blue-100 text-slate-800'
                      }`}>
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`pt-4 border-t flex items-center justify-between text-xs font-mono ${
                  isDark ? 'border-[#2e3342]' : 'border-slate-100'
                }`}>
                  <span className={isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}>Deployed with Industrial Precision</span>
                  <span className={isDark ? 'text-emerald-400 font-bold' : 'text-emerald-600 font-bold'}>L&T Certified Standards</span>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Live Industrial Architecture visualizer */}
        <div className={`rounded-3xl p-8 border space-y-6 ${
          isDark 
            ? 'bg-[#1e212b] border-[#2e3342] shadow-2xl' 
            : 'bg-white/95 border-blue-200 shadow-xl shadow-blue-900/10'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl border ${
                isDark ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' : 'bg-emerald-100 text-emerald-700 border-emerald-300'
              }`}>
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>My End-to-End Industrial Architecture Flow</h3>
                <p className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>How YM Automation powers smart factory connectivity</p>
              </div>
            </div>
            <span className={`hidden sm:inline-flex px-3 py-1 rounded-full border text-xs font-mono font-bold ${
              isDark ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' : 'bg-emerald-100 text-emerald-800 border-emerald-300'
            }`}>
              Live Topology
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {architectureSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className={`relative p-5 rounded-2xl border space-y-3 ${
                  isDark ? 'bg-[#14161d] border-[#2e3342]' : 'bg-blue-50/40 border-blue-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-xl border ${step.color} ${isDark ? 'bg-[#1e212b]' : 'bg-white'}`}>
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>STAGE {idx+1}</span>
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{step.name}</h4>
                    <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{step.desc}</p>
                  </div>
                  <div className={`pt-2 border-t flex items-center justify-between text-[10px] font-mono ${
                    isDark ? 'border-[#2e3342]' : 'border-blue-100'
                  }`}>
                    <span className="text-slate-500">Latency:</span>
                    <span className={`font-bold ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>{step.status}</span>
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
