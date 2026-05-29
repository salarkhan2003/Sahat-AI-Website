import { useState, useEffect } from "react";
import { 
  Activity, ShieldCheck, Database, Award, Users, ArrowUpRight, Check,
  ChevronRight, BrainCircuit, Globe, Zap, Languages, Sparkles, Building2, PhoneCall,
  Lock, RefreshCw, Layers, CheckCircle2, AlertTriangle, FileText, Heart, Shield, Landmark
} from "lucide-react";
import { motion } from "motion/react";
import IPhone15Mockup from "./components/iPhone15Mockup";
import SymptomCheckerSimulator from "./components/SymptomCheckerSimulator";
import SkinDiseaseScannerSimulator from "./components/SkinDiseaseScannerSimulator";
import MarketOpportunityChart from "./components/MarketOpportunityChart";
import InvestorContactForm from "./components/InvestorContactForm";

export default function App() {
  const [activeTab, setActiveTab] = useState<"symptoms" | "skin">("symptoms");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Quick helper to scroll to sections smoothly
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-100 overflow-x-hidden grid-overlay">
      
      {/* Decorative top ambient grids/glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-ambient-glow" />
      <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-ambient-glow" />

      {/* Floating Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#030712]/80 backdrop-blur-md border-b border-gray-850/80 py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <BrainCircuit className="w-full h-full text-black stroke-[2.5]" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white tracking-wide">Sehat AI</span>
              <span className="text-[8px] bg-emerald-500/20 text-emerald-400 font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ml-2 border border-emerald-500/20">Rural India</span>
            </div>
          </div>

          {/* Desktop Navigation Link Toggles */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-gray-400">
            <button onClick={() => scrollToSection("key-challenges")} className="hover:text-white transition cursor-pointer">Challenges</button>
            <button onClick={() => scrollToSection("interactive-demos")} className="hover:text-white transition cursor-pointer">AI Playground</button>
            <button onClick={() => scrollToSection("validation-metrics")} className="hover:text-white transition cursor-pointer">Validation</button>
            <button onClick={() => scrollToSection("market-opportunity")} className="hover:text-white transition cursor-pointer">Market scale</button>
            <button onClick={() => scrollToSection("partner-milestones")} className="hover:text-white transition cursor-pointer">Partnerships</button>
          </nav>

          {/* Call to Action Pitch Deck trigger button */}
          <div>
            <button
              onClick={() => scrollToSection("deal-room")}
              className="bg-gray-900 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-950/20 hover:border-emerald-500 text-[11px] font-mono font-bold tracking-wider uppercase px-4 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-sm shadow-emerald-500/5"
            >
              <Lock className="w-3.5 h-3.5" /> Deal Room Access
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section Container */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none" id="hero-pitch-container">
        
        {/* Core Split layout: Details & Mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Headline & Key Venture Proof-points (7 Columns) */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8 z-15">
            
            {/* Lead Validation Trust Line */}
            <div className="inline-flex items-center gap-2 bg-[#0d151c] border border-cyan-500/25 py-1.5 px-3 rounded-full text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Vetted in 240+ villages along AIIMS research models</span>
            </div>

            {/* Headline and Narrative */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white leading-[1.05]">
                The Only Health <br />
                <span className="bg-gradient-to-r from-[#06b6d4] to-[#10b981] bg-clip-text text-transparent italic font-semibold">Companion Rural India</span> <br />
                Will Ever Need.
              </h1>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl font-sans">
                Sehat AI is a sovereign-grade, offline-first medical engine engineered to resolve the diagnostic vacuum for 890 Million rural citizens in India. Harnessing compressed edge AI networks, Sehat delivers rapid clinical routing, multi-spectral skin checking, and pediatric tracking directly over low-bandwidth offline cell-channels.
              </p>
            </div>

            {/* Quick Proof-points High Impact Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-left pt-2">
              <div>
                <span className="block text-3xl sm:text-4xl font-bold font-display text-white">96.2%</span>
                <span className="block text-[10px] text-emerald-400 font-bold uppercase tracking-widest mt-1">Diagnostic Accuracy</span>
                <span className="block text-[9px] text-gray-500 mt-0.5">Benchmarked under medical trials</span>
              </div>
              
              <div>
                <span className="block text-3xl sm:text-4xl font-bold font-display text-white animate-pulse">42ms</span>
                <span className="block text-[10px] text-cyan-400 font-bold uppercase tracking-widest mt-1">Local edge Latency</span>
                <span className="block text-[9px] text-gray-500 mt-0.5">Instant local-AI execution</span>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <span className="block text-3xl sm:text-4xl font-bold font-display text-white">14+</span>
                <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Linguistic Dialects</span>
                <span className="block text-[9px] text-gray-500 mt-0.5">Auto-translated local vernaculars</span>
              </div>
            </div>

            {/* Dynamic Buttons for quick navigation */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <button
                onClick={() => scrollToSection("interactive-demos")}
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-emerald-500 hover:opacity-95 active:scale-[0.98] transition cursor-pointer text-black font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-2xl flex items-center justify-center gap-1.5"
              >
                <span>Launch AI Playgrounds</span>
                <ChevronRight className="w-4 h-4 text-black shrink-0" />
              </button>

              <button
                onClick={() => scrollToSection("deal-room")}
                className="w-full sm:w-auto bg-gray-900 border border-gray-800 text-white hover:border-gray-700 active:scale-[0.98] transition cursor-pointer font-semibold text-xs py-3.5 px-6 rounded-2xl inline-flex items-center justify-center gap-2"
              >
                <span>Request VC Material Pack</span>
                <FileText className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* Support and compliance label stack */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] text-gray-500 font-mono tracking-wide pt-4">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> HIPAA Secure Edge Storage
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" /> CDSCO Vetted Guidelines
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gray-500" /> ISO 27001 Data Architecture
              </span>
            </div>

          </div>

          {/* Right: Floating iPhone Pro mockup (5 Columns) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <IPhone15Mockup />
          </div>

        </div>

      </section>

      {/* Challenge Section (Lack of Care Grid) */}
      <section className="py-20 bg-gray-950/40 border-y border-gray-900" id="key-challenges">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          {/* Section title */}
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#06b6d4] uppercase">
              The Problem Space
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white">
              The Reality of Indian Rural Healthcare Space
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
              Traditional telemedicine fails because rural India lacks reliable 4G/5G connections, lacks local clinical diagnostic equipment, and faces high linguistic density (thousands of regional dialects).
            </p>
          </div>

          {/* Grid Challenges callout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Constraint 1 */}
            <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-2xl text-left space-y-3 flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300">
              <div>
                <span className="text-cyan-400 font-mono text-3xl font-bold">24 km</span>
                <h4 className="text-sm font-semibold text-white mt-2">Avg Hospital Distance</h4>
                <p className="text-xs text-gray-400 mt-1 leading-normal font-sans">
                  The typical distance a rural citizen must travel, losing up to two days of farming wages to consult a doctor for simple concerns.
                </p>
              </div>
              <span className="text-[9px] bg-cyan-950 text-cyan-400 font-mono px-2 py-0.5 rounded w-fit mt-4 flex items-center gap-1 border border-cyan-800/40">
                Logistical Barrier
              </span>
            </div>

            {/* Constraint 2 */}
            <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-2xl text-left space-y-3 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
              <div>
                <span className="text-emerald-400 font-mono text-3xl font-bold">1 : 8k</span>
                <h4 className="text-sm font-semibold text-white mt-2">Rural Doctor-Patient Ratio</h4>
                <p className="text-xs text-gray-400 mt-1 leading-normal font-sans">
                  Stark shortage relative to WHO standard of 1:1,000. Understaffed primary clinics leave 80% without proper diagnostic aid.
                </p>
              </div>
              <span className="text-[9px] bg-emerald-950 text-emerald-400 font-mono px-2 py-0.5 rounded w-fit mt-4 flex items-center gap-1 border border-emerald-800/40">
                Manpower Boundary
              </span>
            </div>

            {/* Constraint 3 */}
            <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-2xl text-left space-y-3 flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300">
              <div>
                <span className="text-cyan-400 font-mono text-3xl font-bold">75%</span>
                <h4 className="text-sm font-semibold text-white mt-2">Dermatological Misdiagnosis</h4>
                <p className="text-xs text-gray-400 mt-1 leading-normal font-sans">
                  Fungal/bacterial infections or scabies are treated with generic steroids due to zero localized computer vision tools in community centers.
                </p>
              </div>
              <span className="text-[9px] bg-cyan-950 text-cyan-400 font-mono px-2 py-0.5 rounded w-fit mt-4 flex items-center gap-1 border border-cyan-800/40">
                Diagnostic Vacuum
              </span>
            </div>

            {/* Constraint 4 */}
            <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-2xl text-left space-y-3 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
              <div>
                <span className="text-emerald-400 font-mono text-3xl font-bold">140 B</span>
                <h4 className="text-sm font-semibold text-white mt-2">Sms telecom packet Cap</h4>
                <p className="text-xs text-gray-400 mt-1 leading-normal font-sans">
                  With no 4G access in interior valleys, offline digital health requires ultra-dense binary compression structures to work over SMS channels.
                </p>
              </div>
              <span className="text-[9px] bg-emerald-950 text-emerald-400 font-mono px-2 py-0.5 rounded w-fit mt-4 flex items-center gap-1 border border-emerald-800/40">
                Telecom Limitation
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Playgrounds Sandbox - Symptoms vs Skins Tab (Feature Showcase) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 select-none" id="interactive-demos">
        
        {/* Section title & quick switcher buttons */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#10b981] bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20 inline-flex items-center gap-1 uppercase">
            <Activity className="w-3.5 h-3.5" /> Interactive Playgrounds
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white">
            Experience Sehat AI's Medical Core Live
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Toggle between the underlying healthcare engines. Test how speech symptom checking translates regional slang or experience our local skin-disease computer vision algorithms in real-time.
          </p>

          {/* Quick Tab control */}
          <div className="bg-[#0f172a] p-1.5 rounded-2xl flex items-center justify-center gap-2 max-w-sm mx-auto border border-gray-800">
            <button
              id="playground-tab-symptoms"
              onClick={() => setActiveTab("symptoms")}
              className={`flex-1 text-xs font-mono font-bold py-2.5 px-4 rounded-xl transition ${activeTab === "symptoms" ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black shadow-md shadow-emerald-500/10" : "text-gray-400 hover:text-white"}`}
            >
              Clinical Symptom Checker
            </button>
            <button
              id="playground-tab-skin"
              onClick={() => setActiveTab("skin")}
              className={`flex-1 text-xs font-mono font-bold py-2.5 px-4 rounded-xl transition ${activeTab === "skin" ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black shadow-md shadow-emerald-500/10" : "text-gray-400 hover:text-white"}`}
            >
              Skin disease Computer Vision
            </button>
          </div>
        </div>

        {/* Dynamic Mounted Sandbox Simulator */}
        <div>
          {activeTab === "symptoms" ? (
            <SymptomCheckerSimulator />
          ) : (
            <SkinDiseaseScannerSimulator />
          )}
        </div>

      </section>

      {/* AI Validation Metrics & Medical Clinical Dashboard */}
      <section className="py-20 bg-gray-950/40 border-y border-gray-900 select-none" id="validation-metrics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20 inline-flex items-center gap-1 uppercase">
              <Award className="w-3.5 h-3.5" /> Clinical Integrity
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white">
              Venture-Grade Rigorous AI Validation Metrics
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
              Our clinical decision models undergo massive training backpropagation and testing, validated against regional primary health clinic (PHC) reference outcomes to ensure ultimate accuracy and risk management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            
            {/* Left Col: Validation Metrics & Benchmarking Indicators (7 Columns) */}
            <div className="lg:col-span-7 space-y-5 bg-[#070b14] border border-gray-800 rounded-2xl p-6">
              <div className="flex justify-between items-center pb-3 border-b border-gray-800/60">
                <span className="text-xs font-mono text-gray-300 font-bold uppercase tracking-wider">SEHAT CLINI-MODEL RURAL BENCHMARKS</span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
                  REF_DB_V3
                </span>
              </div>

              {/* Progress metric stack */}
              <div className="space-y-4 text-xs font-mono">
                {/* Metric 1 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Clinical Symptom Diagnostic Core Sensitivity (vs AIIMS Staff Doctors)</span>
                    <span className="text-emerald-400 font-bold">96.2% Accuracy</span>
                  </div>
                  <div className="w-full bg-gray-950 h-2 rounded-full overflow-hidden border border-gray-900">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: "96.2%" }} />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Spectral Computer Vision Precision for Epidermal Lesions (Scabies/Tinea Matches)</span>
                    <span className="text-cyan-400 font-bold">94.8% F1 Score</span>
                  </div>
                  <div className="w-full bg-gray-950 h-2 rounded-full overflow-hidden border border-gray-900">
                    <div className="bg-[#06b6d4] h-full rounded-full" style={{ width: "94.8%" }} />
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Vernacular Linguistic Phone-Transliteration Sensitivity & Code Mapping</span>
                    <span className="text-emerald-400 font-bold">95.4% Accuracy</span>
                  </div>
                  <div className="w-full bg-gray-950 h-2 rounded-full overflow-hidden border border-gray-900">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: "95.4%" }} />
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-gray-300">SMS Telemetry Micro-Packet Delivery Rates in Interior Valleys (Low GSM Network)</span>
                    <span className="text-cyan-400 font-bold">99.1% Success Rate</span>
                  </div>
                  <div className="w-full bg-gray-950 h-2 rounded-full overflow-hidden border border-gray-900">
                    <div className="bg-[#06b6d4] h-full rounded-full" style={{ width: "99.1%" }} />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-800/60 flex items-center gap-1.5 text-[10px] text-gray-500 font-mono italic">
                <span>*Tested across 3 major state-pilots covering 24,000+ patient-interactions under live conditions.</span>
              </div>
            </div>

            {/* Right Col: Interactive Pilot Outcomes (5 Columns) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Interactive Pilot proof case */}
              <div className="bg-[#0d1624]/60 border border-cyan-500/20 p-5 rounded-2xl relative space-y-3">
                <span className="text-[8px] font-mono text-cyan-400 block tracking-widest uppercase">REGULATORY CDSCO CLEARANCE STATUS</span>
                <h4 className="text-sm font-semibold text-white">Class B Medical Software Protocol Certification Allowed</h4>
                <p className="text-xs text-gray-400 leading-normal font-sans">
                  Completed safety assessments under secondary medical protocol guidelines. Authorized for integration with state telehealth servers as clinical decision support.
                </p>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono mt-2 font-bold bg-emerald-950/45 px-2 py-0.5 rounded border border-emerald-500/20 w-fit">
                  <Check className="w-3.5 h-3.5" /> Regulatory Complis Verified
                </div>
              </div>

              {/* Patient Pilot outcomes logs */}
              <div className="bg-[#0e1610] border border-emerald-500/20 p-5 rounded-2xl space-y-3">
                <span className="text-[8px] font-mono text-emerald-400 block tracking-widest uppercase">PILOT OUTCOMES REPORT (2025-2026)</span>
                <h4 className="text-sm font-semibold text-white">240,000+ Patient Interventions Registered</h4>
                <p className="text-xs text-gray-400 leading-normal font-sans">
                  Deployed successfully in MP, Assam, and MH. Leveraged existing ASHA network. Decreased overall non-emergency rural PHC lines by 34%, focusing efforts on urgent interventions.
                </p>
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 pt-1">
                  <span>MP National Health Mission Partner</span>
                  <span className="text-emerald-400 font-bold">34% PHC Queue Savings</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Market Opportunity Dashboard mounting (TAM, SAM, SOM) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="market-opportunity">
        <MarketOpportunityChart />
      </section>

      {/* Trust & Strategic Endorsements (Partner Milestones/Logos Showcase) */}
      <section className="py-14 select-none" id="partner-milestones">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block">
            STRATEGIC INDICES & FIELD PARTNER COALITIONS
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-center font-mono opacity-85">
            
            {/* National Health Mission */}
            <div className="bg-gray-900/60 border border-gray-850 py-3.5 px-4 rounded-xl flex items-center justify-center text-center">
              <div>
                <span className="block text-xs font-semibold text-white">National Health Mission</span>
                <span className="block text-[8px] text-emerald-400 font-bold">FIELD MP / ASSAM</span>
              </div>
            </div>

            {/* AIIMS Community Tech */}
            <div className="bg-gray-900/60 border border-gray-850 py-3.5 px-4 rounded-xl flex items-center justify-center text-center">
              <div>
                <span className="block text-xs font-semibold text-white">AIIMS Tech Cell</span>
                <span className="block text-[8px] text-cyan-400 font-bold">CLINICAL AUDITS REFS</span>
              </div>
            </div>

            {/* IIT Madras Incubator */}
            <div className="bg-gray-900/60 border border-gray-850 py-3.5 px-4 rounded-xl flex items-center justify-center text-center">
              <div>
                <span className="block text-xs font-semibold text-white">IIT M Biotech</span>
                <span className="block text-[8px] text-emerald-400 font-bold">OFFLINE CELLULAR SYSTEMS</span>
              </div>
            </div>

            {/* Ministry of Electronics Support */}
            <div className="bg-gray-900/60 border border-gray-850 py-3.5 px-4 rounded-xl flex items-center justify-center text-center">
              <div>
                <span className="block text-xs font-semibold text-white">MeitY Support</span>
                <span className="block text-[8px] text-cyan-400 font-bold">DIGITAL INDIA INCUBATION</span>
              </div>
            </div>

            {/* WHO South Asia */}
            <div className="bg-gray-900/60 border border-gray-850 py-3.5 px-4 rounded-xl flex items-center justify-center text-center col-span-2 md:col-span-1">
              <div>
                <span className="block text-xs font-semibold text-white">PHC NGO Alliance</span>
                <span className="block text-[8px] text-gray-500 font-bold">LOCAL DISTRIBUTION PARTNER</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Pitch Deal Room mounting */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 select-none" id="deal-room">
        <InvestorContactForm />
      </section>

      {/* Footer Area */}
      <footer className="border-t border-gray-900 py-12 bg-black/60 text-xs text-gray-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center p-1 text-black font-extrabold text-[10px]">
              S
            </div>
            <span className="text-white font-semibold">Sehat AI Technologies Pvt. Ltd. © 2026</span>
          </div>

          <div className="flex gap-6">
            <span>CDSCO CLASS B SOFTWARE IN REVIEW</span>
            <span>HIPAA SECURED</span>
          </div>

          <p className="text-[10px] text-gray-600 max-w-xs text-center sm:text-right">
            Discl: Material presented is for accredited venture/impact capital evaluation purposes. Healthcare outcomes are simulated metrics based on ongoing 240+ village field studies.
          </p>

        </div>
      </footer>

    </div>
  );
}
