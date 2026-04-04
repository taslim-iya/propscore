const properties = [
  { address: '42 Victoria Rd', city: 'Manchester', type: 'Flat', beds: 2, price: '£185,000', yield: '8.2%', score: 94 },
  { address: '15 Station Rd', city: 'Leeds', type: 'Terraced', beds: 3, price: '£142,000', yield: '7.6%', score: 89 },
  { address: '8 Park Lane', city: 'Birmingham', type: 'Semi-detached', beds: 3, price: '£210,000', yield: '7.1%', score: 86 },
  { address: '23 High St', city: 'Liverpool', type: 'Flat', beds: 1, price: '£128,000', yield: '6.9%', score: 82 },
  { address: '56 Church Rd', city: 'London SE15', type: 'Flat', beds: 2, price: '£385,000', yield: '5.4%', score: 71 },
  { address: '9 Elm Grove', city: 'Sheffield', type: 'Terraced', beds: 2, price: '£115,000', yield: '7.8%', score: 88 },
  { address: '31 Queens Ave', city: 'Nottingham', type: 'Semi-detached', beds: 4, price: '£195,000', yield: '6.5%', score: 77 },
  { address: '14 King St', city: 'Bristol', type: 'Flat', beds: 2, price: '£260,000', yield: '5.9%', score: 74 },
]

const scoreColor = (s: number) => s >= 85 ? '#10B981' : s >= 70 ? '#F59E0B' : '#EF4444'

export default function Properties() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#F1F5F9]">Properties</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {properties.map(p => (
          <div key={p.address} className="rounded-xl p-5 border border-white/10 hover:border-[#10B981]/30 transition" style={{ background: '#111527' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-[#94A3B8]">{p.type}</span>
              <span className="text-lg font-bold" style={{ color: scoreColor(p.score) }}>{p.score}</span>
            </div>
            <h3 className="font-semibold text-[#F1F5F9] text-sm">{p.address}</h3>
            <p className="text-xs text-[#64748B] mb-3">{p.city} · {p.beds} bed</p>
            <div className="flex justify-between text-sm">
              <span className="font-bold text-[#F1F5F9]">{p.price}</span>
              <span className="font-bold text-[#10B981]">{p.yield}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
