import React, { useState } from 'react';
import { X, FileText, CheckCircle2, Download, ShieldCheck, Sparkles, Briefcase, GraduationCap, Mail, Phone, ExternalLink } from 'lucide-react';

export default function InvestorModal({ isOpen, onClose, theme }) {
  const [copied, setCopied] = useState(false);
  const isDark = theme === 'dark';

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const summary = `Yogeshwaran Muralidharan - Senior Mechatronics & IIoT Systems Lead
Qualifications: B.E. Mechatronics, M.S. IoT & Sensor Systems, PG Industrial Automation, L&T Certified Automation Engineer.
Current Role: Founder & Managing Director, YM Automation Pvt Ltd.
Specializations: Mechatronic Cell Architecture, Wireless IIoT Sensor Gateways, Siemens/Rockwell PLC SCADA, IT-OT Telemetry.
Location: Coimbatore, Tamil Nadu, India (Open to technical leadership roles & relocation).
Website: https://www.ymautomation.com/
LinkedIn: https://www.linkedin.com/in/yogeshwaranmuralidharan/`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md animate-fadeIn overflow-y-auto ${
      isDark ? 'bg-slate-950/85' : 'bg-slate-900/65'
    }`}>
      
      {/* Modal Card */}
      <div className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 border shadow-2xl space-y-6 my-auto max-h-[90vh] overflow-y-auto ${
        isDark 
          ? 'bg-[#1e212b] border-[#2e3342] text-slate-100 shadow-black/80' 
          : 'bg-white border-blue-200 text-slate-900 shadow-blue-900/30'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-xl border transition-colors z-10 ${
            isDark 
              ? 'bg-[#14161d] text-slate-400 hover:text-white border-[#2e3342]' 
              : 'bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 border-slate-200'
          }`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8 border-b pb-4 border-slate-200/20">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-bold ${
            isDark 
              ? 'bg-[#ffb700]/15 border-[#ffb700]/40 text-[#ffb700]' 
              : 'bg-[#015CCF]/10 border-[#015CCF]/30 text-[#015CCF]'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>CANDIDATE CURRICULUM VITAE</span>
          </div>
          <h3 className={`text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Yogeshwaran Muralidharan
          </h3>
          <p className={`text-xs font-mono font-bold ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`}>
            Senior Mechatronics & IIoT Lead | Founder @ YM Automation Pvt Ltd
          </p>
        </div>

        {/* Executive Summary */}
        <div className="space-y-3">
          <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Executive Summary
          </h4>
          <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Multi-disciplinary Mechatronics Engineer & Industrial IoT Specialist with dual degrees (B.E. Mechatronics, M.S. IoT & Sensor Systems) and certification as an <strong className={isDark ? 'text-white' : 'text-slate-900'}>L&T Certified Automation Engineer</strong>. Proven experience architecting 50+ IIoT telemetry nodes, custom mechatronic cells, and Siemens/Rockwell PLC SCADA systems for industrial manufacturing clients across Tamil Nadu.
          </p>
        </div>

        {/* Verified Academic & Professional Qualifications */}
        <div className="space-y-3">
          <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Degrees & Endorsements
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className={`p-3 rounded-xl border text-xs ${isDark ? 'bg-[#14161d] border-[#2e3342]' : 'bg-blue-50/70 border-blue-200'}`}>
              <div className="font-bold">B.E. Mechatronics Engineering</div>
              <div className="text-[11px] text-slate-500 font-mono">Core Robotics & Control Systems</div>
            </div>
            <div className={`p-3 rounded-xl border text-xs ${isDark ? 'bg-[#14161d] border-[#2e3342]' : 'bg-blue-50/70 border-blue-200'}`}>
              <div className="font-bold">M.S. IoT & Sensor Systems</div>
              <div className="text-[11px] text-slate-500 font-mono">IIoT Telemetry & Wireless Networks</div>
            </div>
            <div className={`p-3 rounded-xl border text-xs ${isDark ? 'bg-[#14161d] border-[#2e3342]' : 'bg-blue-50/70 border-blue-200'}`}>
              <div className="font-bold">PG Industrial Automation</div>
              <div className="text-[11px] text-slate-500 font-mono">PLC, SCADA & HMI Infrastructure</div>
            </div>
            <div className={`p-3 rounded-xl border text-xs ${isDark ? 'bg-[#14161d] border-emerald-500/30' : 'bg-emerald-50 border-emerald-200'}`}>
              <div className={`font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-800'}`}>L&T Certified Automation Eng.</div>
              <div className="text-[11px] text-slate-500 font-mono">Larsen & Toubro Verified</div>
            </div>
          </div>
        </div>

        {/* Technical Core Competencies */}
        <div className="space-y-3">
          <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Core Technical Skills
          </h4>
          <div className="flex flex-wrap gap-1.5 text-xs font-mono">
            {["Mechatronics", "IIoT Telemetry", "Siemens S7", "Rockwell Allen-Bradley", "SCADA / HMI", "MQTT / OPC-UA", "Node-RED", "Python Telemetry", "VFD & MCC Panels", "Robotic Kinematics", "Pneumatics", "L&T Safety Standards"].map((skill, idx) => (
              <span key={idx} className={`px-2.5 py-1 rounded-lg border ${
                isDark ? 'bg-[#14161d] border-[#2e3342] text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800 font-medium'
              }`}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200/20 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleCopySummary}
            className={`w-full sm:w-auto flex-1 py-3 px-4 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 ${
              isDark 
                ? 'bg-gradient-to-r from-[#ffb700] to-amber-500 text-slate-950 hover:brightness-110' 
                : 'bg-[#015CCF] text-white hover:bg-[#014ea4]'
            }`}
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Profile Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <FileText className="w-4 h-4" />
                <span>Copy Quick Profile Summary</span>
              </>
            )}
          </button>

          <a
            href="#contact"
            onClick={onClose}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              isDark 
                ? 'bg-[#14161d] border-[#2e3342] text-slate-200 hover:text-white hover:border-[#ffb700]' 
                : 'bg-slate-100 border-slate-200 text-slate-800 hover:text-[#015CCF]'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Send Direct Message</span>
          </a>
        </div>

        <div className={`flex items-center justify-center gap-1.5 text-[11px] font-mono font-medium ${
          isDark ? 'text-slate-500' : 'text-slate-500'
        }`}>
          <ShieldCheck className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
          <span>Verified Candidate Profile • Yogeshwaran Muralidharan</span>
        </div>

      </div>

    </div>
  );
}
