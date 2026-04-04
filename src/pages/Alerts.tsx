import { Bell, Plus } from 'lucide-react'

const alerts = [
  { type: 'Price Drop', text: '42 Victoria Rd dropped £10K to £185,000', time: '2 hrs ago', color: '#10B981' },
  { type: 'New Listing', text: 'New 3-bed in Leeds LS1 matching your criteria', time: '5 hrs ago', color: '#3B82F6' },
  { type: 'Market Change', text: 'Manchester M1 yields up 0.3% this month', time: '1 day ago', color: '#F59E0B' },
  { type: 'Price Drop', text: '23 High St dropped £5K to £128,000', time: '2 days ago', color: '#10B981' },
  { type: 'New Listing', text: '2-bed flat in Birmingham B1, 7.4% yield', time: '3 days ago', color: '#3B82F6' },
]

const rules = [
  { name: 'High Yield Opportunities', criteria: 'Yield > 7%, Score > 80, North England', active: true },
  { name: 'London Price Drops', criteria: 'Price drop > 5%, Zone 2-4', active: true },
  { name: 'New Build Alerts', criteria: 'New build, 2+ beds, Under £250K', active: false },
]

export default function Alerts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#F1F5F9]">Alerts</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#10B981] hover:bg-[#059669]"><Plus size={16} /> New Alert Rule</button>
      </div>

      <div className="rounded-xl p-5 border border-white/10" style={{ background: '#111527' }}>
        <h2 className="text-lg font-semibold text-[#F1F5F9] mb-4">Alert Rules</h2>
        <div className="space-y-3">
          {rules.map(r => (
            <div key={r.name} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
              <div><div className="text-sm text-[#F1F5F9] font-medium">{r.name}</div><div className="text-xs text-[#64748B]">{r.criteria}</div></div>
              <div className={`w-10 h-5 rounded-full relative ${r.active ? 'bg-[#10B981]' : 'bg-white/10'}`}><div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white ${r.active ? 'right-0.5' : 'left-0.5'}`} /></div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl p-5 border border-white/10" style={{ background: '#111527' }}>
        <h2 className="text-lg font-semibold text-[#F1F5F9] mb-4"><Bell size={18} className="inline mr-2" />Recent Alerts</h2>
        <div className="space-y-3">
          {alerts.map((a, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
              <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: a.color }} />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1"><span className="text-xs font-medium px-2 py-0.5 rounded" style={{ background: `${a.color}20`, color: a.color }}>{a.type}</span><span className="text-xs text-[#64748B]">{a.time}</span></div>
                <p className="text-sm text-[#CBD5E1]">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
