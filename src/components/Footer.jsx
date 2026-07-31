import React from 'react';
import { Cpu, ArrowUp, Linkedin, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer({ theme }) {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 relative transition-colors duration-300 ${
      isDark ? 'bg-[#070a12] border-slate-800 text-slate-400' : 'bg-white border-blue-200 text-slate-600 shadow-inner'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl p-0.5 shadow-md ${
                isDark ? 'bg-gradient-to-br from-cyan-500 to-blue-600' : 'bg-gradient-to-br from-[#015CCF] to-blue-600'
              }`}>
                <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                  isDark ? 'bg-[#090d16]' : 'bg-white'
                }`}>
                  <Cpu className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`} />
                </div>
              </div>
              <span className={`font-extrabold text-lg font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Yogeshwaran Muralidharan
              </span>
            </div>
            <p className={`text-xs max-w-md leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Managing Director of <strong className={isDark ? 'text-slate-200' : 'text-slate-900'}>YM Automation Private Limited</strong> (Coimbatore, India). Mechatronics B.E., M.S. IoT & Sensor Systems, PG Industrial Automation, L&T Certified Automation Engineer.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-xs font-mono font-bold">
            <a href="#about" className={`transition-colors ${isDark ? 'hover:text-cyan-400' : 'hover:text-[#015CCF]'}`}>About Founder</a>
            <a href="#venture" className={`transition-colors ${isDark ? 'hover:text-cyan-400' : 'hover:text-[#015CCF]'}`}>YM Venture</a>
            <a href="#investor" className={`transition-colors ${isDark ? 'hover:text-cyan-400' : 'hover:text-[#015CCF]'}`}>Investor Highlights</a>
            <a href="#tech" className={`transition-colors ${isDark ? 'hover:text-cyan-400' : 'hover:text-[#015CCF]'}`}>Tech Stack</a>
            <a href="#contact" className={`transition-colors ${isDark ? 'hover:text-cyan-400' : 'hover:text-[#015CCF]'}`}>Contact ZeptoMail</a>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className={`p-3 rounded-xl border transition-all flex items-center gap-2 text-xs font-mono font-bold ${
                isDark 
                  ? 'bg-slate-900 border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white' 
                  : 'bg-blue-50 border-blue-200 hover:border-[#015CCF] text-slate-700 hover:text-[#015CCF]'
              }`}
            >
              <span>Top</span>
              <ArrowUp className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`} />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
          isDark ? 'border-slate-900' : 'border-slate-100 font-medium'
        }`}>
          <p>© {new Date().getFullYear()} Yogeshwaran Muralidharan. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/yogeshwaranmuralidharan/" 
              target="_blank" 
              rel="noreferrer"
              className={`flex items-center gap-1 transition-colors font-bold ${
                isDark ? 'hover:text-cyan-400' : 'hover:text-[#015CCF]'
              }`}
            >
              <Linkedin className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://www.ymautomation.com/" 
              target="_blank" 
              rel="noreferrer"
              className={`flex items-center gap-1 transition-colors font-bold ${
                isDark ? 'hover:text-cyan-400' : 'hover:text-[#015CCF]'
              }`}
            >
              <ExternalLink className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`} />
              <span>ymautomation.com</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
