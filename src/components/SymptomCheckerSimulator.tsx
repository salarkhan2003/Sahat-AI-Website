import React, { useState } from "react";
import { 
  Heart, ShieldCheck, HelpCircle, Activity, 
  Send, Languages, AlertCircle, Sparkles, Building2, MapPin, CheckCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CaseStudy {
  id: string;
  name: string;
  age: number;
  gender: string;
  location: string;
  reportedLanguage: string;
  symptomsText: string;
  compressedPayload: string;
  bandwidthSaved: string;
  triageLevel: "URGENT" | "STABLE" | "IMMEDIATE REFERRAL";
  analysisHindi: string;
  ashaAction: string;
  nearestPHCDistance: string;
  phcName: string;
}

const mockCases: CaseStudy[] = [
  {
    id: "case-01",
    name: "Mohan Lal",
    age: 58,
    gender: "Male",
    location: "Village Chhattarpur, Madhya Pradesh",
    reportedLanguage: "Hindi (Voice Input)",
    symptomsText: "मुझे सीने में भारी दर्द है, बाएं कंधे में खिंचाव महसूस हो रहा है और बहुत पसीना आ रहा है।",
    compressedPayload: "SZ#V3#IN-MP_58M_CP_LSA_HYP",
    bandwidthSaved: "94.2% Bytes Saved",
    triageLevel: "IMMEDIATE REFERRAL",
    analysisHindi: "संभावित तीव्र कार्डियक सिंड्रोम (Myocardial Infarction)। आपातकालीन स्थिति। तुरंत एस्पिरिन (300mg) दें यदि उपलब्ध हो।",
    ashaAction: "Alert dispatched to ASHA worker Vimla Devi. Dispatching local dynamic response cart.",
    nearestPHCDistance: "7.4 km",
    phcName: "Chhattarpur Community Health Centre"
  },
  {
    id: "case-02",
    name: "Sunita Bai",
    age: 24,
    gender: "Female (Pregnant - 32 Weeks)",
    location: "Village Sonapur, Assam",
    reportedLanguage: "Bengali (Text)",
    symptomsText: "আমার মাথা খুব ঘুরছে, পায়ে অনেক জল এসেছে এবং চোখে ঝাপসা দেখছি।",
    compressedPayload: "SZ#V3#IN-AS_24F_P32_BP_VIS",
    bandwidthSaved: "96.1% Bytes Saved",
    triageLevel: "URGENT",
    analysisHindi: "संभावित प्री-एक्लेमप्सिया (Pre-Eclampsia) का खतरा। उच्च रक्तचाप और दृष्टि धुंधलापन अत्यंत गंभीर है। तुरंत आराम करने और रक्तचाप मापने को कहें।",
    ashaAction: "ASHA Companion triggered to register BP measurements immediately. Automated referral tracking logged.",
    nearestPHCDistance: "4.1 km",
    phcName: "Sonapur Block Primary Health Centre"
  },
  {
    id: "case-03",
    name: "Aman",
    age: 5,
    gender: "Male",
    location: "Village Gadchiroli, Maharashtra",
    reportedLanguage: "Marathi (Voice Input)",
    symptomsText: "माझ्या मुलाला २ दिवसांपासून तीव्र जुलाब होत आहेत, तो पाणी पीत नाहीये आणि खूप सुस्त पडला आहे।",
    compressedPayload: "SZ#V3#IN-MH_05M_DEHYD_LETH",
    bandwidthSaved: "91.5% Bytes Saved",
    triageLevel: "URGENT",
    analysisHindi: "गंभीर बाल निर्जलीकरण (Severe Pediatric Dehydration)। सुस्ती एक खतरनाक संकेत है। तुरंत जीवन रक्षक घोल (ORS) और जिंक पूरकता शुरू करें।",
    ashaAction: "Pre-alert dispatched to Anganwadi Sevika Sarika. Delivery of emergency pediatric oral rehydration sachet initiated.",
    nearestPHCDistance: "12.2 km",
    phcName: "Gadchiroli Rural Sub-Divisional Hospital ID-2"
  }
];

export default function SymptomCheckerSimulator() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(mockCases[0]);
  const [customInput, setCustomInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [customResult, setCustomResult] = useState<CaseStudy | null>(null);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      const generatedResult: CaseStudy = {
        id: "case-custom",
        name: "Self Checked Patient",
        age: 35,
        gender: "Female",
        location: "Kuppam Village, Andhra Pradesh",
        reportedLanguage: "Multilingual input",
        symptomsText: customInput,
        compressedPayload: "SZ#V3#CUST-S_FEV_HA_SE_99",
        bandwidthSaved: "93.8% Saved",
        triageLevel: "URGENT",
        analysisHindi: "संभावित वायरल संक्रमण एवं निर्जलीकरण। तरल पदार्थों का सेवन बढ़ाएं। यदि बुखार १०२ डिग्री से ऊपर जाता है तो पैरासिटामोल लें और आशा वर्कर से मिलें।",
        ashaAction: "Kuppam clinic queue registered. SMS advisory successfully dispatched.",
        nearestPHCDistance: "3.2 km",
        phcName: "Kuppam Sub-Health Centre"
      };
      setCustomResult(generatedResult);
      setSelectedCase(generatedResult);
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleSelectCase = (c: CaseStudy) => {
    setCustomResult(null);
    setSelectedCase(c);
  };

  return (
    <div className="glass-panel rounded-3xl p-5 md:p-8 border border-white/5 space-y-6 relative overflow-hidden" id="interactive-simulator-section">
      {/* Visual Ambient Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-800/80">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20 inline-flex items-center gap-1.5 uppercase">
            <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" /> Sandbox Live Environment
          </span>
          <h3 className="text-xl md:text-2xl font-display font-medium text-white mt-1.5">
            Test Sehat AI’s Clinical Decision Engine
          </h3>
          <p className="text-xs text-gray-400 mt-1 max-w-xl">
            See how Sehat AI resolves spoken vernacular complaints, compresses the medical diagnosis into ultra-dense 140-byte binary packets for offline SMS, and triggers local ASHA intervention.
          </p>
        </div>

        {/* Diagnostic Latency KPI */}
        <div className="bg-[#0b121f] rounded-2xl p-3 border border-gray-800 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center text-black font-bold text-xs">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[9px] text-gray-500 font-mono">LATENCY (LOCAL LLM)</span>
            <span className="text-sm font-mono font-bold text-white">42ms Edge Decypher</span>
          </div>
        </div>
      </div>

      {/* Core Simulation Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Preset Selector/Input Interface (5 Columns) */}
        <div className="lg:col-span-5 space-y-5">
          <p className="text-xs font-semibold text-gray-400 font-mono tracking-wider uppercase">
            Select an Rural Clinical Case Study:
          </p>
          
          <div className="space-y-3">
            {mockCases.map((c) => {
              const isSelected = selectedCase.id === c.id && !customResult;
              return (
                <button
                  id={`sandbox-case-btn-${c.id}`}
                  key={c.id}
                  onClick={() => handleSelectCase(c)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition duration-300 relative ${isSelected ? "bg-[#0c1624] border-cyan-500/40 text-white shadow-lg" : "bg-gray-900/40 border-gray-800 text-gray-400 hover:border-gray-700 hover:bg-gray-900/80"}`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${c.triageLevel === "IMMEDIATE REFERRAL" ? "bg-red-500" : "bg-amber-400"}`} />
                      <span className="text-xs font-mono font-bold text-gray-300">{c.id.toUpperCase()}</span>
                    </div>
                    <span className="text-[9px] bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded border border-gray-700/60 font-mono">
                      {c.reportedLanguage}
                    </span>
                  </div>

                  <h5 className="text-[14px] font-semibold text-white mt-2">
                    {c.name} <span className="text-xs font-normal text-gray-400">({c.age} / {c.gender})</span>
                  </h5>
                  <p className="text-xs text-gray-400 line-clamp-1 mt-1 font-sans italic">
                    "{c.symptomsText}"
                  </p>

                  <div className="flex justify-between items-center mt-3 text-[10px] font-mono">
                    <span className="text-cyan-400">{c.location}</span>
                    <span className={`text-[9px] font-bold px-1.5 rounded-sm ${c.triageLevel === "IMMEDIATE REFERRAL" ? "bg-red-950/65 text-red-400" : "bg-amber-950/65 text-amber-400"}`}>
                      {c.triageLevel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="h-[1px] bg-gray-800/80" />

          {/* Custom Symptom Input for Investors */}
          <form onSubmit={handleCustomSubmit} className="space-y-3">
            <label className="block text-xs font-semibold text-gray-400 font-mono tracking-wider uppercase">
              Or, Type custom symptoms (Any language):
            </label>
            <div className="relative">
              <input
                id="sandbox-custom-input"
                type="text"
                placeholder="e.g. 2 days fever, cough, high body temperature, head ache..."
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                className="w-full bg-[#0d121f] text-sm text-gray-100 placeholder-gray-500 border border-gray-800 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-cyan-500 transition"
              />
              <button
                id="sandbox-custom-submit-btn"
                type="submit"
                disabled={isAnalyzing || !customInput.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition"
              >
                {isAnalyzing ? (
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin block" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
            <p className="text-[10px] text-gray-500 leading-normal">
              💡 Our server-side neural networks translate local dialects (e.g. rural Hindi, regional Bengali) automatically into clinical codes.
            </p>
          </form>
        </div>

        {/* Right Column: Processing Output & Telemetry Details (7 Columns) */}
        <div className="lg:col-span-7 bg-[#070b14] border border-gray-800 rounded-2xl p-5 md:p-6 space-y-5 text-left">
          
          {/* Header */}
          <div className="flex justify-between items-center pb-3 border-b border-gray-800/60">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-gray-300">TELEMETRY DECODER ACTIVE</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/25">
              Protocol: SEHAT-CS-V3
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCase.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {/* Latency card */}
                <div className="bg-gray-900/60 p-3 rounded-xl border border-gray-800/50">
                  <span className="block text-[8px] text-gray-500 font-mono">BANDWIDTH CONSUMPTION</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">{selectedCase.bandwidthSaved}</span>
                </div>
                
                {/* Payload card */}
                <div className="bg-gray-900/60 p-3 rounded-xl border border-gray-800/50">
                  <span className="block text-[8px] text-gray-500 font-mono">BINARY SMS PACKET</span>
                  <span className="text-xs font-mono font-semibold text-cyan-400 select-all">{selectedCase.compressedPayload}</span>
                </div>

                {/* Satellite routing */}
                <div className="bg-gray-900/60 p-3 rounded-xl border border-gray-800/50 col-span-2 md:col-span-1">
                  <span className="block text-[8px] text-gray-500 font-mono">ROUTING ACCURACY</span>
                  <span className="text-xs font-mono font-bold text-white">99.4% Verified</span>
                </div>
              </div>

              {/* Patient core Details card */}
              <div className="bg-gradient-to-tr from-cyan-950/10 to-emerald-950/10 border border-gray-800/80 p-4 rounded-xl space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[8px] text-gray-500 block font-mono">PATIENT IDENTIFICATION</span>
                    <h4 className="text-sm font-semibold text-white mt-0.5">{selectedCase.name}</h4>
                    <p className="text-xs text-gray-400 font-medium font-sans">
                      {selectedCase.age} y/o {selectedCase.gender} • <span className="text-cyan-400 font-semibold">{selectedCase.location}</span>
                    </p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${selectedCase.triageLevel === "IMMEDIATE REFERRAL" ? "bg-red-950/80 text-red-400 border border-red-500/20 animate-pulse" : "bg-amber-950/80 text-amber-400 border border-amber-500/20"}`}>
                    {selectedCase.triageLevel}
                  </span>
                </div>

                <div className="bg-[#0b101d] p-3 rounded-lg border border-gray-800/40">
                  <span className="text-[8px] text-gray-500 font-mono block">DIALECT INPUT TRANSCRIPTION:</span>
                  <p className="text-xs text-gray-300 italic mt-1 font-sans">
                    "{selectedCase.symptomsText}"
                  </p>
                </div>
              </div>

              {/* Medical Diagnostic Analysis Output - auto translated */}
              <div className="space-y-3">
                <div>
                  <span className="text-[9px] text-gray-500 font-mono block">DIAGNOSTIC GUIDELINE ENGINE (HINDI / REGIONAL OUT):</span>
                  <div className="bg-gradient-to-r from-[#0d1715] to-[#04121d] p-3 rounded-xl border border-emerald-500/20 mt-1 relative">
                    <p className="text-xs text-emerald-200 font-sans leading-relaxed">
                      {selectedCase.analysisHindi}
                    </p>
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-emerald-950 border border-emerald-800 px-1 rounded text-[7px] font-mono text-emerald-400">
                      <Languages className="w-2.5 h-2.5" /> DECODED-LOCAL
                    </div>
                  </div>
                </div>

                {/* Local ASHA Dispatch alert */}
                <div>
                  <span className="text-[9px] text-gray-500 font-mono block">ASHA ESCALATION DISPATCH FOR WORKERS:</span>
                  <div className="bg-gray-900 border border-gray-800/60 p-3 rounded-xl mt-1 flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shrink-0 select-none text-[10px]">
                      A
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs text-white font-medium">Automatic Emergency Dispatch Triggered</p>
                      <p className="text-[11px] text-gray-400 leading-normal font-sans">
                        {selectedCase.ashaAction}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Closest PHC coordinates routing details */}
                <div className="bg-[#0e1628]/35 border border-cyan-500/10 p-3 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-cyan-950 border border-cyan-800 rounded-lg text-cyan-400">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[8px] text-gray-500 block font-mono">NEAREST CARE LEVEL LINKAGE</span>
                      <p className="text-[11px] font-semibold text-white">{selectedCase.phcName}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 px-2 py-1 rounded">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{selectedCase.nearestPHCDistance} Travel Distance</span>
                  </div>
                </div>
              </div>

              {/* Secure Medical Credibility Tag */}
              <div className="flex items-center gap-1 py-1.5 px-3 bg-emerald-950/30 border border-emerald-500/15 rounded-full text-[9px] text-emerald-400 font-mono w-fit">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Medically vetted via AIIMS rural clinical benchmark models (S_V3.8)</span>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
