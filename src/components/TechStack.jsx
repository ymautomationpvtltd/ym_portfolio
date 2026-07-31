import React, { useState } from 'react';
import { 
  Cpu, 
  Settings, 
  Wifi, 
  Award, 
  Code2, 
  Terminal, 
  CheckCircle2, 
  Radio, 
  ShieldCheck 
} from 'lucide-react';

export default function TechStack({ theme }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const isDark = theme === 'dark';

  const categories = [
    { id: "all", label: "All Technical Domains" },
    { id: "mechatronics", label: "Mechatronics & Hardware" },
    { id: "iiot", label: "IIoT & Sensor Systems" },
    { id: "automation", label: "PLC & SCADA Control" },
    { id: "standards", label: "L&T & Industrial Standards" },
  ];

  const skills = [
    {
      name: "Mechatronic System Integration",
      category: "mechatronics",
      level: "Mastery",
      desc: "Synergistic mechanical-electrical design, pneumatic actuation, servo drive tuning, and robotic cell control.",
      tags: ["Kinematics", "Pneumatics", "Robotics", "Servo Motors"],
      icon: Cpu
    },
    {
      name: "Wireless Industrial Sensors & IoT",
      category: "iiot",
      level: "Advanced (M.S. Specialized)",
      desc: "Architecting sensor arrays (vibration, thermal, pressure) with wireless edge gateways & microcontrollers.",
      tags: ["MQTT", "OPC-UA", "LoRaWAN", "Modbus RTU/TCP"],
      icon: Wifi
    },
    {
      name: "PLC & SCADA Programming",
      category: "automation",
      level: "Expert (PG Specialization)",
      desc: "Siemens S7, Rockwell Allen-Bradley, and Schneider PLC ladder logic, FBD, ST programming, and HMI SCADA screens.",
      tags: ["Ladder Logic", "Siemens TIA", "SCADA HMI", "Structured Text"],
      icon: Settings
    },
    {
      name: "L&T Automation Standards",
      category: "standards",
      level: "L&T Endorsed",
      desc: "Heavy industrial automation safety protocols, motor control centers (MCC), variable frequency drives (VFD).",
      tags: ["L&T Certified", "VFD Tuning", "MCC Panels", "Plant Safety"],
      icon: Award
    },
    {
      name: "Smart Factory IT-OT Gateway",
      category: "iiot",
      level: "Expert",
      desc: "Bridging physical sensor readings to cloud databases, REST APIs, Node-RED, and live monitoring dashboards.",
      tags: ["Node-RED", "Python Telemetry", "InfluxDB", "Grafana"],
      icon: Terminal
    },
    {
      name: "Embedded Systems & Microcontrollers",
      category: "mechatronics",
      level: "Advanced",
      desc: "Custom PCB design, ESP32/STM32 firmware development, analog sensor calibration, and signal conditioning.",
      tags: ["STM32", "ESP32", "C/C++ Firmware", "PCB Layout"],
      icon: Code2
    }
  ];

  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="tech" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#090d16]' : 'bg-[#ebf7ff]'
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono font-bold shadow-sm ${
            isDark ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-white border-[#015CCF]/30 text-[#015CCF]'
          }`}>
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING COMPETENCIES</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Technical Stack & Core Skills
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Engineered through rigorous academics (B.E. Mechatronics, M.S. IoT, PG Automation) and validated by top industrial experience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                selectedCategory === cat.id
                  ? isDark
                    ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'bg-[#015CCF] text-white font-bold border-[#015CCF] shadow-md shadow-[#015CCF]/20'
                  : isDark
                    ? 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                    : 'bg-white text-slate-700 border-blue-200 hover:text-[#015CCF] hover:border-blue-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComp = skill.icon;
            return (
              <div 
                key={index}
                className={`rounded-2xl p-6 border transition-all space-y-4 flex flex-col justify-between ${
                  isDark 
                    ? 'glass-card glass-card-hover border-slate-800' 
                    : 'bg-white/90 hover:bg-white border-blue-200 hover:border-[#015CCF]/40 shadow-md hover:shadow-xl'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl border ${
                      isDark ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' : 'bg-[#015CCF]/10 text-[#015CCF]'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${
                      isDark 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      {skill.level}
                    </span>
                  </div>

                  <h3 className={`text-base font-bold leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {skill.name}
                  </h3>

                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {skill.desc}
                  </p>
                </div>

                <div className={`space-y-3 pt-3 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-100'}`}>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((t, i) => (
                      <span key={i} className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                        isDark 
                          ? 'bg-slate-900 text-slate-300 border-slate-800' 
                          : 'bg-blue-50 text-slate-700 border-blue-100 font-medium'
                      }`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
