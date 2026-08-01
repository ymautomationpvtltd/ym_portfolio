import React, { useState, useEffect } from "react";
import { Cpu, Menu, X, ArrowUpRight, Mail, Sun, Moon } from "lucide-react";

export default function Navbar({ onOpenInvestorModal, theme, toggleTheme }) {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const isDark = theme === "dark";

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "About Founder", href: "#about" },
		{ name: "YM Venture", href: "#venture" },
		{ name: "Investor Highlights", href: "#investor" },
		{ name: "Engineering Stack", href: "#tech" },
		{ name: "Contact & ZeptoMail", href: "#contact" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ?
					isDark ?
						"bg-[#14161d]/95 backdrop-blur-md border-b border-[#2e3342] py-3 shadow-xl"
					:	"bg-[#ebf7ff]/95 backdrop-blur-md border-b border-blue-200/80 py-3 shadow-md"
				:	"bg-transparent py-4 sm:py-5"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between gap-4">
					{/* Logo & Branding */}
					<a
						href="#"
						className="flex items-center gap-3 group shrink-0"
					>
						<div
							className={`relative w-10 h-10 rounded-xl p-0.5 shadow-md transition-transform group-hover:scale-105 shrink-0 ${
								isDark ?
									"bg-gradient-to-br from-[#ffb700] to-amber-600 shadow-[#ffb700]/25"
								:	"bg-gradient-to-br from-[#015CCF] to-blue-600 shadow-[#015CCF]/20"
							}`}
						>
							<div
								className={`w-full h-full rounded-[10px] flex items-center justify-center ${
									isDark ? "bg-[#14161d]" : "bg-white"
								}`}
							>
								<Cpu
									className={`w-5 h-5 group-hover:rotate-12 transition-transform ${
										isDark ? "text-[#ffb700]" : (
											"text-[#015CCF]"
										)
									}`}
								/>
							</div>
						</div>
						<div className="whitespace-nowrap">
							<div className="flex items-center gap-2">
								<span
									className={`font-extrabold text-base sm:text-lg tracking-tight font-sans whitespace-nowrap ${
										isDark ? "text-white" : "text-slate-900"
									}`}
								>
									Yogeshwaran M.
								</span>
							</div>
							<p
								className={`text-[10px] sm:text-[11px] font-mono tracking-wider whitespace-nowrap ${
									isDark ?
										"text-[#ffb700] font-bold"
									:	"text-slate-600 font-medium"
								}`}
							>
								YM AUTOMATION PVT LTD
							</p>
						</div>
					</a>

					{/* Desktop Navigation Links */}
					<nav
						className={`hidden xl:flex items-center gap-1 p-1.5 rounded-full border shadow-sm backdrop-blur-sm shrink-0 ${
							isDark ?
								"bg-[#1e212b]/80 border-[#2e3342]"
							:	"bg-white/80 border-blue-200/80"
						}`}
					>
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
									isDark ?
										"text-slate-300 hover:text-[#ffb700] hover:bg-[#2e3342]/70"
									:	"text-slate-700 hover:text-[#015CCF] hover:bg-blue-50"
								}`}
							>
								{link.name}
							</a>
						))}
					</nav>

					{/* Action CTAs & Theme Toggle */}
					<div className="hidden sm:flex items-center gap-2 lg:gap-3 shrink-0">
						{/* Theme Switcher Toggle Button */}
						<button
							onClick={toggleTheme}
							className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0 ${
								isDark ?
									"bg-[#1e212b] border-[#2e3342] text-[#ffb700] hover:bg-[#282c38]"
								:	"bg-white border-blue-200 text-[#015CCF] hover:bg-blue-50 shadow-sm"
							}`}
							title={
								isDark ?
									"Switch to Light Mode (#015CCF on #ebf7ff)"
								:	"Switch to YM Automation Dark Gold Mode"
							}
							aria-label="Toggle Theme"
						>
							{isDark ?
								<>
									<Sun className="w-4 h-4 shrink-0 text-[#ffb700]" />
									<span className="font-mono text-[11px] text-[#ffb700] font-bold whitespace-nowrap">
										Light Mode
									</span>
								</>
							:	<>
									<Moon className="w-4 h-4 text-[#015CCF] shrink-0" />
									<span className="font-mono text-[11px] text-[#015CCF] font-bold whitespace-nowrap">
										Dark Mode
									</span>
								</>
							}
						</button>

						<button
							onClick={onOpenInvestorModal}
							className={`relative group overflow-hidden px-4 py-2 rounded-xl font-bold text-xs shadow-lg transition-all hover:scale-[1.02] whitespace-nowrap shrink-0 ${
								isDark ?
									"bg-gradient-to-r from-[#ffb700] to-amber-500 text-slate-950 shadow-[#ffb700]/25 hover:shadow-[#ffb700]/40 font-extrabold"
								:	"bg-[#015CCF] hover:bg-[#014ea4] text-white shadow-[#015CCF]/25 hover:shadow-[#015CCF]/40"
							}`}
						>
							<span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
								<span>Investor Deck</span>
								<ArrowUpRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
							</span>
						</button>
					</div>

					{/* Mobile Navigation Controls */}
					<div className="xl:hidden flex items-center gap-2 shrink-0">
						<button
							onClick={toggleTheme}
							className={`p-2 rounded-lg border text-xs font-bold shrink-0 ${
								isDark ?
									"bg-[#1e212b] border-[#2e3342] text-[#ffb700]"
								:	"bg-white border-blue-200 text-[#015CCF]"
							}`}
							aria-label="Toggle Theme"
						>
							{isDark ?
								<Sun className="w-4 h-4 shrink-0" />
							:	<Moon className="w-4 h-4 shrink-0" />}
						</button>

						<button
							onClick={onOpenInvestorModal}
							className={`px-3 py-1.5 rounded-lg border text-xs font-bold whitespace-nowrap shrink-0 ${
								isDark ?
									"bg-[#ffb700]/15 text-[#ffb700] border-[#ffb700]/40"
								:	"bg-[#015CCF]/10 text-[#015CCF] border-[#015CCF]/30"
							}`}
						>
							Deck
						</button>
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className={`p-2 rounded-lg border shrink-0 ${
								isDark ?
									"bg-[#1e212b] border-[#2e3342] text-slate-300"
								:	"bg-white border-blue-200 text-slate-700"
							}`}
							aria-label="Toggle Navigation Menu"
						>
							{mobileMenuOpen ?
								<X className="w-5 h-5 shrink-0" />
							:	<Menu className="w-5 h-5 shrink-0" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Drawer */}
			{mobileMenuOpen && (
				<div
					className={`xl:hidden border-b px-4 pt-3 pb-6 space-y-3 mt-3 shadow-xl animate-fadeIn ${
						isDark ?
							"bg-[#181a22] border-[#2e3342]"
						:	"bg-white border-blue-200"
					}`}
				>
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							onClick={() => setMobileMenuOpen(false)}
							className={`block px-3 py-2 text-sm font-semibold rounded-lg whitespace-nowrap ${
								isDark ?
									"text-slate-200 hover:text-[#ffb700] hover:bg-[#282c38]"
								:	"text-slate-700 hover:text-[#015CCF] hover:bg-blue-50"
							}`}
						>
							{link.name}
						</a>
					))}
					<div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
						<button
							onClick={() => {
								setMobileMenuOpen(false);
								onOpenInvestorModal();
							}}
							className={`w-full py-2.5 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-1.5 whitespace-nowrap ${
								isDark ?
									"bg-gradient-to-r from-[#ffb700] to-amber-500 text-slate-950 font-extrabold"
								:	"bg-[#015CCF] text-white"
							}`}
						>
							<span>Request Investor Pitch Deck</span>
							<ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
						</button>
					</div>
				</div>
			)}
		</header>
	);
}
