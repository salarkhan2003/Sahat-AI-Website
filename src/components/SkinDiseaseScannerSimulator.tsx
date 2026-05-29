import { useState, useEffect } from "react";
import { 
  Camera, Eye, Layers, Sparkles, AlertCircle, ShieldAlert,
  Fingerprint, Activity, CheckCircle, Smartphone, Sliders, RefreshCw
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SkinCondition {
  id: string;
  name: string;
  hindiName: string;
  commonInRural: string;
  description: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
  confidence: number;
  treatmentRural: string;
  spectralDetails: {
    pigmentDensity: string;
    depthLevel: string;
    perimeterContour: string;
  };
  sampleColor: string; // Tailwinds radial gradient styles
}

const ruralConditions: SkinCondition[] = [
  {
    id: "scabies",
    name: "Sarcoptes Scabies (खुजली)",
    hindiName: "खुजली / स्केबीज",
    commonInRural: "Extremely high in shared water/overcrowded rural environments.",
    description: "Highly contagious skin infestation caused by microscopic mites burrowing into the epidermal layers of the skin.",
    severity: "MEDIUM",
    confidence: 94.6,
    treatmentRural: "Apply Permethrin 5% cream from neck down. Launder all bedding/clothing in boiling water. Inform family contacts.",
    spectralDetails: {
      pigmentDensity: "Irregular erythematous papules, micro-burrows detected",
      depthLevel: "Epidermal infestation layer (0.2mm - 0.4mm depth)",
      perimeterContour: "Clustered irregular nodules with high boundary chaos"
    },
    sampleColor: "from-red-600/30 via-amber-600/20 to-transparent"
  },
  {
    id: "ringworm",
    name: "Tinea Corporis (दाद/दाद रोग)",
    hindiName: "दाद / रिंगवर्म",
    commonInRural: "Widespread among farmers working in humid, muddy rice paddies.",
    description: "Superficial fungal infection characterized by clean annular (circular) scaly lesions with raised, active erythematous borders.",
    severity: "LOW",
    confidence: 98.2,
    treatmentRural: "Apply topical Clotrimazole cream twice daily for 21 days. Keep affected area dry. Avoid sharing farming towels.",
    spectralDetails: {
      pigmentDensity: "Active circular erythematous peripheral scaling pattern",
      depthLevel: "Stratum corneum layer superficial scan (0.1mm depth)",
      perimeterContour: "Classic circular boundary, high fidelity ring contour"
    },
    sampleColor: "from-rose-500/20 via-orange-600/15 to-transparent"
  },
  {
    id: "impetigo",
    name: "Pediatric Impetigo (झांझी/घाव)",
    hindiName: "घाव / इम्पेटिगो",
    commonInRural: "Commonly affects rural children through minor cuts or insect bites.",
    description: "Highly contagious superficial bacterial skin infection causing honey-colored crusted lesions, chiefly around the snout and lips.",
    severity: "HIGH",
    confidence: 91.8,
    treatmentRural: "Gently wash crusts with clean boiled water. Apply Mupirocin 2% ointment. Referral to PHC if fever develops (prevent Glomerulonephritis).",
    spectralDetails: {
      pigmentDensity: "Golden honey-colored serous exudate clusters",
      depthLevel: "Sub-corneal pustular layer (0.3mm depth)",
      perimeterContour: "Erosive map-like boundaries with focal crusting"
    },
    sampleColor: "from-amber-500/30 via-yellow-600/25 to-transparent"
  }
];

export default function SkinDiseaseScannerSimulator() {
  const [selectedCondition, setSelectedCondition] = useState<SkinCondition>(ruralConditions[0]);
  const [activeLayer, setActiveLayer] = useState<"standard" | "infrared" | "segmentation">("standard");
  const [isScanning, setIsScanning] = useState(false);
  const [scanningProgress, setScanningProgress] = useState(100);

  const triggerScan = () => {
    setIsScanning(true);
    setScanningProgress(0);
  };

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanningProgress(prev => {
          if (prev >= 100) {
            setIsScanning(false);
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 150);
      return () => clearInterval(interval);
    }
  }, [isScanning]);

  return (
    <div className="glass-panel rounded-3xl p-5 md:p-8 border border-white/5 space-y-6 text-left" id="skin-disease-scanner-simulator">
      
      {/* Top Details Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-800/80">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#06b6d4] bg-cyan-950/40 px-2.5 py-1 rounded-full border border-cyan-500/20 inline-flex items-center gap-1.5 uppercase">
            <Camera className="w-3 h-3 text-cyan-400" /> Edge Computer Vision
          </span>
          <h3 className="text-xl md:text-2xl font-display font-medium text-white mt-1.5">
            Local Multi-Spectral Skin Scan Diagnostic
          </h3>
          <p className="text-xs text-gray-400 mt-1 max-w-xl">
            In rural areas, 80% of dermatological complaints are misdiagnosed. Sehat AI runs extremely efficient computer vision models directly on 5-year-old mobile devices without internet.
          </p>
        </div>

        {/* Diagnostic speed check info */}
        <button
          id="btn-trigger-re-scan"
          onClick={triggerScan}
          disabled={isScanning}
          className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold text-xs px-4 py-2.5 rounded-xl active:scale-[0.98] transition cursor-pointer disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? "animate-spin" : ""}`} />
          {isScanning ? "Analyzing..." : "Trigger Simulation Scan"}
        </button>
      </div>

      {/* Main Scanner Section Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left Hand: The Interactive Scanning Screen frame (5 columns) */}
        <div className="md:col-span-5 flex flex-col items-center justify-center bg-[#070b14] border border-gray-800 rounded-2xl p-4 md:p-6 text-center space-y-4">
          
          <div className="w-full flex justify-between items-center text-[10px] font-mono text-gray-400 px-1">
            <span>MOBILE CAM PREVIEW</span>
            <span className="text-emerald-400">FPS: 45 (Local GPU)</span>
          </div>

          {/* Simulated Image Display Frame */}
          <div className="relative w-full aspect-square max-w-[240px] rounded-2xl border-2 border-cyan-500/30 overflow-hidden bg-[#0a101d] flex flex-col justify-end">
            
            {/* Skin sample colored background simulation */}
            <div className={`absolute inset-4 rounded-full bg-radial ${selectedCondition.sampleColor} blur-md transition-all duration-300`} />
            <div className="absolute inset-12 rounded-full border border-orange-500/20" />
            
            {/* Edge scanning lines or infrared highlights */}
            <AnimatePresence>
              {activeLayer === "infrared" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.65 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-red-950/40 mix-blend-color-dodge flex flex-col gap-1 overflow-hidden"
                >
                  <div className="w-full h-full bg-[linear-gradient(to_bottom,transparent_45%,rgba(239,68,68,0.35)_50%,transparent_55%)] bg-[size:100%_12px]" />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {activeLayer === "segmentation" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center p-2"
                >
                  {/* Visual bounding boxes */}
                  <div className="border border-green-500 rounded-lg w-28 h-28 flex flex-col justify-between p-1">
                    <span className="text-[7px] text-green-400 font-mono">MATCH_CONF: {selectedCondition.confidence}%</span>
                    <span className="text-[7px] text-green-400 font-mono text-right">LESION_CLASS_0</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Standard grid calibration */}
            {activeLayer === "standard" && (
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex flex-col justify-between p-3 select-none pointer-events-none">
                <div className="flex justify-between">
                  <span className="w-3.5 h-3.5 border-t border-l border-cyan-400" />
                  <span className="w-3.5 h-3.5 border-t border-r border-cyan-400" />
                </div>
                <div className="flex justify-between">
                  <span className="w-3.5 h-3.5 border-b border-l border-cyan-400" />
                  <span className="w-3.5 h-3.5 border-b border-r border-cyan-400" />
                </div>
              </div>
            )}

            {/* Simulated overlay scan laser moving */}
            {isScanning && (
              <motion.div 
                animate={{ translateY: [-120, 120, -120] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] z-10"
              />
            )}

            {/* Center target scanning text status */}
            <div className="z-10 bg-black/85 border border-gray-800 backdrop-blur-sm p-2 rounded-xl m-3 text-left">
              <p className="text-[10px] text-white font-mono font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                {isScanning ? `SPECTRAL MODEL: SCANNING ${scanningProgress}%` : `LESION DIAG PREVIEW`}
              </p>
              <p className="text-[8px] text-gray-400 mt-0.5 font-sans truncate">
                {selectedCondition.name}
              </p>
            </div>
          </div>

          {/* Visual Layer Toggles */}
          <div className="bg-gray-950 p-1.5 rounded-xl flex items-center gap-1.5 w-full border border-gray-800 select-none">
            <button
              id="btn-scan-layer-standard"
              onClick={() => setActiveLayer("standard")}
              className={`flex-1 text-[10px] font-semibold py-1 rounded-lg transition ${activeLayer === "standard" ? "bg-cyan-500 text-black" : "text-gray-400 hover:text-white"}`}
            >
              RBG Normal
            </button>
            <button
              id="btn-scan-layer-infra"
              onClick={() => setActiveLayer("infrared")}
              className={`flex-1 text-[10px] font-semibold py-1 rounded-lg transition ${activeLayer === "infrared" ? "bg-cyan-500 text-black" : "text-gray-400 hover:text-white"}`}
            >
              Infrared
            </button>
            <button
              id="btn-scan-layer-seg"
              onClick={() => setActiveLayer("segmentation")}
              className={`flex-1 text-[10px] font-semibold py-1 rounded-lg transition ${activeLayer === "segmentation" ? "bg-cyan-500 text-black" : "text-gray-400 hover:text-white"}`}
            >
              Segmentation
            </button>
          </div>

        </div>

        {/* Right Hand: Interactive options list and analytical data output (7 columns) */}
        <div className="md:col-span-7 space-y-4">
          
          {/* Diagnostic choice tabs */}
          <div className="flex gap-2">
            {ruralConditions.map((cond) => (
              <button
                id={`btn-select-cond-${cond.id}`}
                key={cond.id}
                onClick={() => setSelectedCondition(cond)}
                className={`flex-1 text-center p-2 rounded-xl border text-xs font-semibold transition cursor-pointer ${selectedCondition.id === cond.id ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300" : "bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white"}`}
              >
                {cond.name.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Selected disease detailed profile card */}
          <div className="bg-[#070b14] border border-gray-800 rounded-2xl p-4 md:p-5 space-y-4">
            
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[8px] font-mono text-gray-500 tracking-wider block uppercase">DIAGNOSTIC CASE DESCRIPTION</span>
                <h4 className="text-base font-semibold text-white mt-1">
                  {selectedCondition.name}
                </h4>
                <p className="text-xs text-emerald-400/90 font-medium mt-0.5">
                  Vernacular Label: <span className="underline">{selectedCondition.hindiName}</span>
                </p>
              </div>

              <div className="text-right">
                <span className="block text-[8px] font-mono text-gray-500">SEVERITY STATUS</span>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded inline-block mt-0.5 ${selectedCondition.severity === "HIGH" ? "bg-red-950 text-red-400 border border-red-500/20" : selectedCondition.severity === "MEDIUM" ? "bg-amber-950 text-amber-400 border border-amber-500/20" : "bg-emerald-950 text-emerald-400 border border-emerald-500/20"}`}>
                  {selectedCondition.severity} RISK
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-sans mt-2">
              {selectedCondition.description}
            </p>

            <div className="bg-emerald-900/10 border border-emerald-500/15 p-3 rounded-xl">
              <span className="text-[8px] font-mono text-emerald-400 block tracking-widest">INCIDENCE IN RURAL POPULAION</span>
              <p className="text-xs text-gray-300 mt-1 font-sans">
                {selectedCondition.commonInRural}
              </p>
            </div>

            {/* Spectral Analytical Metrics */}
            <div className="space-y-2 border-t border-gray-800/80 pt-3">
              <span className="text-[8px] font-mono text-gray-500 block tracking-wider uppercase">SPECTRAL CHROMATOGRAPHY METRICS</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                <div className="bg-gray-900/60 p-2.5 rounded-lg border border-gray-800">
                  <span className="block text-[8px] text-gray-500 font-mono">PIGMENTATION PATTERN</span>
                  <span className="text-white font-medium block truncate mt-0.5">{selectedCondition.spectralDetails.pigmentDensity}</span>
                </div>
                <div className="bg-gray-900/60 p-2.5 rounded-lg border border-gray-800">
                  <span className="block text-[8px] text-gray-500 font-mono">VOLUMETRIC PENETRATION</span>
                  <span className="text-white font-medium block truncate mt-0.5">{selectedCondition.spectralDetails.depthLevel}</span>
                </div>
                <div className="bg-gray-900/60 p-2.5 rounded-lg border border-gray-800">
                  <span className="block text-[8px] text-gray-500 font-mono">CONTOUR IRREGULARITY</span>
                  <span className="text-white font-medium block truncate mt-0.5">{selectedCondition.spectralDetails.perimeterContour}</span>
                </div>
              </div>
            </div>

            {/* Offline Treatment Guidelines */}
            <div className="border-t border-gray-800/80 pt-3 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-mono text-cyan-400 tracking-wider block uppercase">OFFLINE TRIA-MED ACTION</span>
                <span className="text-emerald-400 text-xs font-mono font-bold">{selectedCondition.confidence}% Confidence Match</span>
              </div>
              <div className="bg-[#0b121e] border-l-2 border-cyan-500/80 p-3 rounded-r-lg">
                <p className="text-[11px] text-gray-300 font-sans leading-relaxed">
                  {selectedCondition.treatmentRural}
                </p>
              </div>
            </div>

          </div>

          {/* Device and medical standards logo list for credibility */}
          <div className="flex items-center justify-between text-[10px] text-gray-500 px-2 font-mono">
            <span className="flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-cyan-500" /> HIPAA Compliant Local Storage
            </span>
            <span className="flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-emerald-500" /> CDSCO Vetted Standards
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
