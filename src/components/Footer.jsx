import React from 'react';
import { Cpu, Linkedin, Globe, Mail, ArrowUp, Heart } from 'lucide-react';

export default function Footer({ theme }) {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isDark ? 'bg-[#111318] border-[#2e3342] text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3 text-left">
            <a href="#" className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl p-0.5 shadow-md flex items-center justify-center ${
                isDark ? 'bg-gradient-to-br from-[#ffb700] to-amber-600' : 'bg-gradient-to-br from-[#015CCF] to-blue-600'
              }`}>
                <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                  isDark ? 'bg-[#14161d]' : 'bg-white'
                }`}>
                  <Cpu className={`w-4 h-4 ${isDark ? 'text-[#ffb700]' : 'text-[#015CCF]'}`} />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Yogeshwaran Muralidharan
              </span>
            </a>
            <p className="text-xs leading-relaxed max-w-sm text-slate-400 font-medium">
              Senior Mechatronics Lead & Founder at <strong className="text-slate-200">YM Automation Private Limited</strong>. Specialized in Mechatronics, IIoT Sensor Telemetry, PLC/SCADA Control, and Industrial Automation.
            </p>
            <p className={`text-[11px] font-mono font-semibold ${isDark ? 'text-[#ffb700]' : 'text-cyan-400'}`}>
              Coimbatore, Tamil Nadu, India • Open for Opportunities
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold">
            <a href="#about" className={`transition-colors ${isDark ? 'hover:text-[#ffb700]' : 'hover:text-cyan-400'}`}>About Me</a>
            <a href="#venture" className={`transition-colors ${isDark ? 'hover:text-[#ffb700]' : 'hover:text-cyan-400'}`}>Systems Built</a>
            <a href="#experience" className={`transition-colors ${isDark ? 'hover:text-[#ffb700]' : 'hover:text-cyan-400'}`}>Career Experience</a>
            <a href="#tech" className={`transition-colors ${isDark ? 'hover:text-[#ffb700]' : 'hover:text-cyan-400'}`}>Tech Stack</a>
            <a href="#contact" className={`transition-colors ${isDark ? 'hover:text-[#ffb700]' : 'hover:text-cyan-400'}`}>Contact Yogeshwaran</a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href="https://www.linkedin.com/in/yogeshwaranmuralidharan/"
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark 
                  ? 'bg-[#1e212b] border-[#2e3342] text-slate-300 hover:text-[#ffb700] hover:border-[#ffb700]' 
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400'
              }`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://www.ymautomation.com/"
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark 
                  ? 'bg-[#1e212b] border-[#2e3342] text-slate-300 hover:text-[#ffb700] hover:border-[#ffb700]' 
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400'
              }`}
              aria-label="YM Automation Portal"
            >
              <Globe className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark 
                  ? 'bg-[#1e212b] border-[#2e3342] text-slate-300 hover:text-[#ffb700] hover:border-[#ffb700]' 
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400'
              }`}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`mt-8 pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono gap-4 ${
          isDark ? 'border-[#2e3342] text-slate-500' : 'border-slate-800 text-slate-500'
        }`}>
          <p>© {new Date().getFullYear()} Yogeshwaran Muralidharan • YM Automation Private Limited. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built for Recruiters, Talent Acquisition Leads & Engineering Executives</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
