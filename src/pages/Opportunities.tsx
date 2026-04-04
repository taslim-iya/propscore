const deals = [
  { address: '42 Victoria Rd, Manchester', score: 94, yield: '8.2%', price: '£185,000', comps: '£205K avg', risk: 'Low', reason: 'Below market value, high rental demand area' },
  { address: '15 Station Rd, Leeds', score: 89, yield: '7.6%', price: '£142,000', comps: '£158K avg', risk: 'Low', reason: 'Station proximity, student demand' },
  { address: '9 Elm Grove, Sheffield', score: 88, yield: '7.8%', price: '£115,000', comps: '£130K avg', risk: 'Medium', reason: 'Regeneration area, prices rising fast' },
  { address: '8 Park Lane, Birmingham', score: 86, yield: '7.1%', price: '£210,000', comps: '£225K avg', risk: 'Low', reason: 'HS2 corridor, strong capital growth predicted' },
  { address: '23 High St, Liverpool', score: 82, yield: '6.9%', price: '£128,000', comps: '£140K avg', risk: 'Medium', reason: 'City centre regen, Airbnb potential' },
]

const riskColors: Record<string, string> = { Low: '#10B981', Medium: '#F59E0B', High: '#EF4444' }

export default function Opportunities() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#F1F5F9]">AI-Scored Opportunities</h1>
      <div className="space-y-4">
        {deals.map((d, i) => (
          <div key={d.address} className="rounded-xl p-6 border border-white/10 flex items-center gap-6" style={{ background: '#111527' }}>
            <div className="text-center shrink-0">
              <div className="text-3xl font-bold" style={{ color: d.score >= 85 ? '#10B981' : '#F59E0B' }}>#{i + 1}</div>
              <div className="text-xs text-[#64748B]">Score: {d.score}</div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#F1F5F9]">{d.address}</h3>
              <p className="text-sm text-[#94A3B8] mt-1">{d.reason}</p>
              <div className="flex gap-4 mt-2 text-xs text-[#64748B]">
                <span>💰 {d.price}</span>
                <span>📊 {d.yield} yield</span>
                <span>🏘️ Comps: {d.comps}</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: `${riskColors[d.risk]}20`, color: riskColors[d.risk] }}>{d.risk} Risk</span>
          </div>
        ))}
      </div>
    </div>
  )
}
