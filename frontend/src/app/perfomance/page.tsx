import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { name: 'Earthquake', uv: 0 },
  { name: 'Flood', uv: 0 },
  { name: 'Fire', uv: 0 },
  { name: 'Cyclone', uv: 0 },
  { name: 'Disaster First Aid', uv: 0 },
  { name: 'Search & Rescue', uv: 0 },
];

const margin = { top: 20, right: 20, left: -10, bottom: 5 };

// Updated to map precisely to your disaster modules
function getIntroOfPage(label: string): string {
  if (label === 'Earthquake') return "Seismic drill scores and structural response logs.";
  if (label === 'Flood') return "Evacuation route timeline and water safety metrics.";
  if (label === 'Fire') return "Containment procedures and chemical hazard protocols.";
  if (label === 'Cyclone') return "High-wind mitigation tasks and coastal shelter alerts.";
  if (label === 'Disaster First Aid') return "Triage prioritization and field medical training checks.";
  if (label === 'Search & Rescue') return "Extrication tactics and dynamic hazard simulations.";
  return '';
}

// Cyberpunk-style premium dark glass tooltip
function CustomTooltip({ payload, label, active }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-4  shadow-2xl backdrop-blur-md ring-1 ring-white/5 transition-all duration-200">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
          <p className="text-sm font-semibold text-zinc-100 tracking-wide">
            {label}
          </p>
        </div>
        
        <div className="mt-2.5 space-y-1.5">
          <div className="flex items-baseline gap-6 justify-between">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Active Users</span>
            <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              {payload[0].value.toLocaleString()} pts
            </span>
          </div>
          
          <p className="text-xs leading-relaxed text-zinc-400 pt-1 border-t border-zinc-800/50 max-w-[200px]">
            {getIntroOfPage(label)}
          </p>
        </div>
      </div>
    );
  }
  return null;
}

export default function CustomizeTooltipContent() {
  return (
    // Component wrapper explicitly sets a rich, clean pitch-black workspace layout
    <div className="w-full max-w-3xl mx-auto p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      
      {/* Header section integrated cleanly with subtle borders */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-zinc-900 pb-5">
        <div>
          <h3 className="text-lg font-bold text-zinc-50 tracking-wide">Incident Platform Analytics</h3>
          <p className="text-xs text-zinc-500 mt-0.5">Real-time simulation metrics categorized by active module instances.</p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            System Live
          </span>
        </div>
      </div>

      {/* Main Chart viewport container */}
      <div className="h-[320px] w-full bg-zinc-900/20 rounded-xl p-2 border border-zinc-900/40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={margin}>
            {/* Added a subtle linear gradient for the bars inside the defs block */}
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.85} />
                <stop offset="100%" stopColor="#059669" stopOpacity={0.15} />
              </linearGradient>
            </defs>

            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#71717a', fontSize: 11, fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#71717a', fontSize: 11 }}
              dx={-5}
            />
            {/* The cursor mask matches the dark hover state elegantly */}
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={{ fill: '#18181b', opacity: 0.4, radius: 6 }} 
            />
            
            <Bar 
              dataKey="uv" 
              fill="url(#barGradient)" 
              radius={[6, 6, 0, 0]} 
              maxBarSize={40}
              className="cursor-pointer transition-all duration-300 hover:opacity-100"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <RechartsDevtools />
    </div>
  );
}