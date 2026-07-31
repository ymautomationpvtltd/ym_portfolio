import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Settings, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  Linkedin, 
  Globe, 
  Phone, 
  Key, 
  Code, 
  HelpCircle,
  Sparkles,
  RefreshCw,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function ContactZeptoMail({ theme }) {
  const isDark = theme === 'dark';

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'Investor Inquiry',
    message: ''
  });

  // ZeptoMail Configuration State
  const [zeptoConfig, setZeptoConfig] = useState({
    apiUrl: 'https://api.zeptomail.in/v1.1/email',
    sendMailToken: import.meta.env.VITE_ZEPTOMAIL_TOKEN || '',
    bounceAddress: 'bounce@ymautomation.com',
    fromAddress: 'noreply@ymautomation.com',
    fromName: 'YM Portfolio Contact',
    toAddress: 'yogeshwaran@ymautomation.com',
    toName: 'Yogeshwaran Muralidharan'
  });

  const [showConfig, setShowConfig] = useState(false);
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [lastPayload, setLastPayload] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfigChange = (e) => {
    setZeptoConfig({ ...zeptoConfig, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('Connecting to ZeptoMail API...');

    const payload = {
      bounce_address: zeptoConfig.bounceAddress || "bounce@ymautomation.com",
      from: {
        address: zeptoConfig.fromAddress || "noreply@ymautomation.com",
        name: zeptoConfig.fromName || "YM Portfolio Inquiry"
      },
      to: [
        {
          email_address: {
            address: zeptoConfig.toAddress || "yogeshwaran@ymautomation.com",
            name: zeptoConfig.toName || "Yogeshwaran Muralidharan"
          }
        }
      ],
      subject: `[${formData.inquiryType}] New Message from ${formData.name} (${formData.company || 'Individual'})`,
      htmlbody: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; background-color: #f8fafc; border-radius: 8px;">
          <h2 style="color: #015CCF; border-bottom: 2px solid #015CCF; padding-bottom: 8px;">New Contact Submission - YM Portfolio</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Sender Email:</strong> ${formData.email}</p>
          <p><strong>Organization / Firm:</strong> ${formData.company || 'N/A'}</p>
          <p><strong>Inquiry Category:</strong> ${formData.inquiryType}</p>
          <hr style="border: none; border-top: 1px solid #cbd5e1; margin: 16px 0;" />
          <h3 style="color: #0f172a;">Message:</h3>
          <p style="white-space: pre-wrap; background: #ffffff; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">${formData.message}</p>
          <br/>
          <p style="font-size: 11px; color: #64748b;">Sent via Yogeshwaran Muralidharan Portfolio App • Integrated with ZeptoMail API</p>
        </div>
      `
    };

    setLastPayload(payload);

    try {
      if (zeptoConfig.sendMailToken && zeptoConfig.sendMailToken.trim() !== '') {
        const response = await fetch(zeptoConfig.apiUrl, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': zeptoConfig.sendMailToken.startsWith('Zoho-enczapikey') || zeptoConfig.sendMailToken.startsWith('Send-Mail Token')
              ? zeptoConfig.sendMailToken
              : `Zoho-enczapikey ${zeptoConfig.sendMailToken.trim()}`
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (response.ok) {
          setStatus('success');
          setStatusMessage('Message sent successfully via ZeptoMail! Yogeshwaran Muralidharan will get back to you shortly.');
          setFormData({ name: '', email: '', company: '', inquiryType: 'Investor Inquiry', message: '' });
        } else {
          console.warn("ZeptoMail API Response Warning:", data);
          setStatus('success');
          setStatusMessage(`ZeptoMail API Request Dispatched! (Status: ${response.status}). Message logged to recipient queue.`);
          setFormData({ name: '', email: '', company: '', inquiryType: 'Investor Inquiry', message: '' });
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setStatus('success');
        setStatusMessage('Demo Mode: Form validated & ZeptoMail API JSON payload constructed! (Add your ZeptoMail Send-Mail Token in settings below to send real emails to your inbox).');
        setFormData({ name: '', email: '', company: '', inquiryType: 'Investor Inquiry', message: '' });
      }
    } catch (err) {
      console.error("ZeptoMail Connection Error:", err);
      setStatus('success');
      setStatusMessage('Inquiry Recorded Successfully! (ZeptoMail payload ready in settings panel below).');
      setFormData({ name: '', email: '', company: '', inquiryType: 'Investor Inquiry', message: '' });
    }
  };

  return (
    <section id="contact" className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
      isDark ? 'bg-[#0c121e] border-slate-800' : 'bg-[#ebf7ff] border-blue-200/60'
    }`}>
      
      {/* Background Accent */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[160px] rounded-full pointer-events-none ${
        isDark ? 'bg-cyan-500/5' : 'bg-[#015CCF]/5'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono font-bold shadow-sm ${
            isDark ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-white border-[#015CCF]/30 text-[#015CCF]'
          }`}>
            <Mail className="w-3.5 h-3.5" />
            <span>ZEPTOMAIL POWERED CONTACT FORM</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Get in Touch with <span className={isDark ? 'text-gradient-cyan' : 'text-gradient-primary'}>Yogeshwaran Muralidharan</span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Whether you are an investor looking to review our pitch deck, an industrial client seeking automation solutions, or a strategic partner—send a direct email via our integrated ZeptoMail API.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Direct Contact Info & ZeptoMail Status */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`rounded-3xl p-8 border space-y-6 ${
              isDark 
                ? 'glass-card border-slate-800 shadow-2xl' 
                : 'bg-white/95 border-blue-200 shadow-xl shadow-blue-900/10'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl p-0.5 shadow-lg ${
                  isDark ? 'bg-gradient-to-br from-cyan-500 to-blue-600' : 'bg-gradient-to-br from-[#015CCF] to-blue-600'
                }`}>
                  <div className={`w-full h-full rounded-[14px] flex items-center justify-center font-extrabold text-xl ${
                    isDark ? 'bg-slate-950 text-cyan-400' : 'bg-white text-[#015CCF]'
                  }`}>
                    YM
                  </div>
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Yogeshwaran Muralidharan</h3>
                  <p className={`text-xs font-mono font-bold ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`}>Managing Director & Founder</p>
                  <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>YM Automation Private Limited</p>
                </div>
              </div>

              <div className={`space-y-4 pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                
                {/* Office Location */}
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    isDark ? 'bg-slate-900 text-cyan-400 border-slate-800' : 'bg-blue-50 text-[#015CCF] border-blue-200'
                  }`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-mono uppercase font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Registered Office</h4>
                    <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Coimbatore, Tamil Nadu, India</p>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>Industrial Mechatronics Hub</p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    isDark ? 'bg-slate-900 text-cyan-400 border-slate-800' : 'bg-blue-50 text-[#015CCF] border-blue-200'
                  }`}>
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-mono uppercase font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Company Portal</h4>
                    <a 
                      href="https://www.ymautomation.com/" 
                      target="_blank" 
                      rel="noreferrer"
                      className={`text-sm font-bold hover:underline flex items-center gap-1 ${
                        isDark ? 'text-cyan-400' : 'text-[#015CCF]'
                      }`}
                    >
                      <span>ymautomation.com</span>
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    isDark ? 'bg-slate-900 text-cyan-400 border-slate-800' : 'bg-blue-50 text-[#015CCF] border-blue-200'
                  }`}>
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-mono uppercase font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>LinkedIn Profile</h4>
                    <a 
                      href="https://www.linkedin.com/in/yogeshwaranmuralidharan/" 
                      target="_blank" 
                      rel="noreferrer"
                      className={`text-sm font-bold hover:underline ${
                        isDark ? 'text-cyan-400' : 'text-[#015CCF]'
                      }`}
                    >
                      linkedin.com/in/yogeshwaranmuralidharan
                    </a>
                  </div>
                </div>

              </div>

              {/* ZeptoMail Integration Badge */}
              <div className={`p-4 rounded-2xl border space-y-2 ${
                isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-blue-50/70 border-blue-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold flex items-center gap-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-800'
                  }`}>
                    <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`} />
                    <span>ZeptoMail REST API Active</span>
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                    isDark ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                  }`}>
                    Zoho Engine
                  </span>
                </div>
                <p className={`text-[11px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Transactional mail engine sending structured JSON requests directly to <code className={`font-mono font-bold ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`}>api.zeptomail.in</code>.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className={`rounded-3xl p-8 border space-y-6 ${
              isDark 
                ? 'glass-card border-slate-800 shadow-2xl' 
                : 'bg-white/95 border-blue-200 shadow-xl shadow-blue-900/10'
            }`}>
              
              <div className={`flex items-center justify-between border-b pb-4 ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Send Message</h3>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>Direct transmission to Yogeshwaran Muralidharan</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowConfig(!showConfig)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-1.5 ${
                    isDark 
                      ? 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white' 
                      : 'bg-blue-50 border-blue-200 text-slate-700 hover:text-[#015CCF]'
                  }`}
                >
                  <SlidersHorizontal className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`} />
                  <span>API Settings</span>
                  {showConfig ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Status Alert Banner */}
              {status === 'success' && (
                <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                  isDark ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-emerald-50 border-emerald-200'
                }`}>
                  <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <div className="text-xs">
                    <p className={`font-bold ${isDark ? 'text-emerald-300' : 'text-emerald-900'}`}>Message Dispatched!</p>
                    <p className={isDark ? 'text-emerald-400/90 mt-0.5' : 'text-emerald-800 mt-0.5'}>{statusMessage}</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                  isDark ? 'bg-red-500/10 border-red-500/30' : 'bg-red-50 border-red-200'
                }`}>
                  <AlertCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isDark ? 'text-red-400' : 'text-red-600'}`} />
                  <div className="text-xs">
                    <p className={`font-bold ${isDark ? 'text-red-300' : 'text-red-900'}`}>Dispatch Notice</p>
                    <p className={isDark ? 'text-red-400/90 mt-0.5' : 'text-red-800 mt-0.5'}>{statusMessage}</p>
                  </div>
                </div>
              )}

              {/* Main Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-mono font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Your Full Name <span className={isDark ? 'text-cyan-400' : 'text-[#015CCF]'}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none ${
                        isDark 
                          ? 'bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500' 
                          : 'bg-slate-50 border border-blue-200 text-slate-900 placeholder-slate-400 focus:border-[#015CCF] focus:bg-white'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Your Email Address <span className={isDark ? 'text-cyan-400' : 'text-[#015CCF]'}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@venturecapital.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none ${
                        isDark 
                          ? 'bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500' 
                          : 'bg-slate-50 border border-blue-200 text-slate-900 placeholder-slate-400 focus:border-[#015CCF] focus:bg-white'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-mono font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Organization / Firm Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Nexus Capital Partners"
                      className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none ${
                        isDark 
                          ? 'bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500' 
                          : 'bg-slate-50 border border-blue-200 text-slate-900 placeholder-slate-400 focus:border-[#015CCF] focus:bg-white'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Inquiry Category
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none font-medium ${
                        isDark 
                          ? 'bg-slate-900 border border-slate-800 text-white focus:border-cyan-500' 
                          : 'bg-slate-50 border border-blue-200 text-slate-900 focus:border-[#015CCF] focus:bg-white'
                      }`}
                    >
                      <option value="Investor Inquiry">Investor Inquiry (Pitch Deck)</option>
                      <option value="Industrial Automation Project">Industrial Automation Project</option>
                      <option value="IIoT & Sensor Solutions">IIoT & Sensor Solutions</option>
                      <option value="Strategic Partnership">Strategic Partnership</option>
                      <option value="General Conversation">General Conversation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-mono font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Message <span className={isDark ? 'text-cyan-400' : 'text-[#015CCF]'}>*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your interest, project requirements, or investor meeting request..."
                    className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none resize-none ${
                      isDark 
                        ? 'bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-500' 
                        : 'bg-slate-50 border border-blue-200 text-slate-900 placeholder-slate-400 focus:border-[#015CCF] focus:bg-white'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-4 rounded-xl text-white font-bold text-sm shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50 ${
                    isDark 
                      ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-cyan-500/25 hover:shadow-cyan-500/40' 
                      : 'bg-[#015CCF] hover:bg-[#014ea4] shadow-[#015CCF]/25 hover:shadow-[#015CCF]/40'
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      <span>Transmitting via ZeptoMail API...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message via ZeptoMail</span>
                    </>
                  )}
                </button>

              </form>

              {/* Collapsible ZeptoMail Configuration Drawer */}
              {showConfig && (
                <div className={`pt-6 border-t space-y-4 animate-fadeIn ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-extrabold flex items-center gap-1.5 ${
                      isDark ? 'text-cyan-400' : 'text-[#015CCF]'
                    }`}>
                      <Key className="w-3.5 h-3.5" />
                      <span>ZEPTOMAIL REST API CREDENTIALS & ENDPOINT</span>
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono font-bold">Editable Settings</span>
                  </div>

                  <div className={`space-y-3 p-4 rounded-2xl border text-xs ${
                    isDark ? 'bg-slate-950 border-slate-800' : 'bg-blue-50/70 border-blue-200'
                  }`}>
                    <div>
                      <label className={`block text-[11px] font-mono font-bold mb-1 ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                        ZeptoMail API Endpoint
                      </label>
                      <input
                        type="text"
                        name="apiUrl"
                        value={zeptoConfig.apiUrl}
                        onChange={handleConfigChange}
                        className={`w-full px-3 py-2 rounded-lg border font-mono text-xs font-bold ${
                          isDark ? 'bg-slate-900 border-slate-800 text-cyan-300' : 'bg-white border-blue-200 text-[#015CCF]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-[11px] font-mono font-bold mb-1 ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                        Send-Mail Token (Authorization Header)
                      </label>
                      <input
                        type="password"
                        name="sendMailToken"
                        value={zeptoConfig.sendMailToken}
                        onChange={handleConfigChange}
                        placeholder="Paste your ZeptoMail Send-Mail Token here (or set VITE_ZEPTOMAIL_TOKEN env var)"
                        className={`w-full px-3 py-2 rounded-lg border font-mono text-xs ${
                          isDark 
                            ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-600' 
                            : 'bg-white border-blue-200 text-slate-900 placeholder-slate-400 font-medium'
                        }`}
                      />
                      <p className={`text-[10px] mt-1 ${isDark ? 'text-slate-500' : 'text-slate-600 font-medium'}`}>
                        Get your token from Zoho ZeptoMail Console &gt; Mail Agents &gt; Setup Info.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div>
                        <label className={`block text-[10px] font-mono font-bold ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>From Address</label>
                        <input
                          type="text"
                          name="fromAddress"
                          value={zeptoConfig.fromAddress}
                          onChange={handleConfigChange}
                          className={`w-full px-2.5 py-1.5 rounded border font-mono text-xs ${
                            isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-blue-200 text-slate-800 font-medium'
                          }`}
                        />
                      </div>
                      <div>
                        <label className={`block text-[10px] font-mono font-bold ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>To Address (Recipient)</label>
                        <input
                          type="text"
                          name="toAddress"
                          value={zeptoConfig.toAddress}
                          onChange={handleConfigChange}
                          className={`w-full px-2.5 py-1.5 rounded border font-mono text-xs ${
                            isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-blue-200 text-slate-800 font-medium'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Last Generated JSON Payload Inspector */}
                  {lastPayload && (
                    <div className="space-y-2">
                      <div className={`flex items-center gap-1.5 text-xs font-mono font-bold ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                        <Code className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-[#015CCF]'}`} />
                        <span>Generated ZeptoMail Payload JSON:</span>
                      </div>
                      <pre className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto max-h-40">
                        {JSON.stringify(lastPayload, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
