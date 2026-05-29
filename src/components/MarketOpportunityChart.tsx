import { useState } from "react";
import { 
  TrendingUp, Users, DollarSign, Award, Target, Landmark, ArrowRight, Activity, Percent
} from "lucide-react";
import { motion } from "motion/react";

interface OpportunityTier {
  category: "TAM" | "SAM" | "SOM";
  title: string;
  value: string;
  description: string;
  targetAudience: string;
  marketShareTarget: string;
  scaleFactor: number; // 0 to 1 for visual comparison circles
  gradient: string;
}

const opportunities: OpportunityTier[] = [
  {
    category: "TAM",
    title: "Total Addressable Market",
    value: "$42.5 Billion",
    description: "The total size of the Indian rural and semi-urban health and wellness commerce space plus digital public health software integrations.",
    targetAudience: "890 Million Rural Residents across 660,000 Indian villages",
    marketShareTarget: "N/A",
    scaleFactor: 1.0,
    gradient: "from-cyan-500/30 to-blue-500/20"
  },
  {
    category: "SAM",
    title: "Serviceable Addressable Market",
    value: "$12.8 Billion",
    description: "Rural population currently under digital penetration (cellular infrastructure active with access to basic low-band telephony & community health centers).",
    targetAudience: "380 Million smartphone-active under-served households",
    marketShareTarget: "100% addressable with Sehat's ultra-compressed local telemetry",
    scaleFactor: 0.72,
    gradient: "from-emerald-500/30 to-teal-500/20"
  },
  {
    category: "SOM",
    title: "Serviceable Obtainable Market (Y5)",
    value: "$2.4 Billion",
    description: "Sehat AI's projected captured market size through micro-insurance partnerships, private diagnostics links, and digital public health enterprise licensing.",
    targetAudience: "65 Million high-priority registered patient profiles",
    marketShareTarget: "12% of addressable base by Year 5 of operations",
    scaleFactor: 0.45,
    gradient: "from-cyan-500/60 to-emerald-500/50"
  }
];

export default function MarketOpportunityChart() {
  const [activeTier, setActiveTier] = useState<OpportunityTier>(opportunities[2]);

  return (
    <div className="glass-panel rounded-3xl p-5 md:p-8 border border-white/5 space-y-6 text-left" id="market-opportunity-dashboard">
      
      {/* Title */}
      <div className="pb-4 border-b border-gray-800/80">
        <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20 inline-flex items-center gap-1.5 uppercase">
          <Target className="w-3 h-3" /> Venture Opportunity Scale
        </span>
        <h3 className="text-xl md:text-2xl font-display font-medium text-white mt-1.5">
          Indian Healthcare Market Scalability
        </h3>
        <p className="text-xs text-gray-400 mt-1 max-w-xl">
          Rural India represents the ultimate blue ocean in healthcare technology. By resolving connectivity boundaries, Sehat AI unlocks unprecedented value across the healthcare ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Custom SVG Nested Market concentric circles (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#070b14] border border-gray-800 rounded-2xl p-6 text-center space-y-4">
          <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block">
            Market Scale Diagram (Click circles to inspect)
          </span>

          {/* Concentric Nesting Market Circles Visualization inside SVG */}
          <div className="w-full h-64 relative flex items-center justify-center">
            
            {/* TAM Circle */}
            <button
              id="market-tam-btn"
              onClick={() => setActiveTier(opportunities[0])}
              className={`absolute rounded-full flex flex-col items-center justify-center border transition-all duration-300 pointer-events-auto ${activeTier.category === "TAM" ? "w-[100%] h-[100%] bg-cyan-950/20 border-cyan-400/40 z-10" : "w-[90%] h-[90%] bg-cyan-950/5 border-cyan-500/10 hover:border-cyan-500/30 z-0"}`}
            >
              <div className="absolute top-2 text-[10px] font-mono text-cyan-400 font-bold">TAM: $42.5B</div>
            </button>

            {/* SAM Circle */}
            <button
              id="market-sam-btn"
              onClick={() => setActiveTier(opportunities[1])}
              className={`absolute rounded-full flex flex-col items-center justify-center border transition-all duration-300 pointer-events-auto ${activeTier.category === "SAM" ? "w-[72%] h-[72%] bg-emerald-950/30 border-emerald-400/50 z-20" : "w-[65%] h-[65%] bg-emerald-950/5 border-emerald-500/10 hover:border-emerald-500/30 z-10"}`}
            >
              <div className="absolute top-2 text-[10px] font-mono text-emerald-400 font-bold">SAM: $12.8B</div>
            </button>

            {/* SOM Circle */}
            <button
              id="market-som-btn"
              onClick={() => setActiveTier(opportunities[2])}
              className={`absolute rounded-full flex flex-col items-center justify-center border-2 transition-all duration-300 pointer-events-auto ${activeTier.category === "SOM" ? "w-[45%] h-[45%] bg-gradient-to-tr from-cyan-900/60 to-emerald-900/60 border-cyan-400/80 z-30 shadow-lg text-white" : "w-[40%] h-[40%] bg-cyan-950/40 border-cyan-500/20 hover:border-cyan-500/40 z-20 text-gray-400"}`}
            >
              <span className="text-[11px] font-bold font-mono">SOM</span>
              <span className="text-xs font-bold block">$2.4B</span>
              <span className="text-[7px] text-emerald-400 font-bold block tracking-wider mt-0.5">PROJECTED</span>
            </button>
          </div>

          <div className="flex gap-4 justify-center text-[10px] font-mono select-none">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cyan-500/30 border border-cyan-400" /> TAM</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-400" /> SAM</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cyan-500/80 border-2 border-cyan-400" /> SOM</span>
          </div>
        </div>

        {/* Right: Detailed profile card for specific selected Market Segment (7 Columns) */}
        <div className="lg:col-span-7 space-y-4">
          
          <div className="bg-[#070b14] border border-gray-800 rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-gray-800/80">
              <div>
                <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block">SELECTED VENTURE LAYER</span>
                <h4 className="text-[17px] font-bold text-white mt-0.5">{activeTier.title} ({activeTier.category})</h4>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-mono text-emerald-400 block tracking-wider font-bold">VALUATION CEILING</span>
                <span className="text-xl font-bold font-mono text-white bg-emerald-950/50 px-2 rounded-lg border border-emerald-500/20">{activeTier.value}</span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-normal font-sans">
              {activeTier.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
              <div className="bg-gray-900 border border-gray-800/80 p-3 rounded-xl">
                <span className="text-[8px] font-mono text-gray-500 block">DEMOGRAPHIC FOCUS</span>
                <p className="text-white mt-0.5 font-semibold text-[11px]">{activeTier.targetAudience}</p>
              </div>
              <div className="bg-gray-900 border border-gray-800/80 p-3 rounded-xl">
                <span className="text-[8px] font-mono text-gray-500 block">CAPTURED GROWTH EXPECTATION</span>
                <p className="text-white mt-0.5 font-semibold text-[11px]">{activeTier.marketShareTarget}</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
