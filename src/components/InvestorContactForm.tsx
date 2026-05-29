import React, { useState } from "react";
import { 
  FileLock2, Mail, ExternalLink, Network, ShieldCheck, HelpCircle, ArrowRight, CheckCircle2, FileText, Download, Landmark
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function InvestorContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    firm: "",
    email: "",
    range: "$1.0M - $3.0M USD",
    customInterest: "Complete Venture Pitch Deck & Financial Models"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [securityToken, setSecurityToken] = useState("");

  const ticketRanges = [
    "$500K - $1.0M USD / Seed Level",
    "$1.0M - $3.0M USD / General Partner Focus",
    "$3.0M - $10M USD / Institutional & Sovereign Allocations",
    "$10M+ USD / Dedicated State Infrastructure & Expansion"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.firm) return;

    setIsSubmitting(true);

    // Simulate cryptographic token generation and secure server packaging
    setTimeout(() => {
      const randomHex = Math.random().toString(16).substring(2, 10).toUpperCase();
      setSecurityToken(`SEHAT_SEC_LP_${randomHex}`);
      setIsSubmitting(false);
      setIsCompleted(true);
    }, 2000);
  };

  return (
    <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 space-y-6 text-left relative overflow-hidden" id="investor-contact-portal">
      {/* Background Visual Flare */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="pb-4 border-b border-gray-800/80">
        <span className="text-[10px] font-mono font-bold tracking-widest text-[#06b6d4] bg-cyan-950/40 px-2.5 py-1 rounded-full border border-cyan-500/20 inline-flex items-center gap-1.5 uppercase">
          <FileLock2 className="w-3.5 h-3.5 text-cyan-400" /> SECURE DEAL ROOM
        </span>
        <h3 className="text-xl md:text-2xl font-display font-medium text-white mt-1.5">
          Request Investment Pitch Deck & Pilot Ledger
        </h3>
        <p className="text-xs text-gray-400 mt-1 max-w-xl">
          Enter your institutional credentials below to request access to the complete Sehat AI Investor Suite, regulatory CDSCO filings, operational pilots datasets and financial projections models.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.form
            key="investor-form"
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-gray-400 block font-semibold uppercase">LP Partner Name</label>
                <input
                  id="lp-partner-name"
                  type="text"
                  required
                  placeholder="e.g. Dr. Sandra Sen, MD"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#070b14] border border-gray-800 text-sm rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              {/* VC Firm */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-gray-400 block font-semibold uppercase">Venture Fund / Sovereign Authority</label>
                <input
                  id="lp-fund-name"
                  type="text"
                  required
                  placeholder="e.g. Accel Partners, India Health Fund"
                  value={formData.firm}
                  onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                  className="w-full bg-[#070b14] border border-gray-800 text-sm rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              {/* Institutional Email Address */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-gray-400 block font-semibold uppercase">Institutional Email Address</label>
                <input
                  id="lp-email"
                  type="email"
                  required
                  placeholder="e.g. sandra@accel.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#070b14] border border-gray-800 text-sm rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              {/* Target Ranges */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-gray-400 block font-semibold uppercase">Target Deployment Capacity</label>
                <select
                  id="lp-range-select"
                  value={formData.range}
                  onChange={(e) => setFormData({ ...formData, range: e.target.value })}
                  className="w-full bg-[#070b14] border border-gray-800 text-sm rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition"
                >
                  {ticketRanges.map((val) => (
                    <option key={val} value={val} className="bg-gray-900 text-white">
                      {val}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Core Interest description text area */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-gray-400 block font-semibold uppercase">Specific Material Requests</label>
              <textarea
                id="lp-materials-textbox"
                rows={2}
                placeholder="List specific files like: Clinical testing validation methodology, regulatory CDSCO clearances, and ASHA pilot outcomes stats..."
                value={formData.customInterest}
                onChange={(e) => setFormData({ ...formData, customInterest: e.target.value })}
                className="w-full bg-[#070b14] border border-gray-800 text-sm rounded-xl px-4 py-3 text-white placeholder-gray-650 focus:outline-none focus:border-cyan-500 transition font-sans"
              />
            </div>

            {/* Direct button submit */}
            <button
              id="lp-submit-button"
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.firm || !formData.email}
              className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:opacity-90 active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin block" />
                  <span>PACKAGING SECURE INVESTOR ASSETS...</span>
                </>
              ) : (
                <>
                  <span>CONFIRM & DESTRUCTIBLE LINK DISPATCH</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Regulatory standard statement */}
            <div className="flex items-start gap-1.5 p-3 bg-gray-950 rounded-xl border border-gray-900 mt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 t-0.5 shrink-0" />
              <p className="text-[9px] text-gray-500 font-mono leading-relaxed">
                We employ strict enterprise security standards. By requesting deal-room access, you agree to treat all clinical operational datasets and Indian demographic indices as confidential under international NDAs.
              </p>
            </div>

          </motion.form>
        ) : (
          <motion.div
            key="success-receipt"
            className="space-y-5 text-center py-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 15 }}
          >
            {/* Checked success box info */}
            <div className="w-14 h-14 rounded-full bg-emerald-950 border-2 border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-medium text-white">Deal Room Access Credentials Authorized!</h4>
              <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-emerald-400 font-semibold">{formData.name}</span> of <span className="text-cyan-400 font-semibold">{formData.firm}</span>. Sehat AI has generated your personal, credentialed, destructible link and sent details directly to <span className="text-white underline">{formData.email}</span>.
              </p>
            </div>

            {/* Mock access token container */}
            <div className="bg-gray-950 rounded-2xl p-4 border border-gray-800 max-w-sm mx-auto space-y-2 text-left">
              <span className="text-[8px] font-mono text-gray-500 block">LP DEAL ROOM ID KEY (SINGLE USE CASE TOKEN)</span>
              
              <div className="flex justify-between items-center font-mono py-1.5 px-2.5 bg-[#0e1713] rounded-lg border border-emerald-500/20">
                <span className="text-emerald-400 text-xs font-bold">{securityToken}</span>
                <span className="text-[8px] text-gray-400 bg-gray-900 px-1 rounded font-bold">SHA-256 AES</span>
              </div>

              <div className="flex items-center gap-1 text-[8px] text-gray-500 mt-2 font-mono">
                <Landmark className="w-3 h-3 text-cyan-400" /> Ticket Level: {formData.range}
              </div>
            </div>

            {/* Direct Action triggers mock download */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                id="btn-fake-download-pitchdeck"
                onClick={() => alert("Simulation: Secure package downloaded. Your personal encrypted token is authorized.")}
                className="w-full sm:w-auto bg-[#101b1e] border border-emerald-500/40 text-emerald-300 font-mono text-[10px] uppercase font-bold px-4 py-2.5 rounded-xl inline-flex items-center gap-2 hover:bg-emerald-950 active:scale-[0.98] transition"
              >
                <FileText className="w-4 h-4 text-emerald-400" /> Download Pitch Deck PDF
              </button>
              
              <button
                id="btn-fake-download-financial"
                onClick={() => alert("Simulation: Secure Financial Model spreadsheet downloaded.")}
                className="w-full sm:w-auto bg-[#0a1420] border border-cyan-500/40 text-cyan-300 font-mono text-[10px] uppercase font-bold px-4 py-2.5 rounded-xl inline-flex items-center gap-2 hover:bg-cyan-950 active:scale-[0.98] transition"
              >
                <Download className="w-4 h-4 text-cyan-400" /> Download Financial Models
              </button>
            </div>

            <p className="text-[9px] text-gray-500 font-mono">
              💡 Credential files expire automatically under standard 72-hour review timelines.
            </p>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
