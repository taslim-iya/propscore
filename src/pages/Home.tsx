import { Link } from 'react-router-dom'
import { Home as HomeIcon, TrendingUp, Bell, Search } from 'lucide-react'

export default function Home() {
  return (
    <div className="text-[#F1F5F9]">
      <nav className="border-b border-white/10 px-6 h-16 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-[#10B981] font-bold text-xl"><HomeIcon size={22} /> PropScore</div>
        <Link to="/dashboard" className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#10B981] hover:bg-[#059669]">Start Investing</Link>
      </nav>
      <section className="relative py-24 px-6 text-center">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.15), transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">AI-Powered <span className="text-[#10B981]">Property Investment</span> Intelligence</h1>
          <p className="text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto">Find, score, and track property opportunities across the UK with AI-driven analysis.</p>
          <Link to="/dashboard" className="px-8 py-4 rounded-xl text-lg font-bold text-white bg-[#10B981] hover:bg-[#059669] inline-block">Explore Opportunities →</Link>
        </div>
      </section>
      <section className="py-16 px-6 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[{ v: '12,400+', l: 'Properties Tracked' }, { v: '6.8%', l: 'Avg Yield' }, { v: '£2.1B', l: 'Portfolio Tracked' }, { v: '340+', l: 'Active Investors' }].map(s => (
          <div key={s.l} className="rounded-2xl p-6 border border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className="text-3xl font-bold text-[#10B981]">{s.v}</div><div className="text-sm text-[#94A3B8] mt-1">{s.l}</div>
          </div>
        ))}
      </section>
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {[
          { icon: Search, title: 'Smart Search', desc: 'AI scans thousands of listings to find hidden gems.' },
          { icon: TrendingUp, title: 'Yield Analysis', desc: 'Predict rental yields and capital growth with AI.' },
          { icon: Bell, title: 'Price Alerts', desc: 'Get notified when properties match your criteria.' },
          { icon: HomeIcon, title: 'Portfolio Tracking', desc: 'Monitor your entire portfolio in one dashboard.' },
        ].map(f => (
          <div key={f.title} className="rounded-2xl p-6 border border-white/10 text-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <f.icon className="mx-auto mb-4 text-[#10B981]" size={32} /><h3 className="font-semibold mb-2">{f.title}</h3><p className="text-sm text-[#94A3B8]">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
