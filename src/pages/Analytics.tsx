const areas = [
  { name: 'Manchester', avgYield: '7.8%', avgPrice: '£195K', growth: '+8.2%', score: 91 },
  { name: 'Leeds', avgYield: '7.2%', avgPrice: '£155K', growth: '+6.4%', score: 87 },
  { name: 'Birmingham', avgYield: '6.9%', avgPrice: '£215K', growth: '+7.1%', score: 84 },
  { name: 'Liverpool', avgYield: '7.5%', avgPrice: '£135K', growth: '+5.8%', score: 83 },
  { name: 'Sheffield', avgYield: '7.1%', avgPrice: '£125K', growth: '+4.9%', score: 79 },
  { name: 'London', avgYield: '4.2%', avgPrice: '£485K', growth: '+3.1%', score: 62 },
]

const monthly = [
  { month: 'Jan', value: 980 }, { month: 'Feb', value: 1020 }, { month: 'Mar', value: 1080 },
  { month: 'Apr', value: 1050 }, { month: 'May', value: 1150 }, { month: 'Jun', value: 1240 },
]
const max = Math.max(...monthly.map(m => m.value))

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#F1F5F9]">Market Analytics</h1>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl p-5 border border-white/10" style={{ background: '#111527' }}>
          <h2 className="text-lg font-semibold text-[#F1F5F9] mb-4">Area Comparison</h2>
          <table className="w-full text-sm">
            <thead><tr className="text-[#64748B] text-xs text-left"><th className="pb-3">Area</th><th className="pb-3">Yield</th><th className="pb-3">Avg Price</th><th className="pb-3">Growth</th><th className="pb-3">Score</th></tr></thead>
            <tbody>{areas.map(a => (
              <tr key={a.name} className="border-t border-white/5">
                <td className="py-2 text-[#F1F5F9] font-medium">{a.name}</td>
                <td className="py-2 text-[#10B981]">{a.avgYield}</td>
                <td className="py-2 text-[#94A3B8]">{a.avgPrice}</td>
                <td className="py-2 text-[#3B82F6]">{a.growth}</td>
                <td className="py-2 font-bold" style={{ color: a.score >= 80 ? '#10B981' : a.score >= 70 ? '#F59E0B' : '#EF4444' }}>{a.score}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <div className="rounded-xl p-5 border border-white/10" style={{ background: '#111527' }}>
          <h2 className="text-lg font-semibold text-[#F1F5F9] mb-4">Portfolio Performance (£K)</h2>
          <div className="flex items-end gap-4 h-40">
            {monthly.map(m => (
              <div key={m.month} className="flex-1 flex flex-col items-center">
                <div className="w-full rounded-t-lg bg-[#10B981]" style={{ height: `${(m.value / max) * 100}%` }} />
                <span className="text-xs text-[#64748B] mt-2">{m.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
