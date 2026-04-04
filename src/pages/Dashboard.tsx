import { Building2, TrendingUp, Percent, PoundSterling } from 'lucide-react'

const stats = [
  { label: 'Portfolio Value', value: '£1.24M', icon: PoundSterling, color: '#10B981' },
  { label: 'Monthly Yield', value: '£6,840', icon: TrendingUp, color: '#F59E0B' },
  { label: 'Avg ROI', value: '12.4%', icon: Percent, color: '#3B82F6' },
  { label: 'Properties', value: '6', icon: Building2, color: '#8B5CF6' },
]

const topOpps = [
  { address: '42 Victoria Rd, Manchester', score: 94, yield: '8.2%', price: '£185,000' },
  { address: '15 Station Rd, Leeds', score: 89, yield: '7.6%', price: '£142,000' },
  { address: '8 Park Lane, Birmingham', score: 86, yield: '7.1%', price: '£210,000' },
  { address: '23 High St, Liverpool', score: 82, yield: '6.9%', price: '£128,000' },
]

const scoreColor = (s: number) => s >= 85 ? '#10B981' : s >= 70 ? '#F59E0B' : '#EF4444'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#F1F5F9]">Dashboard</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="rounded-xl p-5 border border-white/10" style={{ background: '#111527' }}>
            <s.icon size={20} style={{ color: s.color }} className="mb-2" />
            <div className="text-2xl font-bold text-[#F1F5F9]">{s.value}</div>
            <div className="text-xs text-[#94A3B8]">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-5 border border-white/10" style={{ background: '#111527' }}>
        <h2 className="text-lg font-semibold text-[#F1F5F9] mb-4">Top Opportunities</h2>
        <div className="space-y-3">
          {topOpps.map(o => (
            <div key={o.address} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
              <div>
                <div className="text-sm text-[#F1F5F9] font-medium">{o.address}</div>
                <div className="text-xs text-[#64748B]">{o.price} · {o.yield} yield</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold" style={{ color: scoreColor(o.score) }}>{o.score}</span>
                <span className="text-xs text-[#64748B]">/ 100</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
