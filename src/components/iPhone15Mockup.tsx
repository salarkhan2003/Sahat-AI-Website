import { useState, useEffect } from "react";
import { 
  WifiOff, CheckCircle2, ShieldAlert, Cpu, 
  Activity, Users, MessageSquareCode, Image as ImageIcon,
  Calendar, RotateCcw, AlertTriangle, Sparkles,
  Smartphone, Eye, Layers, Languages
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function IPhone15Mockup() {
  const [activeTab, setActiveTab] = useState<"chat" | "vision" | "offline" | "vaccine">("chat");
  const [selectedLanguage, setSelectedLanguage] = useState<"Hindi" | "English" | "Bengali" | "Tamil">("Hindi");
  const [simulatedPulse, setSimulatedPulse] = useState(74);

  // Simulate pulse rate fluctuating slightly
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedPulse(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Translated content for simulation
  const translations = {
    Hindi: {
      tag: "सेहत एआई • ग्रामीण स्वास्थ्य साथी",
      greeting: "नमस्ते राजेश जी,",
      statusMsg: "ऑफ़लाइन मोड सक्रिय • उपग्रह सिंक सक्षम",
      inputPlaceholder: "अपनी बीमारी के लक्षण बोलें या लिखें...",
      alertTitle: "उच्च प्राथमिकता चेतावनी",
      alertDesc: "मध्यम स्तर का निमोनिया जोखिम। 12 किमी प्राथमिक स्वास्थ्य केंद्र की सलाह दी गई है। आशा वर्कर को सूचित कर दिया गया है।",
      aiThought: "स्थानीय कंप्यूटर विज़न विश्लेषण पूर्ण...",
      scanButton: "त्वरित स्कैन",
      recheck: "पुनः जांच",
      patientCard: "मरीज: राजेश कुमार • उम्र: 43 वर्ष",
      riskLabel: "जोखिम श्रेणी",
      symptomLabel: "लक्षण",
      activeCamps: "सक्रिय स्वास्थ्य शिविर",
    },
    English: {
      tag: "Sehat AI • Rural Health Companion",
      greeting: "Namaste Rajesh-ji,",
      statusMsg: "Offline Mode Active • Satellite Sync Enabled",
      inputPlaceholder: "Speak or type your symptoms...",
      alertTitle: "High Priority Alert",
      alertDesc: "Moderate Pneumonia risk detected. Referral to nearest CHC (12km) recommended. Local ASHA worker notified.",
      aiThought: "Edge Computer Vision analysis complete...",
      scanButton: "Quick Scan",
      recheck: "Re-scan Item",
      patientCard: "Patient: Rajesh Kumar • Age: 43",
      riskLabel: "Risk Level",
      symptomLabel: "Symptoms",
      activeCamps: "Active Health Camps",
    },
    Bengali: {
      tag: "সেহত এআই • গ্রামীণ স্বাস্থ্য সাথী",
      greeting: "নমস্কার রাজেশ বাবু,",
      statusMsg: "অফলাইন মোড সক্রিয় • স্যাটেলাইট সিঙ্ক সক্ষম",
      inputPlaceholder: "আপনার রোগের লক্ষণ বলুন বা লিখুন...",
      alertTitle: "উচ্চ অগ্রাধিকার সতর্কতা",
      alertDesc: "মাঝারি নিউমোনিয়া ঝুঁকি। ১২ কিমি দূরের স্বাস্থ্যকেন্দ্রে যাওয়ার পরামর্শ। আশা কর্মীকে জানানো হয়েছে।",
      aiThought: "স্থানীয় কম্পিউটার ভিশন বিশ্লেষণ সম্পূর্ণ...",
      scanButton: "দ্রুত স্ক্যান",
      recheck: "পুনরায় পরীক্ষা",
      patientCard: "রোগী: রাজেশ কুমার • বয়স: ৪৩ বছর",
      riskLabel: "ঝুঁকির মাত্রা",
      symptomLabel: "উপসর্গ",
      activeCamps: "সক্রিয় স্বাস্থ্য শিবির",
    },
    Tamil: {
      tag: "சேஹத் ஏஐ • கிராமப்புற சுகாதாரத் துணவன்",
      greeting: "வணக்கம் ராஜேஷ் அவர்களே,",
      statusMsg: "ஆஃப்லைன் பயன்முறை • செயற்கைக்கோள் இணைப்பு",
      inputPlaceholder: "உங்கள் அறிகுறிகளைப் பேசவும் அல்லது எழுதவும்...",
      alertTitle: "உயர் முன்னுரிமை எச்சரிக்கை",
      alertDesc: "மிதமான நிமோனியா ஆபத்து. 12 கிமீ தொலைவிலுள்ள ஆரம்ப சுகாதார நிலையத்திற்கு செல்ல பரிந்துரை. ஆஷா பணியாளருக்கு தகவல்.",
      aiThought: "நுண்ணறிவு கணினி பார்வை பகுப்பாய்வு முடிந்தது...",
      scanButton: "விரைவான ஸ்கேன்",
      recheck: "மீண்டும் சோதி",
      patientCard: "நோயாளி: ராஜேஷ் குமார் • வயது: 43",
      riskLabel: "ஆபத்து நிலை",
      symptomLabel: "அறிகுறிகள்",
      activeCamps: "செயலில் உள்ள முகாம்கள்",
    }
  };

  const t = translations[selectedLanguage];

  return (
    <div className="relative mx-auto w-full max-w-[340px] md:max-w-[360px] aspect-[9/19.5] transition-all duration-300">
      {/* Absolute Ambient Background Glow behind phone */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/25 rounded-[60px] blur-2xl opacity-80 pointer-events-none" />

      {/* Main iPhone Frame */}
      <div className="absolute inset-0 bg-[#0c101b] rounded-[52px] border-[4px] border-[#313b51] shadow-[0_0_40px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(255,255,255,0.04)] overflow-hidden flex flex-col z-10">
        
        {/* Sleek Inner Screen Border Padding */}
        <div className="relative w-full h-full p-3.5 flex flex-col justify-between">
          
          {/* Top Status Bar Grid */}
          <div className="flex items-center justify-between text-[11px] font-medium text-gray-300 select-none z-30 px-3 pt-1">
            <span className="font-mono">09:41</span>
            
            {/* Dynamic Island (Pill Shape) */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full flex items-center justify-end px-2.5 shadow-[inset_0_0_1px_rgba(255,255,255,0.2)]">
              <span className="w-1.5 h-1.5 bg-[#1e293b] rounded-full mr-2" />
              <span className="w-2.5 h-2.5 bg-[#0a1530] rounded-full border border-emerald-500/20" />
            </div>

            <div className="flex items-center gap-1.5">
              <WifiOff className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1 rounded-sm border border-emerald-500/30">Satellite Sync</span>
              <div className="w-5.5 h-3 border border-gray-400 rounded-sm relative p-0.5 flex">
                <div className="h-full w-4/5 bg-gray-300 rounded-[1px]" />
                <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-[2px] h-[3px] bg-gray-400 rounded-r-sm" />
              </div>
            </div>
          </div>

          {/* Core App Header */}
          <div className="mt-4 px-2 py-1.5 border-b border-gray-800/60 flex items-center justify-between select-none">
            <div>
              <p className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {t.tag}
              </p>
              <h4 className="text-[13px] font-display font-medium text-white flex items-center gap-1">
                {t.greeting} <span className="text-xs text-gray-400 font-normal">({selectedLanguage})</span>
              </h4>
            </div>
            
            {/* Quick Country Indicator */}
            <div className="flex items-center gap-1 bg-gray-900/80 px-1.5 py-0.5 rounded border border-gray-800">
              <span className="text-[10px]">🇮🇳</span>
              <span className="text-[8px] font-bold text-gray-400 font-mono">IN</span>
            </div>
          </div>

          {/* Core Interactive Screen Content Wrapper */}
          <div className="flex-1 my-3 overflow-y-auto overflow-x-hidden pr-0.5 text-left">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: SYMPTOM ASSESSMENT CHAT */}
              {activeTab === "chat" && (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  {/* Status Bar for low-connectivity alert */}
                  <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-lg p-2 flex items-center gap-2 text-[10px] text-emerald-300">
                    <WifiOff className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-mono">{t.statusMsg}</span>
                  </div>

                  {/* Medical Conversation Screen Mockup */}
                  <div className="space-y-2.5">
                    {/* User Prompt */}
                    <div className="flex items-start gap-2 max-w-[90%] float-right flex-row-reverse">
                      <div className="bg-cyan-600/20 border border-cyan-500/30 text-cyan-200 text-[11px] p-2.5 rounded-2xl rounded-tr-none shadow-sm font-sans">
                        मुझे ३ दिनों से तेज खांसी है, सीने में दर्द है और सांस लेने में कठिनाई हो रही है।
                        <p className="text-[8px] text-cyan-400/70 text-right mt-1 font-mono">Bilingual Voice Input</p>
                      </div>
                    </div>

                    <div className="clear-both" />

                    {/* AI Response */}
                    <div className="flex items-start gap-1.5 max-w-[92%] float-left">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-[9px] font-bold text-black shrink-0">
                        S
                      </div>
                      <div className="bg-[#111827] border border-gray-800 text-gray-100 text-[11px] p-2.5 rounded-2xl rounded-tl-none shadow-sm space-y-2">
                        <div className="flex items-center justify-between text-[9px] font-medium text-emerald-400 font-mono">
                          <span>AI TRIA-MED ENGINE</span>
                          <span>99.1% Confidence</span>
                        </div>
                        <p className="leading-relaxed text-gray-300">
                          आपके श्वसन लक्षणों और सांस फूलने को देखते हुए, सांस की नलियों में सूजन अथवा तीव्र सांस संक्रमण (Bronchitis/Pneumonia) की अत्यधिक संभावना है।
                        </p>
                        
                        {/* Live Alert Box inside App */}
                        <div className="bg-red-950/30 border border-red-500/35 p-1.5 rounded-md mt-1">
                          <div className="flex items-center gap-1 text-red-400 text-[9px] font-bold">
                            <AlertTriangle className="w-3 h-3 shrink-0" />
                            <span>{t.alertTitle}</span>
                          </div>
                          <p className="text-[10px] text-red-200/90 mt-0.5 leading-tight">
                            {t.alertDesc}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="clear-both" />

                    {/* Speech Waveform Simulation representing Voice Interface */}
                    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-2.5 space-y-1.5">
                      <div className="flex items-center justify-between text-[8px] text-gray-400 font-mono">
                        <span>REAL-TIME VOICE WAVE</span>
                        <span className="text-cyan-400">Listening...</span>
                      </div>
                      <div className="h-6 flex items-center justify-center gap-0.5">
                        {[0.2, 0.6, 0.8, 0.4, 0.9, 0.3, 0.7, 0.5, 0.1, 0.8, 0.9, 0.4, 0.6, 0.2].map((val, idx) => (
                          <motion.span
                            key={idx}
                            animate={{ scaleY: [1, val * 3, 1] }}
                            transition={{ repeat: Infinity, duration: 1 + (idx * 0.1), ease: "easeInOut" }}
                            className="w-1 bg-gradient-to-t from-emerald-400 to-cyan-400 rounded-full h-1"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: SPECTRUM SKIN SCANNER */}
              {activeTab === "vision" && (
                <motion.div
                  key="vision"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="bg-cyan-950/20 border border-cyan-500/25 rounded-lg p-2 flex items-center justify-between text-[10px] text-cyan-300">
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="font-mono">Local CV Dermatological Engine</span>
                    </div>
                    <span className="text-emerald-400 font-bold font-mono">ACTIVE</span>
                  </div>

                  {/* Camera Scanner Box */}
                  <div className="relative aspect-video rounded-xl border border-dashed border-cyan-500/50 bg-[#0d121f] overflow-hidden flex items-center justify-center group shadow-md">
                    {/* Simulated skin lesion or sample */}
                    <div className="absolute w-12 h-12 rounded-full bg-orange-600/30 border border-red-500/30 blur-sm mix-blend-screen" />
                    <div className="absolute w-6 h-6 rounded-full bg-orange-700/20 border border-amber-600/40" />

                    {/* Scanning Matrix Overlay Line */}
                    <motion.div 
                      animate={{ translateY: [-50, 50, -50] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,111,214,0.8)] z-10"
                    />

                    {/* Computer Vision Matrix Overlay Markers */}
                    <div className="absolute inset-2 border border-cyan-500/10 rounded-lg pointer-events-none flex flex-col justify-between">
                      <div className="flex justify-between p-1 text-[8px] font-mono text-cyan-400/60">
                        <span>SCAN_M_01</span>
                        <span>GRID_CALIBRATED</span>
                      </div>
                      <div className="flex justify-between p-1 text-[7px] font-mono text-cyan-400/40">
                        <span>FPS: 30</span>
                        <span>LATENCY: 42ms</span>
                      </div>
                    </div>

                    <div className="z-10 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded text-center">
                      <p className="text-[10px] text-cyan-200 font-medium">Scanned Lesion #209</p>
                      <span className="text-[8px] font-mono text-gray-400">Eczema Detection Overlay</span>
                    </div>
                  </div>

                  {/* Diagnostic Breakdown */}
                  <div className="space-y-1.5 bg-gray-950/85 border border-gray-800 p-2.5 rounded-lg">
                    <div className="flex items-center justify-between text-[9px] font-mono text-gray-400">
                      <span>COMPUTER VISION PREDICTION</span>
                      <span className="text-emerald-400 font-bold">92% MATCH</span>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-white">Atopic Dermatitis (Eczema)</span>
                        <span className="text-cyan-400 font-mono">81.4% Probability</span>
                      </div>
                      <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                        <div className="bg-cyan-500 h-full rounded-full" style={{ width: "81.4%" }} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-gray-300">Psoriasis Rash</span>
                        <span className="text-gray-400 font-mono">13.2% Probability</span>
                      </div>
                      <div className="w-full bg-gray-900 h-1 rounded-full overflow-hidden">
                        <div className="bg-gray-700 h-full rounded-full" style={{ width: "13.2%" }} />
                      </div>
                    </div>

                    <div className="pt-1.5 border-t border-gray-800 mt-1.5 text-[10px] text-gray-400 leading-normal">
                      <p className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Suggested: Apply emollient twice daily. Keep dry. SMS advice sent.</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: OFFLINE SYNC ENGINE */}
              {activeTab === "offline" && (
                <motion.div
                  key="offline"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="bg-amber-950/20 border border-amber-500/25 rounded-lg p-2.5 text-center text-amber-300 space-y-1">
                    <h5 className="text-[11px] font-bold flex items-center justify-center gap-1">
                      <WifiOff className="w-3.5 h-3.5" /> Extreme Offline Mode
                    </h5>
                    <p className="text-[9px] text-amber-400/90 leading-normal">
                      Runs locally on custom 1.8B parameter ultra-compressed model. Backed up via SMS micro-packets.
                    </p>
                  </div>

                  {/* Compressed Schema Illustration */}
                  <div className="bg-gray-950/80 border border-gray-800 rounded-lg p-3 space-y-3 text-xs">
                    <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 tracking-wide">
                      <span>SMS SECTOR PACKET TRANSCEIVER</span>
                      <span className="text-cyan-400">TX/RX SUCCESS</span>
                    </div>

                    {/* Step illustration */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] flex items-center justify-center font-bold font-mono border border-emerald-500/30">1</span>
                        <div className="flex-1 text-[10px] text-gray-300">
                          Symptom data serialized to 140 bytes:
                          <div className="bg-gray-900 px-1.5 py-0.5 rounded text-[8px] font-mono text-cyan-300 overflow-x-auto select-all mt-0.5 whitespace-nowrap">
                            $SEHAT#V1#43M#RES-C_P_D#LAT-1341
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] flex items-center justify-center font-bold font-mono border border-emerald-500/30">2</span>
                        <div className="flex-1 text-[10px] text-gray-300">
                          Transmitted via GSM cell broadcast (no mobile internet).
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] flex items-center justify-center font-bold font-mono border border-emerald-500/30">3</span>
                        <div className="flex-1 text-[10px] text-gray-300">
                          Sehat AI Gateway resolves and returns clinical advice stream via offline SMS within 3 mins.
                        </div>
                      </div>
                    </div>

                    <div className="h-[1px] bg-gray-800/80" />

                    {/* Latency and packet visualizer */}
                    <div className="flex justify-between text-[9px] font-mono text-gray-400">
                      <div>
                        <span className="block text-[8px] text-gray-500">GSM SIGNAL</span>
                        <span className="font-bold text-amber-400">LOW (1 BAR)</span>
                      </div>
                      <div>
                        <span className="block text-[8px] text-gray-500 font-sans">COMPRESSION</span>
                        <span className="font-bold text-emerald-400">92% Savings</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[8px] text-gray-500 font-sans">ROUTED GATEWAY</span>
                        <span className="font-bold text-white">ISRO GSAT-24</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: VACCINATION TRACKER */}
              {activeTab === "vaccine" && (
                <motion.div
                  key="vaccine"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="bg-emerald-950/20 border border-emerald-500/25 rounded-lg p-2 flex items-center gap-2 text-[10px] text-emerald-300">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span className="font-mono">ASHA Pediatric Ledger</span>
                  </div>

                  {/* Schedule Details Dashboard */}
                  <div className="space-y-2">
                    {/* Patient detail */}
                    <div className="bg-gray-900 border border-gray-800 p-2 rounded-lg flex items-center justify-between">
                      <div>
                        <h6 className="text-[11px] font-semibold text-white">Baby Aarav (Age 9 Months)</h6>
                        <span className="text-[8px] text-gray-400 font-mono">Mother: Sunita Bai • Village Camp B</span>
                      </div>
                      <span className="text-[9px] text-emerald-400 font-semibold bg-emerald-950/35 px-1.5 py-0.5 rounded-full border border-emerald-500/30">97% On Track</span>
                    </div>

                    {/* Milestone Vaccines list */}
                    <div className="space-y-1.5">
                      <div className="bg-gray-950/90 border border-gray-800 p-2 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <div>
                            <p className="text-[10px] font-medium text-white">Pentavalent 3 (DPT+HepB+Hib)</p>
                            <span className="text-[8px] text-gray-500">Administered at 14 weeks</span>
                          </div>
                        </div>
                        <span className="text-[8px] font-mono text-gray-400 bg-gray-900 px-1 rounded">12/03/2026</span>
                      </div>

                      <div className="bg-gray-950/90 border border-gray-800 p-2 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <div>
                            <p className="text-[10px] font-medium text-white">OPV Booster 1</p>
                            <span className="text-[8px] text-gray-500 font-sans">Administered</span>
                          </div>
                        </div>
                        <span className="text-[8px] font-mono text-gray-400 bg-gray-900 px-1 rounded">03/05/2026</span>
                      </div>

                      <div className="bg-[#111827] border border-cyan-800/40 p-2 rounded-lg flex items-center justify-between animate-pulse">
                        <div className="flex items-center gap-2">
                          <div className="w-3.5 h-3.5 rounded-full border border-cyan-400 flex items-center justify-center shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold text-cyan-200">Measles & Rubella (MR) - 1</p>
                            <span className="text-[8px] text-cyan-400">Due Now • Target Age 9-12 m</span>
                          </div>
                        </div>
                        <span className="text-[8px] font-mono text-cyan-200 font-bold bg-cyan-950 px-1 rounded border border-cyan-800/60">ALERT SENT</span>
                      </div>
                    </div>

                    {/* Quick Broadcast Button */}
                    <button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black py-1.5 rounded-lg text-[10px] font-bold tracking-wide flex items-center justify-center gap-1 active:scale-[0.98] transition-transform">
                      <span>Notify ASHA Camp Worker via IVR/SMS</span>
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Tab Selection Underneath */}
          <div className="bg-[#111827] border border-gray-800 p-1.5 rounded-2xl flex items-center justify-between gap-1 select-none z-20">
            <button 
              id="mockup-tab-chat"
              onClick={() => setActiveTab("chat")}
              className={`flex-1 flex flex-col items-center py-1 rounded-xl transition ${activeTab === "chat" ? "bg-gradient-to-tr from-cyan-950 to-emerald-950 border border-cyan-600/30 text-white" : "text-gray-400 hover:text-white"}`}
            >
              <MessageSquareCode className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium mt-0.5">Symptom</span>
            </button>
            <button 
              id="mockup-tab-vision"
              onClick={() => setActiveTab("vision")}
              className={`flex-1 flex flex-col items-center py-1 rounded-xl transition ${activeTab === "vision" ? "bg-gradient-to-tr from-cyan-950 to-emerald-950 border border-cyan-600/30 text-white" : "text-gray-400 hover:text-white"}`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium mt-0.5">Skin Scan</span>
            </button>
            <button 
              id="mockup-tab-offline"
              onClick={() => setActiveTab("offline")}
              className={`flex-1 flex flex-col items-center py-1 rounded-xl transition ${activeTab === "offline" ? "bg-gradient-to-tr from-cyan-950 to-emerald-950 border border-cyan-600/30 text-white" : "text-gray-400 hover:text-white"}`}
            >
              <WifiOff className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium mt-0.5">Offline AI</span>
            </button>
            <button 
              id="mockup-tab-vaccine"
              onClick={() => setActiveTab("vaccine")}
              className={`flex-1 flex flex-col items-center py-1 rounded-xl transition ${activeTab === "vaccine" ? "bg-gradient-to-tr from-cyan-950 to-emerald-950 border border-cyan-600/30 text-white" : "text-gray-400 hover:text-white"}`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium mt-0.5">Registry</span>
            </button>
          </div>

          {/* Quick Bilingual Indicator for Simulator */}
          <div className="flex items-center justify-between mt-2.5 px-1 bg-gray-950/60 py-1.5 rounded-lg border border-gray-900">
            <span className="text-[8px] font-mono text-gray-400 flex items-center gap-1">
              <Languages className="w-3 h-3 text-cyan-400" /> SIM LANGUAGE:
            </span>
            <div className="flex gap-1">
              {(["Hindi", "English", "Bengali", "Tamil"] as const).map(lang => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`text-[8px] font-semibold px-1 py-0.5 rounded transition duration-150 ${selectedLanguage === lang ? "bg-emerald-500 text-black" : "bg-gray-900 text-gray-400 hover:text-gray-200"}`}
                >
                  {lang === "Hindi" ? "हिंदी" : lang === "English" ? "EN" : lang === "Bengali" ? "বাংলা" : "தமிழ்"}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Screen Overlay Bottom (Home Sweep Line) */}
          <div className="w-24 h-1 bg-gray-400/80 rounded-full mx-auto mt-2 select-none" />

        </div>
      </div>
      
      {/* Decorative physical camera bump indicators or glare */}
      <div className="absolute top-[120px] left-[-3px] w-[3px] h-6 bg-slate-700 rounded-l" />
      <div className="absolute top-[160px] left-[-3px] w-[3px] h-9 bg-slate-700 rounded-l" />
      <div className="absolute top-[210px] left-[-3px] w-[3px] h-9 bg-slate-700 rounded-l" />
      <div className="absolute top-[160px] right-[-3px] w-[3px] h-12 bg-slate-700 rounded-r" />
    </div>
  );
}
